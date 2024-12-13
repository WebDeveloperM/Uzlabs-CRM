
import { ReactNode } from "react"

export type Props = {
    children: ReactNode
    tip: string
}

export default function Tooltip({ children, tip }: Props) {
    return (
        <div className="tooltip" data-tip={tip}>
            {children}
        </div>
    )
}
