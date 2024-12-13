import { useGetClinicData } from "@my-clinica/hooks/getClinic"
import { isCheckClinic } from "@users/utils/auth"
import { useState } from "react"
import { BiSolidEdit } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"

import { Link, Navigate, useNavigate } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa"
import { toast } from "react-toastify"
import Tooltip from "@core/components/Tooltip"
import { domain } from "@core/utils/baseAxios"
import ShowClinicData from "./ShowClinicData"
import logo from "@core/static/logo.png";
import { useDeleteClinicData } from "@my-clinica/hooks/deleteClinic"
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";


export default function MyClinicaTable() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showData, setShowData] = useState(false)

    const navigate = useNavigate()

    const clinicId = localStorage.getItem("clinicId")
    const clincData = useGetClinicData(clinicId ? clinicId as string : "0")
    const { mutateAsync } = useDeleteClinicData(clinicId as string)


    const handleDelete = async () => {
        const response = await mutateAsync()
        if (response.success && response.message == "Clinic deleted successfully.") {
            toast.success("Shifoxona ma'lumotlari o'chirildi")
            localStorage.removeItem("clinicId")
        }
        setIsModalOpen(false)
        navigate("/clinica")
    }

    if (!isCheckClinic()) {
        return <Navigate to="/clinica" />
    }

    return (
        <div className=" ">
            <table className="table-md   min-w-full text-left  whitespace-nowrap rounded-md  scrollbar h-2/3 overflow-y-scroll ">
                <thead className="tracking-wider sticky top-0  bg-secondary  rounded-md text-white  ">
                    <tr>
                        <th scope="col" className=" px-3 py-2 font-semibold   w-[30px] ">
                            №
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold  w-[60px] ">
                            Nomi
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2   font-semibold  min-w-[60px] ">
                            Manzil
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Telefon raqam
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Elektron pochta
                            {/* <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                            </a> */}
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Shifoxona turi
                            {/* <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a> */}
                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Harakatlar
                        </th>
                    </tr>
                </thead>

                <tbody className="">
                    <tr className="border-b   border-l ">
                        <th scope="row" className="2xl:px-5 px-3 py-1.5  ">
                            1
                        </th>
                        <td className="2xl:px-5 px-3 py-1.5 min-w-[200px] max-w-[250px] flex items-center gap-2 whitespace-normal break-words">
                            <img src={!clincData.data?.data.byDefaultLogo ? `${domain}/${clincData.data?.data.logoFilePath}` : logo} alt="logo" className={`w-10 cursor-pointer`} />
                            {clincData.data?.data.clinicName}
                        </td>
                        <td className="2xl:px-5 px-3 py-1.5 min-w-[200px] gap-2 whitespace-normal break-words">
                            {clincData.data?.data.legalAddress}
                        </td>
                        <td className="2xl:px-5 px-3 py-1.5 ">{clincData.data?.data.phoneNumber}</td>
                        <td className="2xl:px-5 px-3 py-1.5 ">{clincData.data?.data.email}</td>
                        <td className="2xl:px-5 px-3 py-1.5  ">{clincData.data?.data.clinicType}</td>
                        <td className="2xl:px-5 px-3 py-1.5  border-r">
                            {/* <div className="flex items-center gap-1 justify-center float-left text-base">

                                <Tooltip tip={"ko'rish"}>

                                    <FaRegCheckCircle
                                        onClick={() => { setShowData(!showData) }}
                                        className="text-secondary cursor-pointer border p-2 text-[33px] hover:bg-secondary hover:text-white duration-200 rounded-lg" />


                                </Tooltip>

                                <Tooltip tip={"o'chirish"}>
                                    <TiDeleteOutline
                                        onClick={() => setIsModalOpen(true)}
                                        className="text-red-500 cursor-pointer border p-2 text-[33px] hover:bg-red-500 hover:text-white duration-200 rounded-lg"
                                    />
                                </Tooltip>


                                <Link to={"/my-clinica/edit-clinica"}>
                                    <Tooltip tip={"tahrirlash"}>
                                        <BiSolidEdit className="text-blue-500 cursor-pointer border p-2 mt-1 text-[33px] hover:bg-blue-500 hover:text-white duration-200 rounded-lg" />
                                    </Tooltip>
                                </Link>
                            </div> */}

                            <div className="flex items-center gap-1 justify-center float-left text-base">

                                <Tooltip tip={"ko'rish"}>

                                    <FaRegCheckCircle
                                        onClick={() => { setShowData(!showData) }}
                                        className="text-secondary cursor-pointer border p-2 text-[33px] hover:bg-secondary hover:text-white duration-200 rounded-lg" />


                                </Tooltip>

                                <Tooltip tip={"o'chirish"}>
                                    <TiDeleteOutline
                                        onClick={() => setIsModalOpen(true)}
                                        className="text-red-500 cursor-pointer border p-2 text-[33px] hover:bg-red-500 hover:text-white duration-200 rounded-lg"
                                    />
                                </Tooltip>


                                <Link to={"/my-clinica/edit-clinica"}>
                                    <Tooltip tip={"tahrirlash"}>
                                        <BiSolidEdit className="text-blue-500 cursor-pointer border p-2 mt-1 text-[33px] hover:bg-blue-500 hover:text-white duration-200 rounded-lg" />
                                    </Tooltip>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {isModalOpen && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white  shadow-lg  max-w-md w-full pb-6">
                        {/* Modal header */}
                        <div className="flex justify-between bg-secondary-light  px-5 py-4 items-center border-b ">
                            <h2 className="text-xl font-semibold text-gray-800">
                                O'chirishni tasdiqlang
                            </h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Modal content */}
                        <div className="flex justify-center text-4xl my-4 text-gray-500">
                            <FaTrashAlt />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 text-center">
                            Shifoxona ma'lumotlarini o'chirishga rozimisiz?
                        </h2>

                        {/* Modal footer */}
                        <div className="mt-6 flex justify-end space-x-2 px-4">
                            {/* Cancel button */}
                            <button
                                className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Bekor qilish
                            </button>
                            {/* Confirm/Delete button */}
                            <button
                                className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                                onClick={handleDelete}
                            >
                                Roziman
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showData && <ShowClinicData />}


        </div>
    )
}
