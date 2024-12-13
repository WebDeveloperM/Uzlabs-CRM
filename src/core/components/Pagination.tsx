import {useEffect, useState } from "react";

type Props = {
    data: {
        id: number;
        patientId: number;
        fio: string;
        date: string;
        designation: string;
        phone: string;
        image: string;
    }[],
    
}

export default function Pagination({ data }: Props) {
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



    // For pagination
    const [currentPage, setCurrentPage] = useState(1)

    // const lastIndex = currentPage * recordsPerPage
    // const firstIndex = lastIndex - recordsPerPage
    // const records = data?.slice(firstIndex, lastIndex)
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
        <div>
            {data?.length >= recordsPerPage ? <nav aria-label="Page navigation example" className=' pt-5'>
                <ul className="inline-flex -space-x-px text-base h-10 ">
                    <li>
                        <a onClick={prePage} href="#" className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">

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

                            Next
                        </a>
                    </li>

                </ul>
            </nav> : ""}
        </div>
    )
}