type Props = {
    url: string
    isOnline?: boolean
    width?: number
}

export default function AvatarWithDot({ url, isOnline, width = 10 }: Props) {
    return (
        <div className={`avatar ${isOnline ? "online" : "offline"}`} >
            <div className={`w-${width} rounded-full`}>
                <img src={url} />
            </div>
        </div >
    )
}
