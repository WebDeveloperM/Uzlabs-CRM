import { useEffect, useState } from "react";

type Props = {
    time: number
}


export default function Loader({ time }: Props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, time);


        return () => clearTimeout(timer);
    }, [time]);

    if (!isVisible) return null;

    return (
        <div id="loading-wrapper">
            {Array(12)
                .fill(0)
                .map((_, index) => (
                    <div className="spin-wrapper" key={index}>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                ))}
        </div>
    );
}
