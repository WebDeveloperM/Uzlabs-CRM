import patient from "@patients/static/patient.png";
import patient1 from "@patients/static/patient5.png";
import patient2 from "@patients/static/patient.png";
import patient3 from "@patients/static/patient5.png";
import tableIcon from "@doctors/static/tableIcon.svg";

import { useState } from "react";



export default function Table() {



    const data = [
        {
            id: 1,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient

        },
        {
            id: 2,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient1

        },
        {
            id: 3,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient2
        },
        {
            id: 4,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient3
        },
        {
            id: 5,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient2

        },
        {
            id: 6,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient3
        },
        {
            id: 7,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient2

        },
        {
            id: 8,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient3
        },
        {
            id: 9,
            patientId: 213,
            fio: "Kamolova Nodira",
            date: "16.04.1965",
            gender: "Female",
            phone: "+998907150560",
            image: patient2

        },
        {
            id: 10,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Female",
            phone: "+998907150560",
            image: patient3
        },
        {
            id: 11,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient2

        },
        {
            id: 12,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient3
        },
        {
            id: 13,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient2

        },
        {
            id: 14,
            patientId: 213,
            fio: "Yusupov Ulukbek",
            date: "16.04.1965",
            gender: "Male",
            phone: "+998907150560",
            image: patient3
        },
        {
            id: 15,
            patientId: 214,
            fio: "Ergashev Shavkat",
            date: "24.11.1968",
            gender: "Male",
            phone: "+998907150560",
            image: patient1
        }
    ]

    // For pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5
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
      


        <div className=' 2xl:p-5 px-3 overflow-x-auto' >
            <table className="table-md  min-w-full text-left  whitespace-nowrap rounded-md  overflow-x-auto " >

                <thead className="tracking-wider sticky top-0  bg-secondary  rounded-md text-white ">
                    <tr>
                        <th scope="col" className=" px-3 py-2 font-semibold   w-[30px] ">
                            №
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a>
                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold  w-[60px] ">
                            ID
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />
                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2   font-semibold  min-w-[200px]">
                            Patient Name
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Date of Birth
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Gender
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a>

                        </th>
                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Phone
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a>

                        </th>

                        <th scope="col" className="2xl:px-6 px-3 py-2  font-semibold ">
                            Actions
                            <a href="" className="inline">
                                <img src={tableIcon} alt="" className="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500  mb-[1px]" />

                            </a>

                        </th>

                    </tr>


                </thead>

                <tbody className="scrollbar h-2/3 overflow-y-scroll">
                    {records.map((item) => (
                        <tr key={item.id} className="border-b   border-l hover:bg-neutral-100 ">
                            <th scope="row" className="2xl:px-5 px-3 py-1.5  ">
                                {item.id}
                            </th>
                            <td className="2xl:px-5 px-3 py-1.5 ">#{item.patientId}</td>
                            <td className="2xl:px-5 px-3 py-1.5  flex items-center gap-2">
                                <img src={item.image} alt="" className="w-10 h-10 rounded-full" />
                                {item.fio}

                            </td>
                            <td className="2xl:px-5 px-3 py-1.5 ">{item.date}</td>
                            <td className="2xl:px-5 px-3 py-1.5 ">{item.gender}</td>
                            <td className="2xl:px-5 px-3 py-1.5  ">{item.phone}</td>
                            <td className="2xl:px-5 px-3 py-1.5  border-r">
                                <div className="flex items-center gap-6 justify-center float-left text-base">

                                    <button className="text-sm text-secondary bg-secondary-light rounded-2xl py-1.5 px-3 font-semibold">Details</button>

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
                            {/* <GrFormPrevious /> */}
                            Previous
                        </a>
                    </li>
                    {numbers.map((n, i) => (
                        <li key={i}>
                            <a href="#" onClick={() => changeCPage(n)} className={` ${currentPage == n ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "bg-white text-gray-500"} flex items-center justify-center px-4 h-8 leading-tight   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{n}</a>
                        </li>
                    ))}

                    <li>
                        <a onClick={nextPage} href="#" className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                            {/* <MdNavigateNext /> */}
                            Next
                        </a>
                    </li>

                </ul>
            </nav> : ""}
        </div>
    )
}
