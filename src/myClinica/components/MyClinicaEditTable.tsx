
import FormInput from "@core/components/FormInput"
import { FaLink, FaTimes } from "react-icons/fa"
import { useWorkerPositions } from "@clinica/hooks/addClinic"
import { useGetClinicData } from "@my-clinica/hooks/getClinic"
import { SetStateAction, useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useMask } from "@react-input/mask"
import TreeSelectComponent from "./TreeSelectComponent"
import { MdOutlineEditLocation } from "react-icons/md";
import YandexMap2 from "./YandexMap2"
import { FaUserEdit } from "react-icons/fa";
import Profile from "./Profile"
import { IoWarningOutline } from "react-icons/io5"
import { useClinicaUpdate } from "@my-clinica/context/ClinicaUpdateContext"
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { toast } from "react-toastify"
import MathCaptcha from "@core/components/Captcha"
import { useTranslation } from "react-i18next"
import { ClinicaUpdateData } from "@my-clinica/types"
import { useUpdateClinica } from "@my-clinica/hooks/editClinica"
import { useNavigate } from "react-router-dom"


export default function MyClinicaEditTable() {
    const clinicId = localStorage.getItem("clinicId")
    const clinicData = useGetClinicData(clinicId ? clinicId as string : "0")

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { mutateAsync } = useUpdateClinica(clinicId ? clinicId as string : "0")

    const [confirmModal, setConfirmModal] = useState(false)
    const [selectedId, setSelectedIds] = useState<number[]>(clinicData.data?.data.additionalServices as [])
    const [check, setCheck] = useState<SetStateAction<boolean>>(false)
    const navigate = useNavigate()
    const [isVerified, setIsVerified] = useState(false)
    const { t, i18n } = useTranslation()

    const { newData, setData } = useClinicaUpdate()

    const methods = useForm<ClinicaUpdateData>({ mode: "onBlur" })

    const inputRef = useMask({ mask: "(__) ___-__-__", replacement: { _: /\d/ } })
    const { ref: formInputRef } = methods.register("phoneNumber")

    const inputRefINN = useMask({ mask: "_________", replacement: { _: /\d/ } })
    const { ref: formInputRefINN } = methods.register("taxpayerIdNumber")

    const inputRefSTIR = useMask({ mask: "_________", replacement: { _: /\d/ } })
    const { ref: formInputRefSTIR } = methods.register("stateRegistrationNumber")

    const inputRefLits = useMask({ mask: "__________________________________", replacement: { _: /\d/ } })
    const { ref: formInputRefLits } = methods.register("licenseNumber")


    const [openMedia, setOpenMedia] = useState(false)
    const [openYandex, setOpenYandex] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)


    const workerPositions = useWorkerPositions()

    const handleChange = (ids: number[]) => {
        setSelectedIds(ids)
        setData({ ...newData, additionalServices: ids })
    }

    const handleCaptchaVerify = (status: boolean) => {
        setIsVerified(status)
    }

    const profileSubmitRef = useRef<() => Promise<void> | void>();


    async function onSubmit(data: ClinicaUpdateData) {
        data.additionalServices = selectedId
        data.legalAddress = newData.legalAddress ? newData.legalAddress : clinicData.data?.data.legalAddress as string
        data.clinicType = newData.clinicType ? newData.clinicType : clinicData.data?.data.clinicType as string
        data.instagram = newData.instagram ? newData.instagram : clinicData.data?.data.instagram as string
        data.telegram = newData.telegram ? newData.telegram : clinicData.data?.data.telegram as string
        data.facebook = newData.facebook ? newData.facebook : clinicData.data?.data.facebook as string
        data.youtube = newData.youtube ? newData.youtube : clinicData.data?.data.youtube as string
        data.geolocationLatitude = newData.geolocationLatitude ? newData.geolocationLatitude : clinicData.data?.data.geolocationLatitude as number
        data.geolocationLongitude = newData.geolocationLongitude ? newData.geolocationLongitude : clinicData.data?.data.geolocationLongitude as number
        data.description = newData.description ? newData.description : clinicData.data?.data.description as string

        if (!confirmModal) {
            toast.warning("Ma'lumotlar tasdiqlanmagan")
            return
        }


        if (profileSubmitRef.current) {
            await profileSubmitRef.current();
        }
        if (data.taxpayerIdNumber.length != 9) {
            toast.warning(t("innError"))
            return
        }

        if (data.stateRegistrationNumber.length != 9) {
            toast.warning(t("stirError"))
            return
        }


        if (data.additionalServices.length == 0) {
            toast.warning(t("additionalServicesError"))
            return
        }

        if (!check) {
            toast.warning(t("agreeTerms"))
            return
        }
        if (!isVerified) {
            toast.warning(t("proveNotRobot"))
            return
        }
        // MyClinicaEditTable'ning onSubmit funksiyasini bajarish

        const response = await mutateAsync(data)

        if (response.success && response.message == "Clinic updated successfully.") {
            toast.success("Ma'lumotlar muvaffaqiyatli saqlandi");
            navigate("/my-clinica")
        } else {
            toast.error("Ma'lumotlarni saqlashda xatolik yuz berdi");
        }
    }

    if (!workerPositions.data || !workerPositions.data.data) {
        return <p className="my-5">Ma'lumotlar yuklanmoqda...</p> // Yuklanayotgan holat
    }
    return (
        <div className="overflow-x-auto rounded-md mt-2 text-gray-700  h-full pb-5 overflow-y-scroll 2xl:mt-6 ">

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} action="">
                    <div className="sm:grid grid-cols-12 gap-3 px-0.5">
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Shifoxona rasmiy nomi
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={clinicData.data?.data.clinicName}
                                onChange={(e) => setData({ ...newData, clinicName: e.target.value })}
                                className="mt-1"
                                name="clinicName"
                                placeholder={"Shifoxona nomini kiriting"}

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Telefon raqam
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={clinicData.data?.data.phoneNumber}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, phoneNumber: e.target.value })
                                }
                                className="mt-1"
                                name="phoneNumber"
                                placeholder={"Telefon raqam kiriting"}
                                inputRef={inputRef}
                                formInputRef={formInputRef}

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Elektron pochta
                                    </label>
                                }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, email: e.target.value })
                                }
                                value={clinicData.data?.data.email}
                                type="email"
                                className="mt-1"
                                name="email"
                                placeholder={"Elektron manzil kiriting"}
                                required={false}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Website nomi
                                    </label>
                                }

                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, website: e.target.value })
                                }
                                className="mt-1"
                                name="website"
                                value={clinicData.data?.data.website}
                                placeholder={"Web sahifa kiriting"}
                                required={false}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        INN
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, taxpayerIdNumber: e.target.value })
                                }
                                defaultValue={clinicData.data?.data.taxpayerIdNumber}
                                value={clinicData.data?.data.taxpayerIdNumber}
                                className="mt-1"
                                name="taxpayerIdNumber"
                                placeholder={"INN raqam kiriting"}
                                inputRef={inputRefINN}
                                formInputRef={formInputRefINN}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        STIR
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, stateRegistrationNumber: e.target.value })
                                }
                                defaultValue={clinicData.data?.data.stateRegistrationNumber}
                                className="mt-1"
                                name="stateRegistrationNumber"
                                placeholder={"STIR raqami"}
                                inputRef={inputRefSTIR}
                                formInputRef={formInputRefSTIR}
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 px-0.5 mt-1">
                            <label className="block mb-1 text-sm font-medium text-gray-900 ">Shifoxona turi</label>
                            <select
                                id="countries"
                                name="clinicType"
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                    setData({ ...newData, clinicType: e.target.value })
                                }}
                                value={newData.clinicType || clinicData.data?.data.clinicType}
                                className="bg-white border border-gray-300 select-sm text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary block w-full  "
                            >
                                <option>Shifoxona turini tanlang</option>
                                <option value="Xususiy">Xususiy</option>
                                <option value="Davlat tashkiloti">Davlat tashkiloti</option>
                                <option value="Ixtisoslashtirilgan">Ixtisoslashtirilgan</option>
                            </select>
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Litsenziya raqami
                                    </label>
                                }

                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, licenseNumber: e.target.value })
                                }
                                required={false}
                                defaultValue={clinicData.data?.data.licenseNumber as string}
                                className="mt-1"
                                name="licenseNumber"
                                placeholder={"Litsenziya raqamini kiriting"}
                                inputRef={inputRefLits}
                                formInputRef={formInputRefLits}
                            />

                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Litsenziya amal qilish muddati
                                    </label>
                                }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, licenseExpiryDate: e.target.value })
                                }

                                required={false}
                                defaultValue={clinicData.data?.data.licenseExpiryDate as string}
                                className="mt-1"
                                name="licenseExpiryDate"
                                type="date"
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Bank xisob raqami
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={clinicData.data?.data.bankAccountDetails}
                                className="mt-1"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...newData, bankAccountDetails: e.target.value })
                                }
                                name="bankAccountDetails"
                                placeholder={"Bank xisob raqamini kiriting"}
                                type="number"
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 mt-1">
                            <label className="text-gray-700 font-medium mt-2">
                                Xizmat turlari
                                <span className="text-red-500">*</span>
                            </label>

                            <TreeSelectComponent
                                data={workerPositions.data?.data}
                                language="uz"
                                placeholder="Tanlang"
                                onChange={handleChange}
                                defaultValue={clinicData.data?.data.additionalServices}
                            />
                        </div>
                    </div>


                    <div className="mt-2 px-1">
                        <label className="block mb-1 text-sm font-medium text-gray-900 ">Ta'rif</label>
                        <textarea
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setData({ ...newData, description: e.target.value })
                            }
                            id="description"
                            rows={3}
                            defaultValue={clinicData.data?.data.description as string}
                            name="description"
                            className=" p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-1 focus:ring-secondary focus:outline-none block "
                            placeholder="Shifoxona to'grisida ma'lomotlar..."
                        ></textarea>
                    </div>

                    <p
                        onClick={() => setOpenMedia(!openMedia)}
                        className="p-1.5 pl-3 my-4 cursor-pointer w-full sm:w-52 flex items-center gap-2 bg-primary hover:bg-primary/80 text-sm text-white rounded-md duration-200"
                    >
                        <FaLink />
                        Ijtimoiy tarmoq manzillari
                    </p>

                    {openMedia ? (
                        <div className="sm:grid grid-cols-10 gap-2">
                            <div className="col-span-2 ml-0.5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Instagram</label>
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        {/* <img src={instagram} alt="" className="w-5 h-5" /> */}
                                        <FaInstagramSquare className="w-5 h-5 text-secondary" />
                                    </div>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...newData, instagram: e.target.value })
                                        }
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.instagram as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                        name="instagram"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Telegram</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        {/* <img src={telegram} alt="" className="w-5 h-5" /> */}
                                        <FaTelegram className="w-5 h-5 text-secondary" />
                                    </div>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...newData, telegram: e.target.value })
                                        }
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.telegram as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block  ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Facebook</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        {/* <img src={facebook} alt="" className="w-5 h-5" /> */}
                                        <FaFacebook className="w-5 h-5 text-secondary" />
                                    </div>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...newData, facebook: e.target.value })
                                        }
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.facebook as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 mr-0.5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Youtube</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <FaYoutube className="w-5 h-5 text-secondary" />
                                        {/* <img src={youtube} alt="" className="w-5 h-5" /> */}
                                    </div>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...newData, youtube: e.target.value })
                                        }
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.youtube as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 w-full"
                                        placeholder="Havola kiriting"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}



                    <p
                        onClick={() => setOpenYandex(!openYandex)}
                        className="p-1.5 pl-3 my-4 cursor-pointer w-full sm:w-52 flex items-center gap-2 bg-primary hover:bg-primary/80 text-sm text-white rounded-md duration-200"
                    >
                        <MdOutlineEditLocation />
                        Manzilni o'zgartirish
                    </p>


                    {openYandex ? (
                        <YandexMap2 />
                    ) : null}


                    <p
                        onClick={() => setOpenProfile(!openProfile)}
                        className="p-1.5 pl-3 my-4 cursor-pointer w-full sm:w-52 flex items-center gap-2 bg-primary hover:bg-primary/80 text-sm text-white rounded-md duration-200"
                    >
                        <FaUserEdit />
                        Profile o'zgaritirish
                    </p>


                    {openProfile ? (
                        <Profile onProfileSubmit={(submit) => (profileSubmitRef.current = submit)} />
                    ) : null}


                    <div className="flex items-center my-5">
                        <input
                            id="link-radio"
                            type="radio"
                            onChange={(e) => setCheck(e.target.checked)}
                            className="w-3 h-3 text-secondary bg-gray-100 border-gray-300 "
                        />
                        <label className="ms-2 text-sm  text-gray-900 ">
                            {i18n.language == "ru" ? (
                                <>
                                    Я согласен на использование и обработку моих персональных данных в соответствии
                                    <a
                                        target="_blank"
                                        href="https://lex.uz/docs/-4396419"
                                        className="text-secondary underline ml-1"
                                        rel="noreferrer"
                                    >
                                        с требованиями законодательства.
                                    </a>{" "}
                                </>
                            ) : (
                                <>
                                    <a
                                        target="_blank"
                                        href="https://lex.uz/docs/-4396419"
                                        className="text-secondary underline mr-1"
                                        rel="noreferrer"
                                    >
                                        Qonun talablari
                                    </a>
                                    doirasida shaxsga doir maʼlumotlarimdan foydalanishga va ishlov berishga rozilik
                                    bildiraman.
                                </>
                            )}
                        </label>
                    </div>

                    <div className="my-5 2xl:max-w-[20%] sm:max-w-[30%] ">
                        <MathCaptcha onVerify={handleCaptchaVerify} />
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="w-32 p-1.5 py-2 bg-secondary float-right hover:bg-secondary/80 text-white rounded-md duration-200"
                    >
                        Tasdiqlash
                    </button>

                    {isModalOpen && (

                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white  shadow-lg  max-w-md w-full pb-6">
                                {/* Modal header */}
                                <div className="flex justify-between bg-secondary-light  px-5 py-4 items-center border-b ">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Tahrirlashni tasdiqlang
                                    </h2>
                                    <button
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>

                                {/* Modal content */}
                                <div className="flex justify-center text-4xl my-4 text-gray-500">
                                    <IoWarningOutline />
                                </div>
                                <h2 className="text-lg font-semibold text-gray-800 text-center">
                                    Kiritilgan ma'lumotlarni tasdiqlaysizmi?
                                </h2>

                                {/* Modal footer */}
                                <div className="mt-6 flex justify-end space-x-2 px-4">
                                    {/* Cancel button */}
                                    <button
                                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Bekor qilish
                                    </button>
                                    {/* Confirm/Delete button */}
                                    <button
                                        className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                                        onClick={() => {
                                            setConfirmModal(true);
                                            // methods.handleSubmit(onSubmit)();
                                        }}
                                    >
                                        Tasdiqlayman
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </FormProvider>

        </div >
    )
}
