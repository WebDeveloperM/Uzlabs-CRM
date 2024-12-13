import { useClinica } from "@clinica/context/ClinicaContext";
import { useClinicRegister } from "@clinica/hooks/addClinic";
import MathCaptcha from "@core/components/Captcha";
import { SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { ClinicaFormData } from "src/clinica/types";

type Props = {
  onPrevious: (status: boolean) => void
  onNext: (status: boolean) => void
}


export default function AddClinicaTab4({ onPrevious, onNext }: Props) {
  const methods = useForm<ClinicaFormData>({ mode: "onBlur" })
  const [check, setCheck] = useState<SetStateAction<boolean>>(false)
  const [isVerified, setIsVerified] = useState(false)
  const { t, i18n } = useTranslation()
  const { data } = useClinica();

  const { mutateAsync, isLoading, error } = useClinicRegister()

  const handleCaptchaVerify = (status: boolean) => {
    setIsVerified(status);

  };

  async function onSubmit() {

    if (isLoading) return
    if (error) {
      toast.error(error.message)
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

    const response = await mutateAsync(data)
    console.log(response, "0000000000");


  }

  return (
    <div className="overflow-x-auto bg-white rounded-md text-gray-700 z-[-1] h-full pb-5 overflow-y-scroll mt-6">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="mb-7">


          <h4 className=" mb-5">Barcha kiritilgan ma'lumotni tasdiqlang</h4>
          <div className="flex items-center my-5 font-semibold">
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

          <div className="my-5 2xl:max-w-[20%] sm:max-w-[30%] ">
            <MathCaptcha onVerify={handleCaptchaVerify} />
          </div>


          <div className="flex gap-2 justify-between">
            <button

              onClick={() => onPrevious(true)}
              type="submit"
              className="w-24 p-1.5  my-2 mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Oldingi
            </button>
            <button
              onClick={() => onNext(true)}
              type="submit"
              className="w-24 p-1.5 my-2 mt-4  bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Tasdiqlash
            </button>
          </div>

        </form>
      </FormProvider>
    </div>
  )
}
