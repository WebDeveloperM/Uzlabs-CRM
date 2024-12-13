import Heading from "@core/components/Heading.tsx"
import { ReactNode } from "react"
import { clsx } from "clsx"

export type Props = {
    children: ReactNode
    text?: string
    className?: string
    required?: boolean
}

export default function Label({ children, text, className, required }: Props) {
    return (
        <label className={clsx(className, "text-gray-700 ")}>
            <Heading size="sm" className="font-medium inline-block">{text}</Heading>
            {required ? <span className="text-red-500">*</span> : ""}
            {children}
        </label>
    )
}
