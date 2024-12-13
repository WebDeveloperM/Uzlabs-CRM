import Layout from "@core/components/Layout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, isCheckClinic } from "@users/utils/auth";
import DoctorsTab from "@doctors/components/AddDocotorTabs/DoctorsTab";
import { defaultData, DoctorContext } from "@doctors/context/addDoctorContext";
import { DoctorFormData } from "@doctors/types";

export default function Doctors() {
    const [open, setOpen] = useState(true);

    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }
    if (!isCheckClinic()) {
        return <Navigate to='/clinica' />
    }


    const [data, setData] = useState<DoctorFormData>(defaultData)

    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <div className="overflow-x-auto bg-white rounded-md text-gray-700 h-[100vh] pb-5 overflow-y-scroll 2xl:m-5 m-3 ">
                    <DoctorContext.Provider value={{ data, setData }}>
                        <DoctorsTab />
                    </DoctorContext.Provider>
                </div>
            </Layout >
        </>
    )
}
