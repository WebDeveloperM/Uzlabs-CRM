
import Layout from "@core/components/Layout";
import { useGetClinicData } from "@my-clinica/hooks/getClinic";
import { isAuthenticated, isCheckClinic } from "@users/utils/auth";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Skeleton } from 'antd';
import MyClinicaEditTable from "@my-clinica/components/MyClinicaEditTable";
import { ClinicaUpdateContext, defaultData } from "@my-clinica/context/ClinicaUpdateContext";
import { ClinicaUpdateData } from "@my-clinica/types";

export default function MyClinicaEdit() {
    const [open, setOpen] = useState(true);
    const clinicId = localStorage.getItem("clinicId")
    const clincData = useGetClinicData(clinicId as string)
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
                    <div className="flex items-center justify-between  pt-3 mb-5">
                        <h4 className="text-lg font-semibold">Shifoxona ma'lumotlarini tahrirlash</h4>
                        <Link
                            to={"/my-clinica"}
                            className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 hover:text-gray-500 hover:no-underline"
                        >
                            Orqaga qaytish
                        </Link>
                    </div>
                    <hr />
                    <ClinicaUpdateContext.Provider value={{ newData, setData }}>
                        <div className="clear-both"></div>
                        {
                            isLoading ? <Skeleton /> : <MyClinicaEditTable />
                        }
                    </ClinicaUpdateContext.Provider>


                </div>
            </div>
        </Layout>
    )
}
