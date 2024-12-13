import { IconType } from "@core/types.ts"

export type Props = {
    className?: string
    icon?: IconType
}

export default function Icon({ icon, className }: Props) {
    if (!icon) return
    const Icon = icon
    return <Icon className={className ?? "h-5 w-5 text-secondary"} />
}
