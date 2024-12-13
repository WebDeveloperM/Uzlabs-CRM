import { ReactNode } from "react"
import { clsx } from "clsx"

export type Props = {
    children: ReactNode
    className?: string
    padding?: string
}

export default function Container({ children, className, padding = "p-4" }: Props) {
    return <div className={clsx("container mx-auto", padding, className)}>{children}</div>
}
