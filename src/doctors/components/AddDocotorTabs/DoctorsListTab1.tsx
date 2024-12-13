
import {  FaTimes, FaTrashAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";

import { useEffect, useState } from "react";
import { useDocorsList } from "@doctors/hooks/getDoctors";
import { DoctorItemResponseType } from "@doctors/types";
import { useWorkerPositions } from "@clinica/hooks/addClinic";
import getCategoryNames from "@doctors/utils/checkPositions";
import userLogo from "@doctors/static/userLogo.png"
// import TreeSelectComponent from "@my-clinica/components/TreeSelectComponent";
import { toast } from "react-toastify";
import { useDeleteDoctorData } from "@doctors/hooks/deleteDoctors";
import { Link, useNavigate } from "react-router-dom";
import doctorsPage from "@doctors/static/doctors.png"
import { convertTimeFormat } from "@doctors/utils/convertTimeFormat";
import { formatNumberWithSpaces } from "@doctors/utils/converSlaryFormat";
import Tooltip from "@core/components/Tooltip";
import { TiDeleteOutline } from "react-icons/ti";
type Props = {
    search: string,
}

export default function DoctorsListTab1({ search }: Props) {
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const workerPositions = useWorkerPositions()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [uniqueToken, setUniqueToken] = useState("")
    const clinicId = localStorage.getItem("clinicId")
    const { data } = useDocorsList(clinicId ? clinicId as string : "0")
    const userData = data?.data
    const navigate = useNavigate()
    const { mutateAsync } = useDeleteDoctorData(uniqueToken)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1536) {
                setRecordsPerPage(10);
            } else {
                setRecordsPerPage(5);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = userData?.slice(firstIndex, lastIndex)
    const npage = userData && Math.ceil(userData?.length / recordsPerPage)
    const numbers = npage && [...Array(npage + 1).keys()].slice(1)


    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCPage = (id: number) => {
        setCurrentPage(id)
    }

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleDelete = async () => {

        const response = await mutateAsync()
        if (!response.success && response.message == "Employee not found.") {
            toast.warning("Hodim ma'lumotlarida xatolik bor")
            navigate("/doctors")
        }
        if (response.success && response.message == "Employee deleted successfully.") {
            toast.success("Hodim o'chirildi")
            navigate("/doctors")
            navigate(0)
        }

        setIsModalOpen(false)

    }

    if (!workerPositions.data || !workerPositions.data.data) {
        return <p className="p-5">Ma'lumotlar yuklanmoqda...</p> // Yuklanayotgan holat
    }
    return (

        <div className=' 2xl:p-5 px-3  ' >
            {data?.data && data.data.length > 0 ? <table className="overflow-x-scroll table-md  min-w-full text-left  whitespace-nowrap rounded-md  scrollbar h-2/3 overflow-y-scroll " >
                <thead className="tracking-wider sticky top-0  bg-secondary  rounded-md text-white  ">
                    <tr>
                        <th scope="col" className=" px-3 py-2 font-semibold   w-[30px] ">
                            №
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}
                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2   font-semibold  min-w-[60px] max-w-[400px] ">
                            F.I.O
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}

                        </th>



                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Sohasi
                        </th>
                        {/* <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Roli
                        </th> */}
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Ish soati
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Telefon raqam
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Oylik maosh
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Navbat harfi
                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Harakatlar
                        </th>

                    </tr>
                </thead>

                <tbody className="">
                    {records?.filter((item: DoctorItemResponseType) => {
                        return search.toLowerCase() === '' ? item : `${item.lastName} ${item.firstName} ${item.fatherName}`.toLowerCase().includes(search)
                    }).map((item: DoctorItemResponseType, id: number) => (
                        <tr key={id} className="border-b   border-l hover:bg-neutral-100 items-center">
                            <th scope="row" className="2xl:px-5 px-3 py-1.5  ">
                                {id + 1}
                            </th>

                            <td className="2xl:px-5 px-3 py-1.5  grid grid-cols-12 items-center min-w-[10px] max-w-[300px] ">
                                <img src={item.base64Photo ? item.base64Photo : userLogo} alt="" className="min-w-10 h-10 rounded-full col-span-2" />
                                <p className="ml-3 ">{item.lastName} {item.firstName} {item.fatherName}</p>
                            </td>

                            <td className="2xl:px-5 px-3 py-1.5  ">{
                                getCategoryNames(workerPositions.data.data, item.position)
                            }</td>
                            {/* <td className="2xl:px-5 px-3 py-1.5  ">


                                <TreeSelectComponent
                                    data={workerPositions.data?.data}
                                    language="uz"
                                    placeholder="Tanlang"
                                    onChange={() => console.log()}
                                    defaultValue={item.position}

                                />

                            </td> */}

                            <td className="2xl:px-5 px-3 py-1.5  "> {convertTimeFormat(item.allowedWorkingHours)}</td>
                            <td className="2xl:px-5 px-3 py-1.5  ">+998 {item.phoneNumber}</td>
                            <td className="2xl:px-5 px-3 py-1.5  "> {formatNumberWithSpaces(item.salary)} so'm</td>
                            <td className="2xl:px-5 px-3 py-1.5 text-center ">{item.orderSign}</td>
                            <td className="2xl:px-5 px-3 py-1.5  border-r">

                                <div className="flex items-center gap-1 justify-center float-left text-base">

                                    <Tooltip tip={"ko'rish"}>

                                        <Link to={`/doctors/view-doctor/`}
                                            onClick={() => localStorage.setItem("doctorToken", item.uniqueToken)}>
                                            <BiSolidEdit className="text-secondary cursor-pointer border p-2 text-[33px] hover:bg-secondary hover:text-white duration-200 rounded-lg" />
                                        </Link>

                                    </Tooltip>

                                    <Tooltip tip={"o'chirish"}>
                                        <TiDeleteOutline
                                            onClick={() => {
                                                setIsModalOpen(true)
                                                setUniqueToken(item.uniqueToken)
                                            }}
                                            className="text-red-500 cursor-pointer border p-2 text-[33px] hover:bg-red-500 hover:text-white duration-200 rounded-lg"
                                        />
                                    </Tooltip>


                                    <Tooltip tip={"tahrirlash"}>
                                        <Link to={`/doctors/edit-doctor/`}
                                            onClick={() => localStorage.setItem("doctorToken", item.uniqueToken)}>
                                            <BiSolidEdit className="text-blue-500 cursor-pointer border p-2 mt-1 text-[33px] hover:bg-blue-500 hover:text-white duration-200 rounded-lg" />
                                        </Link>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table> :
                <div className="sm:grid grid-cols-2 w-[80%] gap-10 mx-auto">
                    <div className="flex justify-center">
                        <img src={doctorsPage} alt="" className="w-[100%]" />
                    </div>
                    <div className="text-center sm:text-start sm:mt-[30%] mt-[5%]">
                        <h1 className="2xl:text-3xl text-xl">Shifoxonangizda hodimlar mavjud emas.</h1>
                        <p className="mt-2 sm:mb-4 mb-7 2xl:text-xl 2xl:my-6 text-base ">Tizimdan foydalana olishingiz uchun hodimlar qo'shing</p>
                    </div>
                </div>
            }

            {
                isModalOpen && (

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
                )
            }

            {
                userData && userData?.length >= recordsPerPage ? <nav aria-label="Page navigation example" className=' pt-5'>
                    <ul className="inline-flex -space-x-px text-base h-10 ">
                        <li>
                            <a onClick={prePage} href="#" className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">

                                Oldingi
                            </a>
                        </li>
                        {numbers && numbers?.map((n: number, i: number) => (
                            <li key={i}>
                                <a href="#" onClick={() => changeCPage(n)} className={` ${currentPage == n ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "bg-white text-gray-500"} flex items-center justify-center px-4 h-8 leading-tight   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{n}</a>
                            </li>
                        ))}

                        <li>
                            <a onClick={nextPage} href="#" className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">

                                Keyingi
                            </a>
                        </li>

                    </ul>
                </nav> : ""
            }

        </div >
    )
}
