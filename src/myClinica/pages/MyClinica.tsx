
import Layout from "@core/components/Layout";
import { useGetClinicData } from "@my-clinica/hooks/getClinic";
import { isAuthenticated, isCheckClinic } from "@users/utils/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Skeleton } from 'antd';
import MyClinicaTable from "@my-clinica/components/MyClinicaTable";

import { ClinicaUpdateData } from "@my-clinica/types";
import { ClinicaUpdateContext, defaultData } from "@my-clinica/context/ClinicaUpdateContext";

export default function MyClinica() {
    const [open, setOpen] = useState(true);
    const clinicId = localStorage.getItem("clinicId")
    const clincData = useGetClinicData(clinicId ? clinicId as string : "0")
    const isLoading = clincData.isLoading
    const [newData, setData] = useState<ClinicaUpdateData>(defaultData)
    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }
    if (!isCheckClinic()) { 
        return <Navigate to='/clinica' />
    }
    return (
        <Layout open={open} setOpen={setOpen}>
            <div className=" bg-secondary-light/80 md:max-w-[97%] 2xl:w-full mx-auto bg-white h-[80vh] overflow-y-auto rounded-md text-gray-700 pb-5 mt-[15px] 2xl:mx-5">
                <div className="overflow-x-auto bg-white rounded-md text-gray-700  h-full pb-5 overflow-y-scroll 2xl:m-5 m-3 p-3">
                    <div className="flex items-center justify-start  pt-3 mb-5">
                        <h4 className="text-lg font-semibold">Mening shifoxonam</h4>
                    </div>

                    <ClinicaUpdateContext.Provider value={{ newData, setData }}>
                        <div className="clear-both"></div>
                        {
                            isLoading ? <Skeleton /> : <MyClinicaTable />
                        }
                    </ClinicaUpdateContext.Provider>



                </div>
            </div>
        </Layout>
    )
}


