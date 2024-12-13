import { InputHTMLAttributes, ReactNode } from "react"
import { RefCallBack, useFormContext } from "react-hook-form"
import { clsx } from "clsx"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string
    label: string | ReactNode
    value?: string
    errorText?: string
    required?: boolean
    className?: string
    labelClassName?: string
    inputClassName?: string
    errorClassName?: string
    isIcon?: boolean
    iconRight?: boolean
    iconLeft?: boolean
    iconValue?: ReactNode
    inputRef?: React.MutableRefObject<HTMLInputElement | null>
    formInputRef?: RefCallBack
}

const FormInput = ({
    name,
    label,
    value,
    errorText = "Bu majburiy maydon",
    required = true,
    className,
    labelClassName,
    inputClassName,
    errorClassName,
    isIcon = false,
    iconLeft = false,
    iconRight = false,
    iconValue,
    inputRef,
    formInputRef,
    ...rest

}: Props) => {
    const { register, formState: { errors } } = useFormContext();



    return (
        <>
            <label className={clsx(labelClassName, "block  text-sm font-medium text-gray-900 mt-1")}>
                {label}
            </label>
            <div className={clsx(
                "flex ",
                className
            )}>

                {isIcon && iconLeft ?
                    iconValue : null}

                {inputRef && formInputRef ?
                    <input
                        {...register(name, { required: required, value })}
                        aria-invalid={errors[name] ? "true" : "false"}
                        {...rest}
                        ref={(e) => {
                            formInputRef ? formInputRef(e) : ""
                            inputRef ? inputRef.current = e : ""

                        }}
                        className={`
                     "rounded-none 
                     ${!isIcon ? "rounded-lg" : ""}
                     ${isIcon && iconRight ? "rounded-l-lg" : ""}
                     ${isIcon && iconLeft ? "rounded-r-lg" : ""}
                     
                     
                      border text-gray-900  flex-1 min-w-0 w-full text-sm focus:ring-1 focus:ring-secondary focus:outline-none border-gray-300 input-sm`}
                    /> : <input
                        {...register(name, { required: required, value })}
                        aria-invalid={errors[name] ? "true" : "false"}
                        {...rest}

                        className={`
                        "rounded-none 
                        ${!isIcon ? "rounded-lg" : ""}
                        ${isIcon && iconRight ? "rounded-l-lg" : ""}
                        ${isIcon && iconLeft ? "rounded-r-lg" : ""}
                        
                        
                         border text-gray-900  flex-1 min-w-0 w-full text-sm focus:ring-1 focus:ring-secondary focus:outline-none border-gray-300 input-sm`}
                    />
                }


                {isIcon && iconRight ? iconValue : null}


            </div>
            {errors[name] && <p className={clsx("text-red-500 block mb-1 text-sm", errorClassName)}>{errorText}</p>}
        </>

    )
}

export default FormInput
