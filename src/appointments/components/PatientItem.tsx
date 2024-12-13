import { AiOutlinePhone } from "react-icons/ai"
import { MdCheckCircleOutline } from "react-icons/md"
import { IoIosCloseCircleOutline } from "react-icons/io"
type Props = {
    item: {
        id: number
        visit: string
        image: string
        time: string
        name: string
        email: string
        phone: string
        payment: boolean
        patientId: string
    }
}

export default function PatientItem({ item }: Props) {
    return (
        <div className="flex items-center justify-between mx-4 px-3 2xl:px-5 border mt-2 rounded-md ">
            <table className="table min-w-full overflow-x-scroll scrollbar h-2/3 overflow-y-scroll">
                <tr className="min-w-full h-20">
                    <td className="p-2 2xl:w-20 w-16">
                        <img src={item.image} alt="" className="w-12 h-12 rounded-md" />
                    </td>
                    <td className="p-2 text-left 2xl:w-32 w-24">
                        <p className="text-sm font-base text-secondary pb-1">{item.patientId}</p>
                        <p className="text-sm font-semibold">{item.name}</p>
                    </td>
                    <td className="p-2 text-left 2xl:w-48 w-40">
                        <p className="text-sm font-base text-secondary pb-1">Today</p>
                        {item.visit}
                    </td>
                    <td className="p-2 text-left 2xl:w-48 w-32">
                        <p className="text-sm font-base text-secondary pb-1">Time</p>
                        {item.time}
                    </td>
                    <td className="p-2 text-left ">
                        <p className="text-sm font-base text-secondary pb-1">{item.email}</p>
                        <p className="text-sm flex items-center gap-1">
                            {" "}
                            <span>
                                <AiOutlinePhone />
                            </span>
                            {item.phone}
                        </p>
                    </td>
                    <td className="p-2 text-left 2xl:w-28 w-20">
                        <p className="text-sm font-base text-secondary pb-1">Payment</p>
                        <p className="text-sm ">{item.payment ? "Paid" : "Pending"}</p>
                    </td>
                    <td className="p-2 text-left w-8">
                        <MdCheckCircleOutline
                            className={"text-secondary text-sm border border-gray-300 rounded-full p-2 w-8 h-8"}
                        />
                    </td>
                    <td className="p-2 text-left w-8">
                        <IoIosCloseCircleOutline
                            className={"text-secondary text-sm border border-gray-300 rounded-full p-2 w-8 h-8"}
                        />
                    </td>
                    <td className="p-2 text-left w-8">
                        <button className="text-sm text-secondary bg-secondary-light rounded-2xl py-1.5 px-3 font-semibold">
                            Details
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
