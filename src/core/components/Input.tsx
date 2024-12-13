import { clsx } from "clsx"

export type Props = {
    className: string
    required?: boolean
    value?: string
    setValue?: () => void
    placeholder?: string
    type?: string
    name?: string
}

// Todo: Add an error handler and improve this Input
export default function Input({ value, setValue, placeholder, type, className, name }: Props) {
    return (
        <input
            className={clsx(className)}
            type={type}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
            name={name}
        />
    )
}
