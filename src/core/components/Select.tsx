import { clsx } from "clsx"
import { ReactNode } from "react"
import Label from "@core/components/Label.tsx"

export type InputProps = {
    children: ReactNode
    labelText?: string
    className?: string
    requiredLabel?: boolean
}

export default function Select({ children, labelText, className, requiredLabel }: InputProps) {
    return (
        <Label text={labelText} required={requiredLabel}>
            <select className={clsx("select select-bordered w-full", className)}>{children}</select>
        </Label>
    )
}

export type OptionProps = {
    children: ReactNode
    className?: string
    disabled?: boolean
    selected?: boolean
    value?: string
    setValue?: () => void
}

export function Option({ children, className, disabled, selected, value, setValue }: OptionProps) {
    return (
        <option className={clsx(className)} value={value} disabled={disabled} selected={selected} onClick={setValue}>
            {children}
        </option>
    )
}
