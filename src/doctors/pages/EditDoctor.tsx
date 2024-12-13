import Layout from "@core/components/Layout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, isCheckClinic } from "@users/utils/auth";

import { defaultData } from "@doctors/context/addDoctorContext";
import {  DoctorUpdate } from "@doctors/types";

import DoctorEdit from "@doctors/components/DoctorEdit";
import { UpdateDoctorContext } from "@doctors/context/updateDoctorsContext";

export default function EditDoctor() {
    const [open, setOpen] = useState(true);

    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }
    if (!isCheckClinic()) {
        return <Navigate to='/clinica' />
    }


    const [userData, setUserData] = useState<DoctorUpdate>(defaultData)

    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <div className="overflow-x-auto bg-white rounded-md text-gray-700  h-full pb-5 overflow-y-scroll 2xl:m-5 m-3 ">
                    <UpdateDoctorContext.Provider value={{ userData, setUserData }}>
                        <DoctorEdit />
                    </UpdateDoctorContext.Provider>
                </div>
            </Layout >
        </>
    )
}
