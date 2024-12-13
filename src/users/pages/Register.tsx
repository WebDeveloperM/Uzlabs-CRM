import logo from "@core/static/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { SignUpSuperUser } from "@users/types.ts"
import { FormProvider, useForm } from "react-hook-form"
import FormInput from "@core/components/FormInput.tsx"
import { useSuperUserCreate } from "@users/hooks/superUser.ts"
import { useMask } from "@react-input/mask"
import queryString from "query-string"
import { errorToast } from "@core/components/Toastfy"
import { toast, ToastContainer } from "react-toastify"
import { SetStateAction, useState } from "react"
import jshshr from "../static/jshshr.png"
import pnfl from "../static/pnfl.jpeg"
import MathCaptcha from "@core/components/Captcha"
import { useTranslation } from "react-i18next"
import LanguageChangerAnt from "@core/components/LanguageChangerAnt"

export default function Register() {
    const navigate = useNavigate()
    const { mutateAsync, isLoading, error } = useSuperUserCreate()
    const [isVerified, setIsVerified] = useState(false)
    const { t, i18n } = useTranslation()

    const [showModal, setShowModal] = useState(false)
    const [check, setCheck] = useState<SetStateAction<boolean>>(false)

    const methods = useForm<SignUpSuperUser>({ mode: "onBlur" })
    const inputRef = useMask({ mask: "______________", replacement: { _: /\d/ } })

    const inputPasportRef = useMask({
        mask: "жж | _______",
        replacement: { ж: /[A-Za-z]/, _: /\d/ },
        onMask: (mask) => (mask.target.value = mask.target.value.toUpperCase()),
    })



    const { ref: formInputRefP } = methods.register("personalNumber")
    const { ref: formInputRefPNumber } = methods.register("pasportSerNum")


    const handleCaptchaVerify = (status: boolean) => {
        setIsVerified(status);

    };
    async function onSubmit(data: SignUpSuperUser) {
        if (isLoading) return
        if (error) {
            errorToast(error.message)
            return
        }


        if (data.personalNumber.toString().length != 14) {
            toast.warning(t("errorPNFL"))
            return
        }
        const pasportSerNum = data.pasportSerNum.replace(/ /gi, "").replace("|", "")
        const paymentExpiryDate = new Date().toISOString()

        const isActive = true

        if (pasportSerNum.toString().length != 9) {
            toast.warning(t("errorPasportData"))
            return
        }

        data = { ...data, pasportSerNum, paymentExpiryDate, isActive }

        if (!check) {
            toast.warning(t("agreeTerms"))
            return
        }
        if (!isVerified) {
            toast.warning(t("proveNotRobot"))
            return
        }

        const response = await mutateAsync(data)

        if (response.success) {
            toast.success(t("dataSendSuccessfuly"))
            setTimeout(() => {
                navigate("/add-username/?" + queryString.stringify(response.data as object))
            }, 3000)
        } else if (response.message == "Personal number or passport serial number already exists.") {
            toast.error(t("userExists"))
            return
        }
    }

    return (
        <div className="bg-[url('/src/users/static/login-bg.svg')] sm:h-screen min-h-[800px] sm:min-h-0 w-full bg-cover sm:bg-bottom relative  sm:py-0">
            <ToastContainer />

            <div
                className="border-[0.7px] border-secondary rounded-lg bg-white sm:bg-white/70 pt-[1%]
                            max-w-[90%] min-w-[85%] mx-auto
                            sm:max-w-[60%] sm:min-w-[50%]
                            md:max-w-[45%] md:min-w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2  md:left-[70%] xl:left-[75%]
                            xl:max-w-[40%] xl:min-w-[35%]
                            2xl:max-w-[30%] 2xl:min-w-[25%]
                            "
            >
                <div className="relative">
                <div className="absolute top-0 right-5 bg-secondary-light rounded-full ">
                        <LanguageChangerAnt />
                    </div>
                    <img src={logo} alt="logo" className="w-[20%] xl:w-1/5 2xl:w-1/4 mx-auto mt-5 sm:mt-0" />

                    <div className="px-7 ">
                        <h5 className="text-xl font-medium text-gray-700 py-1 whitespace-normal tracking-wider text-center">
                            {t("registerPage")}
                        </h5>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="mb-3">
                                <div className="w-full">
                                    <FormInput
                                        label={
                                            <label htmlFor="firstName" className="text-gray-700">
                                                {t("name")}
                                                <span className="text-red-500">*</span>
                                            </label>
                                        }
                                        errorText={t("errorName")}
                                        className="mt-1"
                                        name="firstName"
                                        placeholder={t("placeholderName")}
                                    />
                                </div>

                                <div className="w-full">
                                    <FormInput
                                        label={
                                            <label htmlFor="firstName" className="text-gray-700">
                                                {t("lastName")}
                                                <span className="text-red-500">*</span>
                                            </label>
                                        }
                                        errorText={t("placeLastName")}
                                        className="mt-1"
                                        name="lastName"
                                        placeholder={t("errorLast")}
                                    />
                                </div>

                                <div className="w-full">
                                    <FormInput
                                        label={
                                            <label htmlFor="firstName" className="text-gray-700">
                                                {t("fatherName")}
                                                <span className="text-red-500">*</span>
                                            </label>
                                        }
                                        errorText={t("errorFatheName")}
                                        name="fatherName"
                                        placeholder={t("placeFatherName")}
                                        className="mt-1"
                                    />
                                </div>

                                <div className="sm:grid grid-cols-12 gap-2">
                                    <div className="col-span-6">
                                        <FormInput
                                            label={
                                                <label htmlFor="firstName" className="text-gray-700">
                                                    {t("jshshr")}
                                                    <span className="text-red-500">*</span>
                                                </label>
                                            }
                                            errorText={t("errorJshshr")}
                                            name="personalNumber"
                                            placeholder="00000000000000"
                                            className="mt-0.5"
                                            isIcon={true}
                                            iconRight={true}
                                            iconValue={
                                                <>
                                                    <span
                                                        onClick={() => setShowModal(true)}
                                                        className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 ml-[1px] border-gray-300 border-s-0 rounded-e-md"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 text-gray-800 "
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </>
                                            }
                                            inputRef={inputRef}
                                            formInputRef={formInputRefP}
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <FormInput
                                            label={
                                                <label htmlFor="firstName" className="text-gray-700">
                                                    {t("passport")}
                                                    <span className="text-red-500">*</span>
                                                </label>
                                            }
                                            errorText={t("errorPassport")}
                                            name="pasportSerNum"
                                            placeholder="AB | 1234567"
                                            className="mt-0.5"
                                            inputRef={inputPasportRef}
                                            formInputRef={formInputRefPNumber}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center my-2 font-semibold">
                                    <input
                                        id="link-radio"
                                        type="radio"
                                        onChange={(e) => setCheck(e.target.checked)}
                                        className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 "
                                    />
                                    <label className="ms-2 text-sm  text-gray-900 ">
                                        {i18n.language == 'ru' ?
                                            <>
                                                Я согласен на использование и обработку моих персональных данных в соответствии
                                                <a
                                                    target="_blank"
                                                    href="https://lex.uz/docs/-4396419"
                                                    className="text-secondary hover:underline ml-1"
                                                    rel="noreferrer"
                                                >
                                                    с требованиями законодательства.
                                                </a> </>
                                            :
                                            <>
                                                <a
                                                    target="_blank"
                                                    href="https://lex.uz/docs/-4396419"
                                                    className="text-secondary hover:underline"
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
                                <div className="mt-2">
                                    <MathCaptcha onVerify={handleCaptchaVerify} />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-1.5 my-2 mt-3 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
                                    disabled={isLoading}
                                >
                                    {t("registerPage")}
                                </button>

                                <Link to="/" className="w-full text-center text-gray-700 mt-1 rounded-md text-sm ">
                                    {t("haveAccount")} {t("login")}
                                </Link>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_2" className={`modal  ${showModal ? "modal-open" : ""} `}>
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-3"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                    </form>

                    <img src={i18n.language == "uz" ? jshshr : pnfl} alt="" className="mt-6" />
                </div>
            </dialog>
        </div>
    )
}
