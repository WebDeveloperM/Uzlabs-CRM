import FormInput from "@core/components/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { SetStateAction, useRef, useState } from "react";
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { TimeRangePickerProps } from 'antd/es/time-picker';
import { useTranslation } from "react-i18next";
import MathCaptcha from "@core/components/Captcha";
import { Link, useNavigate } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { VscRefresh } from "react-icons/vsc";
import { toast } from "react-toastify";
import TextEditor from "../TextEditor";
import { useMask } from "@react-input/mask";
import { useWorkerPositions } from "@clinica/hooks/addClinic";
import { getRelevantIds } from "@doctors/utils/selectedIDS";
import { useDoctors } from "@doctors/context/addDoctorContext";
import { DoctorFormData } from "@doctors/types";
import clsx from "clsx";
import { generatePassword } from "@doctors/utils/functions";
import TreeSelectComponent from "../TreeSelectComponent";
import { useAddDoctors } from "@doctors/hooks/addDoctors";

// import TextEditor from "../TextEditor";
let passwordTimeOutId: ReturnType<typeof setTimeout>
let confirmPasswordTimeOutId: ReturnType<typeof setTimeout>

export default function DoctorAddTab2() {
  const [check, setCheck] = useState<SetStateAction<boolean>>(false)
  const clinicId = localStorage.getItem("clinicId")
  const [isVerified, setIsVerified] = useState(false)
  const { t, i18n } = useTranslation()
  const methods = useForm<DoctorFormData>({ mode: "onBlur" })
  const { data, setData } = useDoctors()
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const cropperRef = useRef<HTMLImageElement>(null);
  const workerPositions = useWorkerPositions()
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [_, setSalary] = useState<number>()
  const [allowTime, setAllowTime] = useState<string[]>(["08:00:00", "20:00:00"])
  const [showPass, setShowPass] = useState(false)
  const [password, setPassword] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfPassword, setErrorConfPassword] = useState("")
  const [showConfPass, setShowConfPass] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [gender, setGender] = useState("")
  const [canSeeReports, setCanSeeReports] = useState(false)
  const navigate = useNavigate()
  const { mutateAsync } = useAddDoctors()
  const handleChangeSelect = (ids: number[]) => {
    setSelectedIds(ids)
    setData({ ...data, position: ids })
  }
  const inputRoleWord = useMask({
    mask: "жж",
    replacement: { ж: /[A-Za-z]/ },
    onMask: (mask) => (mask.target.value = mask.target.value.toUpperCase()),
  })
  const { ref: formRoleWord } = methods.register("orderSign")
  const inputRef = useMask({ mask: "(__) ___-__-__", replacement: { _: /\d/ } })
  const { ref: formInputRef } = methods.register("phoneNumber")


  const inputTimeOutRef = useMask({ mask: "___", replacement: { _: /\d/ }, })
  const { ref: formTimeOutRef } = methods.register("timeOutMinutes")

  // const inputSalary = useMask({ mask: "__ ___ ___ ___", replacement: { _: /\d/ }, })
  // const { ref: formSalary } = methods.register("salary")

  const possibleRoles = getRelevantIds("uz")

  dayjs.extend(customParseFormat);

  const timePickerChange: TimeRangePickerProps['onChange'] = (dates, dateStrings) => {
    console.log(dates);
    setAllowTime(dateStrings)
  };



  const handleCaptchaVerify = (status: boolean) => {
    setIsVerified(status);
  };


  const handleShowPassword = () => {
    if (passwordTimeOutId) clearTimeout(passwordTimeOutId)
    if (showPass) return setShowPass(false)

    setShowPass(true)
    passwordTimeOutId = setTimeout(() => setShowPass(false), 5000)
  }

  const onBlurPassword = () => {
    if (password == "") {
      setErrorPassword(t("errorPassword"))
      return
    } else {
      setErrorPassword("")
    }
  }

  const onBlurConfPassword = () => {
    if (confirmPassword == "") {
      setErrorConfPassword(t("repeatConfPassword"))
      return
    } else {
      setErrorConfPassword("")
    }
  }

  const handleShowConfPassword = () => {
    if (confirmPasswordTimeOutId) clearTimeout(confirmPasswordTimeOutId)
    if (showConfPass) return setShowConfPass(false)

    setShowConfPass(true)
    confirmPasswordTimeOutId = setTimeout(() => setShowConfPass(false), 5000)
  }




  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setData({ ...data, base64Photo: reader.result as string })
      };
      reader.readAsDataURL(file);
    }
  };

  const [content, setContent] = useState<string>('');

  const handleContentChange = (value: string) => {
    setContent(value);
  };


  const getCropData = () => {
    const cropper = (cropperRef.current as any)?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
        if (blob) {
          const croppedFile = new File([blob], "cropped-image.png", { type: "image/png" });
          setFile(croppedFile);
          toast.success("Ma'lumot saqlandi");
        }
      }, 'image/png');
    }
  };




  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    setConfirmPassword(newPassword);
  };

  async function onSubmit(data: DoctorFormData) {
    data.allowedWorkingHours = allowTime
    data.clinicId = clinicId ? parseInt(clinicId) : 0
    data.base64Photo = image as string
    data.sex = gender
    data.position = selectedIds
    data.canSeeReports = canSeeReports
    data.description = content

    if (password !== confirmPassword) {
      toast.warning("Parollar mos kelmadi")
      return
    }

    data.password = password
    data.passwordConfirm = confirmPassword

    if (!check) {
      toast.warning(t("agreeTerms"))
      return
    }
    if (!isVerified) {
      toast.warning(t("proveNotRobot"))
      return
    }

    const response = await mutateAsync(data)



    if (!response.success && response.message == "Username already exists.") {
      toast.warning("Bunday foydalanuvchi mavjud. Boshqa login kiriting")
      return
    }
    if (!response.success && response.message == "Failed to create user.") {
      toast.warning("Parol kiritishda xatolik. (A-Za-z/1-9/) belgilar bo'lishi majburiy")
      return
    }
    if (!response.success && response.message == "Clinic not found.") {
      toast.warning("Shifoxona ma'lumotlarida xatolik mavjud. ")
      return
    }
    if (!response.success && response.message == "Invalid position ID:") {
      toast.warning("Hodimning rolida xatolik mavjud")
      navigate("/")
      return
    }

    if (response.success && response.message == "Employee created successfully.") {
      toast.success("Hodim muvaffaqqaiyatli qo'shildi")
      navigate("/doctors")
      navigate(0)
      return
    }
  }



  if (!workerPositions.data || !workerPositions.data.data) {
    return <p className="px-5">Ma'lumotlar yuklanmoqda...</p> // Yuklanayotgan holat
  }

  return (
    <div className="px-3 mt-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="  ">
          <div className="sm:grid grid-cols-12 gap-3 px-0.5">
            <div className="2xl:col-span-3 col-span-4">
              <FormInput
                label={
                  <label htmlFor="firstName" className="text-gray-700">
                    Familiya
                    <span className="text-red-500">*</span>
                  </label>
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, lastName: e.target.value })}
                className="mt-1"
                name="lastName"
                placeholder={"Familiya kiriting"}
              />
            </div>
            <div className="2xl:col-span-3 col-span-4">
              <FormInput
                label={
                  <label htmlFor="firstName" className="text-gray-700">
                    Ism
                    <span className="text-red-500">*</span>
                  </label>
                }
                // value={data.clinicName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, firstName: e.target.value })}
                className="mt-1"
                name="firstName"
                placeholder={"Ism kiriting"}
              />
            </div>
            <div className="2xl:col-span-3 col-span-4">
              <FormInput
                label={
                  <label htmlFor="firstName" className="text-gray-700">
                    Otasining ismi
                    <span className="text-red-500">*</span>
                  </label>
                }
                // value={data.clinicName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, fatherName: e.target.value })}
                className="mt-1"
                name="fatherName"
                placeholder={"Otasining ismini kiriting"}
              />
            </div>

            <div className="2xl:col-span-3 col-span-4 sm:mt-0 mt-2">
              <FormInput
                label={
                  <label htmlFor="firstName" className="text-gray-700">
                    Telefon raqam
                    <span className="text-red-500">*</span>
                  </label>
                }
                // value={data.phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, phoneNumber: e.target.value })}
                className="mt-1"
                name="phoneNumber"
                placeholder={"Telefon raqam kiriting"}
                inputRef={inputRef}
                formInputRef={formInputRef}
              />
            </div>

            <div className="2xl:col-span-3 col-span-4 sm:mt-0 mt-2">
              <FormInput
                label={
                  <label htmlFor="firstName" className="text-gray-700">
                    Time Out (minut)
                  </label>
                }
                // value={data.website}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, timeOutMinutes: parseInt(e.target.value) })}
                className="mt-1"
                name="timeOutMinutes"
                placeholder={"Ishlash muddati"}
                inputRef={inputTimeOutRef}
                formInputRef={formTimeOutRef}

              />
            </div>

            <div className="2xl:col-span-3 col-span-4 sm:mt-1 mt-2">
              <p className="text-gray-700 pb-1">
                Kirish imkoniyati (08:00 - 20:00)
              </p>

              <Space direction="vertical" >
                <TimePicker.RangePicker className="sm:w-[338px] w-[100%]"
                  onChange={timePickerChange}
                  defaultValue={[dayjs('08:00', 'HH:mm'), dayjs('20:00', 'HH:mm')]}
                  placeholder={['Boshlash', 'Tugash']}

                />
              </Space>


            </div>

            <div className="2xl:col-span-3 col-span-4 sm:mt-0 mt-2">
              <FormInput
                label={
                  <label htmlFor="firstName" className="text-gray-700">
                    Ish haqqi
                    <span className="text-red-500">*</span>
                  </label>
                }
                // defaultValue={salary?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, salary: parseInt(e.target.value) })
                  setSalary(parseInt(e.target.value))
                }
                }
                className="mt-1"
                name="salary"
                placeholder={"Oylik ish haqqi"}
                type="number"
              // inputRef={inputSalary}
              // formInputRef={formSalary}
              />
            </div>

            <div className="2xl:col-span-3 col-span-4 mt-1">
              <label className="text-gray-700 font-medium mt-2">
                Hodimning roli
                <span className="text-red-500">*</span>
              </label>


              <TreeSelectComponent
                data={workerPositions.data?.data}
                language="uz"
                placeholder="Tanlang"
                onChange={handleChangeSelect}
              />
            </div>

            <div className="2xl:col-span-3 col-span-4 gap-2">
              <div className="grid grid-cols-12">
                <div className={`col-span-7 sm:mt-0 mt-2 ${selectedIds.some(item => possibleRoles.includes(item)) ? "block" : "hidden"}`}>
                  <FormInput
                    label={
                      <label htmlFor="firstName" className="text-gray-700">
                        {`Navbat uchun harf`}
                        <span className="text-red-500">*</span>
                      </label>
                    }
                    // value={data.stateRegistrationNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, orderSign: e.target.value })}
                    className="mt-1"
                    name="orderSign"
                    placeholder="AA"

                    inputRef={inputRoleWord}
                    formInputRef={formRoleWord}
                  />
                </div>

                <div className="mt-2 col-span-4">
                  <div className="flex flex-col items-start space-y-2 ml-2">
                    <label className="">Jinsi:</label>

                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="Male"
                          name="sex"
                          onChange={(e => setGender(e.target.value))}
                          className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="">Erkak</span>
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="Female"
                          name="sex"
                          onChange={(e => setGender(e.target.value))}
                          className="w-3 h-3 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="">Ayol</span>
                      </label>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="mt-2">
            <FormInput
              label={
                <label htmlFor="firstName" className="text-gray-700">
                  Login
                  <span className="text-red-500">*</span>
                </label>
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, userName: e.target.value })}
              className="mt-1"
              name="userName"
              placeholder={"Login kiriting"}
            />
          </div>


          <div className="sm:grid grid-cols-12 gap-4 items-center mt-2">
            <div className="col-span-4 mt-1">
              <span className="text-sm font-medium text-gray-900 mt-1">{t("password")}</span>
              <span className="text-red-500">*</span>
              <div className="flex mt-1">
                <input
                  type={showPass ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  value={password}
                  onBlur={onBlurPassword}
                  placeholder={t("placePassword")}
                  id="website-admin"
                  className="rounded-none  placeholder:text-gray-500 rounded-l-lg focus:ring-1 mr-[0.5px] focus:ring-secondary focus:outline-none border text-gray-900  block flex-1 min-w-0 w-full text-sm border-gray-300 px-2.5 py-[5px]"
                />

                <span onClick={handleShowPassword} className="inline-flex cursor-pointer text-secondary items-center px-3 text-sm bg-gray-200 border rounded-l-0 border-gray-300 border-l-0 rounded-r-md">
                  <svg

                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 hover:text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              {errorPassword && (
                <p className="text-red-500 block mb-1 text-sm">{errorPassword}</p>
              )}
            </div>
            <div className="col-span-4 mt-1">
              <span className="text-sm font-medium text-gray-900 mt-1">{t("repeatPassword")}</span>
              <span className="text-red-500">*</span>

              <div className="">
                <div className="flex mt-1 col-span-7">
                  <input

                    type={showConfPass ? "text" : "password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmPassword"
                    onBlur={onBlurConfPassword}
                    value={confirmPassword}

                    placeholder={t("repeatPassword")}
                    id="website-admin"
                    className="rounded-none placeholder:text-gray-500 rounded-l-lg focus:ring-1 mr-[0.5px] focus:ring-secondary focus:outline-none  border text-gray-900  block flex-1 min-w-0 w-full text-sm border-gray-300 px-2.5 py-[4.5px]"
                  />

                  <span onClick={handleShowConfPassword} className="inline-flex cursor-pointer text-secondary items-center px-3 text-sm bg-gray-200 border rounded-l-0 border-gray-300 border-l-0 rounded-r-md">
                    <svg

                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 hover:text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>


              </div>
              {errorConfPassword && <p className={clsx("text-red-500 block mb-1 text-sm")}>{errorConfPassword}</p>}

            </div>

            <div className={`col-span-4 ${errorConfPassword || errorPassword ? "mt-0" : "sm:mt-6 mt-2"} `}>
              <button
                type="button"
                onClick={handleGeneratePassword}
                className="w-full px-4 py-1.5 mt-1 bg-primary text-white font-medium rounded-md duration-200 hover:bg-primary/80 focus:outline-none"
              >
                Parol yaratish
              </button>
            </div>
          </div>


          <div className="sm:grid grid-cols-12 gap-4 px-0.5 mt-2">

            <div className="col-span-8">
              <p className="mb-2">Hodim haqida malumot</p>
              <TextEditor value={content} onChange={handleContentChange} />

              {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
            </div>
            <div className="col-span-4 pt-2 ml-0.5 mt-[70px] sm:mt-0">
              {!image ?
                <div className="flex items-center justify-start">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center  w-full sm:h-40 h-32 text-center   border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 text-center"><span className="font-semibold">Profile rasmini yuklash</span></p>
                      <p className="text-xs text-gray-500 sm:block hidden text-center">SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                  </label>
                </div> : null}

              {image && !file && (
                <Cropper
                  src={image}
                  style={{ height: 200, width: '100%' }}
                  initialAspectRatio={9 / 9}
                  guides={false}
                  ref={cropperRef}
                />

              )}

              {image && !file ?
                <button type="button" onClick={getCropData} className="w-24 p-1.5 my-2 mt-4 bg-primary hover:bg-primary/80 text-sm text-white rounded-md duration-200">Yuklash</button>
                :
                null}



              {file ?
                <>
                  <img src={URL.createObjectURL(file)} alt="" className="w-40 rounded-xl" />
                  <button onClick={() => {
                    setImage(null)
                    setFile(null)
                  }}
                    type="button"
                    className="w- p-1.5  bg-slate-400 mt-2 text-sm text-white rounded-md duration-200 flex items-center gap-2">
                    <VscRefresh />
                    Rasmni yangilash
                  </button>
                </>
                : null
              }
            </div>
          </div>


          <div className="flex flex-col items-start space-y-2 mt-5">
            <label className="">Faqat o'z hisbotlarini ko'ra olsin:</label>

            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="yes"
                  name="canSeeReports"
                  onChange={() => setCanSeeReports(true)}
                  className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                />
                <span className="">Ha</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="no"
                  name="canSeeReports"
                  onChange={() => setCanSeeReports(false)}
                  className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                />
                <span className="">Yo'q</span>
              </label>


            </div>

          </div>

          <div className="flex items-center my-5 font-semibold ">
            <input
              id="link-radio"
              type="radio"
              onChange={(e) => setCheck(e.target.checked)}
              className="w-3 h-3 text-secondary bg-gray-100 border-gray-300 "
            />
            <label className="ms-2 text-sm  text-gray-900 ">
              {i18n.language == 'ru' ?
                <>
                  Я согласен на использование и обработку моих персональных данных в соответствии
                  <a
                    target="_blank"
                    href="https://lex.uz/docs/-4396419"
                    className="text-secondary hover:underline ml-1 mr-1"
                    rel="noreferrer"
                  >
                    с требованиями законодательства.
                  </a> </>
                :
                <>
                  <a
                    target="_blank"
                    href="https://lex.uz/docs/-4396419"
                    className="text-secondary hover:underline mr-1"
                    rel="noreferrer"
                  >
                    Qonun talablari
                  </a>
                  doirasida shaxsga doir maʼlumotlarimdan foydalanishga va ishlov berishga rozilik
                  bildiraman.
                </>
              }
            </label>
          </div>

          <div className="my-5 2xl:max-w-[25%] sm:max-w-[25%] max-w-[80%]">
            <MathCaptcha onVerify={handleCaptchaVerify} />
          </div>

          <div className="flex gap-2 justify-end ">

            <Link to={'/doctors'}>
              <button
                type="submit"
                className="w-24 p-1.5  mt-2 bg-white border hover:bg-secondary-light text-sm text-secondary rounded-md duration-200"
              >
                Bekor qilish
              </button>
            </Link>
            <button
              type="submit"
              className="w-24 p-1.5  mt-2 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Qo'shish
            </button>
          </div>

        </form>
      </FormProvider>
    </div >
  )
}
