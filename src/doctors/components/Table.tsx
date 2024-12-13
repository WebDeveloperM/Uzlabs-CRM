
import { FaRegTrashAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { LuEye } from "react-icons/lu";
import { useEffect, useState } from "react";
import { data } from "@core/utils/data";

type Props = {
    search: string,
}

export default function Table({ search }: Props) {
    const [recordsPerPage, setRecordsPerPage] = useState(10);
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


    //         id: 1,
    //         patientId: 213,
    //         fio: "Yusupov Ulukbek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor

    //     },
    //     {
    //         id: 2,
    //         patientId: 213,
    //         fio: "Jonibekov Shavkat",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor1

    //     },
    //     {
    //         id: 3,
    //         patientId: 213,
    //         fio: "Qodirov Oybek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor2
    //     },
    //     {
    //         id: 4,
    //         patientId: 213,
    //         fio: "Eshbulatov Ulukbek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor3
    //     },
    //     {
    //         id: 5,
    //         patientId: 213,
    //         fio: "Tursunov Yusuf",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor2

    //     },
    //     {
    //         id: 6,
    //         patientId: 213,
    //         fio: "Umidov Karim",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor3
    //     },
    //     {
    //         id: 7,
    //         patientId: 213,
    //         fio: "Otajonov Otabek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor2

    //     },
    //     {
    //         id: 8,
    //         patientId: 213,
    //         fio: "Ilxomov Rahim",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor3
    //     },
    //     {
    //         id: 9,
    //         patientId: 213,
    //         fio: "Qudratov Ergash",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor2

    //     },
    //     {
    //         id: 10,
    //         patientId: 213,
    //         fio: "Shabonov Ma'ruf",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor3
    //     },
    //     {
    //         id: 11,
    //         patientId: 213,
    //         fio: "Yusupov Ulukbek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor2

    //     },
    //     {
    //         id: 12,
    //         patientId: 213,
    //         fio: "Yusupov Ulukbek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor3
    //     },
    //     {
    //         id: 13,
    //         patientId: 213,
    //         fio: "Yusupov Ulukbek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor2

    //     },
    //     {
    //         id: 14,
    //         patientId: 213,
    //         fio: "Yusupov Ulukbek",
    //         date: "16.04.1965",
    //         designation: "Therapist",
    //         phone: "+998907150560",
    //         image: doctor3
    //     },
    //     {
    //         id: 15,
    //         patientId: 214,
    //         fio: "Ergashev Shavkat",
    //         date: "24.11.1968",
    //         designation: "Pediatrics",
    //         phone: "+998907150560",
    //         image: doctor1
    //     }
    // ]

    // For pagination
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data?.slice(firstIndex, lastIndex)
    const npage = data && Math.ceil(data?.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

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

    return (

        <div className=' 2xl:p-5 px-3 ' >
            <table className="table-md  min-w-full text-left  whitespace-nowrap rounded-md  scrollbar h-2/3 overflow-y-scroll " >

                <thead className="tracking-wider sticky top-0  bg-secondary  rounded-md text-white  ">
                    <tr>
                        <th scope="col" className=" px-3 py-2 font-semibold   w-[30px] ">
                            №
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold  w-[60px] ">
                            ID
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2   font-semibold  min-w-[60px] ">
                            F.I.O
                            {/*<a href="" className="inline">
                               <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                           </a> */}

                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Soha
                            {/* <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                            </a> */}

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Tug'ilgan kun
                            {/* <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a> */}

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Telefon raqam
                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Harakatlar
                        </th>

                    </tr>


                </thead>

                <tbody className="">
                    {records.filter((item) => {
                        return search.toLowerCase() === '' ? item : `${item.fio}`.toLowerCase().includes(search)
                    }).map((item) => (
                        <tr key={item.id} className="border-b   border-l hover:bg-neutral-100 ">
                            <th scope="row" className="2xl:px-5 px-3 py-1.5  ">
                                {item.id}
                            </th>
                            <td className="2xl:px-5 px-3 py-1.5 ">#{item.patientId}</td>
                            <td className="2xl:px-5 px-3 py-1.5  flex items-center gap-2">
                                <img src={item.image} alt="" className="w-10 h-10 rounded-full" />
                                {item.fio}

                            </td>
                            <td className="2xl:px-5 px-3 py-1.5 ">{item.designation}</td>
                            <td className="2xl:px-5 px-3 py-1.5 ">{item.date}</td>
                            <td className="2xl:px-5 px-3 py-1.5  ">{item.phone}</td>
                            <td className="2xl:px-5 px-3 py-1.5  border-r">
                                <div className="flex items-center gap-6 justify-center float-left text-base">
                                    <FaRegTrashAlt className="text-red-500 cursor-pointer" />
                                    <BiSolidEdit className="text-blue-500 cursor-pointer" />
                                    <LuEye className="text-green-500 cursor-pointer" />
                                </div>
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>


            {data?.length >= recordsPerPage ? <nav aria-label="Page navigation example" className=' pt-5'>
                <ul className="inline-flex -space-x-px text-base h-10 ">
                    <li>
                        <a onClick={prePage} href="#" className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">

                            Oldingi
                        </a>
                    </li>
                    {numbers.map((n, i) => (
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
            </nav> : ""}

        </div>
    )
}
