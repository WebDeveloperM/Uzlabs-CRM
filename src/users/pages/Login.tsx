import logo from "@core/static/logo.svg"
import { useAccountLogin } from "@users/hooks/superUser"
import { AccountLogin } from "@users/types"
import FormInput from "@core/components/FormInput"
import { FormProvider, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import MathCaptcha from "@core/components/Captcha"
import { useState } from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { login } from "@users/utils/auth"
import LanguageChangerAnt from "@core/components/LanguageChangerAnt"

let passwordTimeOutId: ReturnType<typeof setTimeout>

export default function Login() {
    const methods = useForm<AccountLogin>({ mode: "onBlur" })
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { mutateAsync, isLoading } = useAccountLogin()
    const [isVerified, setIsVerified] = useState(false)

    const [showPass, setShowPass] = useState(false)
    const [password, setPassword] = useState("")
    const [loginOrPassWordError, setLoginOrPassWordError] = useState(false)
    const [errorPassword, setErrorPassword] = useState("")

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

    const handleCaptchaVerify = (status: boolean) => {
        setIsVerified(status)
    }

    async function onSubmit(data: AccountLogin) {
        if (isLoading) return

        if (!isVerified) return toast.warning(t("proveNotRobot"))

        data = { ...data, password }
        const response = await mutateAsync(data)

        if (response.success) {
            toast.success(t("succesfulLogin"))
            login(response.data, navigate)
            return
        }

        if (!response.success && response.message == "Invalid username or password.") {
            setLoginOrPassWordError(true)
            return
        }
    }

    // if (isAuthenticated()) {
    //     return <Navigate to="/clinica/" />
    // }

    return (
        <div className="bg-[url('/src/users/static/login-bg.svg')] h-screen w-full bg-cover sm:bg-bottom relative">
            <div
                className="border-[0.7px] border-secondary rounded-lg p-2 bg-white sm:bg-white/70 pt-[2%]
                            max-w-[90%] min-w-[85%] mx-auto sm:max-w-[50%] sm:min-w-[40%] md:max-w-[35%] md:min-w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-[70%] xl:left-[75%] xl:max-w-[25%] xl:min-w-[20%]"
            >
                <div className="relative">
                    <div className="absolute top-0 right-5 bg-secondary-light rounded-full ">
                        <LanguageChangerAnt />
                    </div>
                    <img src={logo} alt="logo" className="w-1/4 mx-auto mt-5 sm:mt-0" />
                    <div className="px-2 lg:px-3 xl:px-4">
                        <h5 className="text-xl font-medium text-gray-700 py-3 whitespace-normal tracking-wider text-center">
                            {t("login")}
                        </h5>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="mb-7">
                                <div className="w-full">
                                    <FormInput
                                        label={
                                            <label htmlFor="firstName" className="text-gray-700">
                                                {t("login")}
                                                <span className="text-red-500">*</span>
                                            </label>
                                        }
                                        className="mt-1"
                                        name="username"
                                        placeholder={t("placeLogin")}
                                        errorText={t("errorLogin")}
                                    />
                                    <p>  {loginOrPassWordError && <p className={clsx("text-red-500 block mb-1 text-sm")}>{t("errorLoginPassword")}</p>}</p>

                                </div>

                                <div className="mt-1">
                                    <span className="text-sm font-medium text-gray-900 mt-1">{t("password")}</span>
                                    <span className="text-red-500">*</span>
                                    <div className="flex">
                                        <input
                                            type={showPass ? "text" : "password"}
                                            onChange={(e) => setPassword(e.target.value)}
                                            name="password"
                                            value={password}
                                            onBlur={onBlurPassword}
                                            placeholder={t("placePassword")}
                                            id="website-admin"
                                            className="rounded-none  placeholder:text-gray-500 rounded-l-lg focus:ring-1 mr-[0.5px] focus:ring-secondary focus:outline-none border text-gray-900  block flex-1 min-w-0 w-full text-sm border-gray-300 px-2.5 py-[4.5px]"
                                        />

                                        <span   onClick={handleShowPassword} className="inline-flex  cursor-pointer  items-center px-3 text-sm bg-gray-200 border rounded-l-0 border-gray-300 border-l-0 rounded-r-md">
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
                                        <p className={clsx("text-red-500 block mb-1 text-sm")}>{errorPassword}</p>
                                    )}
                                    <p>  {loginOrPassWordError && <p className={clsx("text-red-500 block mb-1 text-sm")}>{t("errorLoginPassword")}</p>}</p>
                                </div>

                                <div className="flex justify-end text-sm text-gray-500 underline mt-2 hover:text-secondary duration-200 cursor-pointer">
                                    {t("forgotPassword")}
                                </div>

                                <div className="mt-2">
                                    <MathCaptcha onVerify={handleCaptchaVerify} />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-sm my-2 mt-4 btn btn-primary  hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
                                >
                                    {t("login")}
                                </button>

                                <Link to="/register">
                                    <p className="w-full text-center  p-1.5 bg-neutral text-gray-700 rounded-md text-sm hover:bg-neutral/80 duration-200">
                                        {t("doNotHaveAccount")} {t("registerPage")}
                                    </p>
                                </Link>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}
