import FormInput from "@core/components/FormInput"
import { FormProvider, useForm } from "react-hook-form"
import { ClinicaFormData } from "src/clinica/types"
import { useClinica } from "../../context/ClinicaContext"
import { FaLink } from "react-icons/fa"
import { SetStateAction, useState } from "react"
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import TreeSelectComponent from "../TreeSelectComponent"
import { useWorkerPositions } from "@clinica/hooks/addClinic"
import MathCaptcha from "@core/components/Captcha"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { useMask } from "@react-input/mask"

type Props = {
    onPrevious: (status: boolean) => void
    onNext: (status: boolean) => void
}

export default function AddClinicaTab1({ onPrevious, onNext }: Props) {
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [сlinicaType, setClinicaType] = useState("")
    const { data, setData } = useClinica()
    const [openMedia, setOpenMedia] = useState(false)
    const [check, setCheck] = useState<SetStateAction<boolean>>(false)
    const [isVerified, setIsVerified] = useState(false)
    const { t, i18n } = useTranslation()
    const workerPositions = useWorkerPositions()
    const methods = useForm<ClinicaFormData>({ mode: "onBlur", defaultValues: data })
    const inputRef = useMask({ mask: "(__) ___-__-__", replacement: { _: /\d/ } })

    const { ref: formInputRef } = methods.register("phoneNumber")

    const inputRefINN = useMask({ mask: "_________", replacement: { _: /\d/ } })
    const { ref: formInputRefINN } = methods.register("taxpayerIdNumber")

    const inputRefSTIR = useMask({ mask: "_________", replacement: { _: /\d/ } })
    const { ref: formInputRefSTIR } = methods.register("stateRegistrationNumber")

    const inputRefLits = useMask({ mask: "__________________________________", replacement: { _: /\d/ } })

    const { ref: formInputRefLits } = methods.register("licenseNumber")

    const handleChange = (ids: number[]) => {
        setSelectedIds(ids)
        setData({ ...data, additionalServices: ids })
    }
    const handleCaptchaVerify = (status: boolean) => {
        setIsVerified(status)
    }

    async function onSubmit(data: ClinicaFormData) {
        data.additionalServices = selectedIds
        data.clinicType = сlinicaType
        // const phoneNumber = data.phoneNumber.replace(/\D/g, "")
        // setData({ ...data, phoneNumber: phoneNumber, additionalServices: selectedIds, clinicType: сlinicaType })

        if (data.taxpayerIdNumber.length != 9) {
            toast.warning(t("innError"))
            return
        }

        if (data.stateRegistrationNumber.length != 9) {
            toast.warning(t("stirError"))
            return
        }

        if (сlinicaType == "") {
            toast.warning(t("clinicTypeError"))
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
        onNext(true)
    }

    if (!workerPositions.data || !workerPositions.data.data) {
        return <p>Ma'lumotlar yuklanmoqda...</p> // Yuklanayotgan holat
    }

    return (
        <div className="overflow-x-auto rounded-md text-gray-700  h-full pb-5 overflow-y-scroll 2xl:mt-6 ">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="mb-7">
                    <div className="sm:grid grid-cols-12 gap-3 px-0.5">
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Shifoxona rasmiy nomi
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                value={data.clinicName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, clinicName: e.target.value })
                                }
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
                                defaultValue={data.phoneNumber}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, phoneNumber: e.target.value })
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
                                value={data.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, email: e.target.value })
                                }
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
                                    setData({ ...data, website: e.target.value })
                                }
                                className="mt-1"
                                name="website"
                                value={data.website}
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
                                // value={data.taxpayerIdNumber.replace(/\D/g, "")}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, taxpayerIdNumber: e.target.value })
                                }
                                defaultValue={data.taxpayerIdNumber}
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
                                // value={data.stateRegistrationNumber}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, stateRegistrationNumber: e.target.value })
                                }
                                defaultValue={data.stateRegistrationNumber}
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
                                onChange={(e) => {
                                    setData({ ...data, clinicType: e.target.value })
                                    setClinicaType(e.target.value)
                                }}
                                value={data.clinicType}
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
                                required={false}
                                value={data.licenseNumber}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, licenseNumber: e.target.value })
                                }
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
                                required={false}
                                value={data.licenseExpiryDate}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, licenseExpiryDate: e.target.value })
                                }
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
                                value={data.bankAccountDetails}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, bankAccountDetails: e.target.value })
                                }
                                className="mt-1"
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
                            />
                        </div>
                    </div>

                    <div className="mt-2 px-1">
                        <label className="block mb-1 text-sm font-medium text-gray-900 ">Ta'rif</label>
                        <textarea
                            id="message"
                            rows={3}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setData({ ...data, description: e.target.value })
                            }
                            value={data.description}
                            defaultValue={data.description}
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
                                        <FaInstagramSquare className="w-5 h-5 text-secondary" />
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...data, instagram: e.target.value })
                                        }
                                        value={data.instagram}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Telegram</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <FaTelegram className="w-5 h-5 text-secondary" />
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...data, telegram: e.target.value })
                                        }
                                        value={data.telegram}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block  ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Facebook</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <FaFacebook className="w-5 h-5 text-secondary" />
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...data, facebook: e.target.value })
                                        }
                                        value={data.facebook}
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
                                    </div>
                                    <input
                                        type="text"
                                        id="input-group-1"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setData({ ...data, youtube: e.target.value })
                                        }
                                        value={data.youtube}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 w-full"
                                        placeholder="Havola kiriting"
                                    />
                                </div>
                            </div>
                        </div>
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

                    <div className="flex gap-2 justify-between">
                        <button
                            disabled
                            onClick={() => onPrevious(true)}
                            className="w-24 p-1.5 cursor-not-allowed mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
                        >
                            Oldingi
                        </button>
                        <button
                            type="submit"
                            className="w-24 p-1.5  mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
                        >
                            Keyingi
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
