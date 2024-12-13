import { ChangeEvent, useState } from "react"
import { useMask } from "@react-input/mask"
import { useTranslation } from "react-i18next"

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1
}

type Props = {
    onVerify: (status: boolean) => void
}

const MathCaptcha = ({ onVerify }: Props) => {
    const { t } = useTranslation()

    const [num1, setNum1] = useState(generateRandomNumber())
    const [num2, setNum2] = useState(generateRandomNumber())
    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState("")
    const inputRef = useMask({ mask: "____", replacement: { _: /\d/ } })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
        const status = num1 + num2 === parseInt(e.target.value)
        onVerify(status)
        setError(status ? "" : t("errorResultCaptcha"))
    }

    return (
        <div>
            <div className="grid grid-cols-12 items-center gap-2 max-h-6  ">
                <p
                    onClick={() => {
                        setNum1(generateRandomNumber())
                        setNum2(generateRandomNumber())
                    }}
                    className=" 2xl:text-lg cursor-pointer col-span-3"
                >
                    {num1} + {num2} =
                </p>

                <input
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    placeholder={t("resultCaptcha")}
                    className="col-span-9 xl:placeholder:pl-0.5 placeholder:text-sm  sm:py-0.5 py-1.5  2xl:pl-2 pl-1  text-xs lg:text-base border rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none
                    w-full

                    "
                    ref={(e) => {
                        inputRef.current = e
                    }}
                />
            </div>

            {error && (
                <p style={{ color: "red" }} className="text-sm mt-1.5">
                    {error}
                </p>
            )}
        </div>
    )
}

export default MathCaptcha
