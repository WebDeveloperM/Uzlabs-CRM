import { Steps, Panel } from "rsuite"
import React, { useState } from "react"
import AddClinicaTab1 from "./AddClinicaTabs/AddClinicaTab1"
import AddClinicaTab2 from "./AddClinicaTabs/AddClinicaTab2"

import AddClinicaTab3 from "./AddClinicaTabs/AddClinicaTab3"

export default function CheckoutStepper() {
    const [step, setStep] = React.useState(0)

    const onChange = (nextStep: number) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep)
    }

    const [screenSize] = useState({
        width: window.innerWidth,
    })

    const onNext = () => onChange(step + 1)
    const onPrevious = () => onChange(step - 1)

    return (
        <div className="2xl:pt-9 pt-5">
            <Steps current={step} className="px-10">
                <Steps.Item title={`${screenSize.width > 768 ? "Umumiy ma'lumotlar" : ""} `} />
                <Steps.Item title={`${screenSize.width > 768 ? "Manzil" : ""} `} />
                <Steps.Item title={`${screenSize.width > 768 ? "Profile" : ""} `} />
                {/* <Steps.Item title={`${screenSize.width > 768 ? "Tasdiqlash" : ""} `} /> */}
            </Steps>

            <hr />

            <Panel
                className="px-5"
                header={
                    <div className="p-0">
                        {" "}
                        {/* Paddingni olib tashlash uchun `p-0` qo'shildi */}
                        {step === 0 && "Umumiy ma'lumotlar"}
                        {step === 1 && ""}
                        {step === 3 && "Tasdiqlash"}
                    </div>
                }
            >
                {step == 0 ? <AddClinicaTab1 onPrevious={onPrevious} onNext={onNext} /> : ""}
                {step == 1 ? <AddClinicaTab3 onPrevious={onPrevious} onNext={onNext} /> : ""}
                {step == 2 ? <AddClinicaTab2 onPrevious={onPrevious} /> : ""}
                {/* {step == 3 ? <AddClinicaTab4 onPrevious={onPrevious} onNext={onNext} /> : ""} */}
            </Panel>
        </div>
    )
}
