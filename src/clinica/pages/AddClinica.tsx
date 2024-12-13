import Layout from "@core/components/Layout"
import { useState } from "react"
import CheckoutStepper from "@clinica/components/CheckoutStepper"
import { ClinicaFormData } from "@clinica/types"
import { ClinicaContext, defaultData } from "@clinica/context/ClinicaContext"

export default function AddClinice() {
    const [open, setOpen] = useState(true)
    const [data, setData] = useState<ClinicaFormData>(defaultData)
 
    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <div className=" bg-secondary-light/80 md:max-w-[97%] 2xl:w-full mx-auto bg-white h-[80vh] overflow-y-auto rounded-md text-gray-700 pb-5 mt-[15px] 2xl:mx-5">
                    <ClinicaContext.Provider value={{ data, setData }}>
                        <CheckoutStepper />
                    </ClinicaContext.Provider>
                </div>
            </Layout>
        </>
    )
}
