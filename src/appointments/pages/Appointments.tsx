import Layout from "@core/components/Layout"
import { useState } from "react"
import { BsCardChecklist } from "react-icons/bs"
import { MdOutlineGridOn } from "react-icons/md"
import { LuCalendarDays } from "react-icons/lu"
import PatientItem from "../components/PatientItem"
import { data } from "../utils/data"
import { isCheckClinic } from "@users/utils/auth"
import { Navigate } from "react-router-dom"

export default function Appointments() {
    const [open, setOpen] = useState(true)

    if (!isCheckClinic()) {
        return <Navigate to='/clinica' />
    }
    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <div className="overflow-x-auto bg-white rounded-md text-gray-700  h-full pb-5 overflow-y-scroll 2xl:m-5 m-3 ">
                    <div className="flex items-center justify-between px-4 2xl:px-5 pt-3 mb-4">
                        <h4 className="text-lg font-semibold">Appointments</h4>
                        <div className="flex items-center gap-2">
                            <div
                                className={
                                    "text-white text-sm font-semi tracking-wider ml-[1%] 2xl:ml-[2%] hidden lg:inline-block "
                                }
                            >
                                <div className="">
                                    <label className="input input-bordered rounded-sm flex items-center gap-2 input-sm  bg-secondary/10  hover:border-secondary focus:scale-x-110 duration-200 cursor-pointer  focus:ring-2 focus:ring-secondary focus:outline-none ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 192.904 192.904"
                                            width="14px"
                                            className="fill-secondary mr-1 "
                                        >
                                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                                        </svg>
                                        <input type="text" className="grow my-2 text-black" placeholder="Qidirish" />
                                    </label>
                                </div>
                            </div>

                            <div className="text-secondary flex items-center gap-2 ">
                                <BsCardChecklist className="text-4xl hover:bg-secondary/10 p-2 hover:text-secondary rounded-md cursor-pointer bg-secondary text-white" />
                                <MdOutlineGridOn className="text-4xl hover:bg-secondary/10 p-2 hover:text-secondary rounded-md cursor-pointer" />
                                <LuCalendarDays className="text-4xl hover:bg-secondary/10 p-2 hover:text-secondary rounded-md cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {data.map((item) => (
                        <PatientItem key={item.id} item={item} />
                    ))}
                </div>
            </Layout>
        </>
    )
}
