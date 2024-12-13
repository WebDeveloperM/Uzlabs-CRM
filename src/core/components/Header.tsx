import { RiMessage3Line } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";
import { RiListCheck3 } from "react-icons/ri";
import { MdOutlineStarOutline } from "react-icons/md";
import userLogo from "@doctors/static/userLogo.png"
import { RiHome3Line } from "react-icons/ri";
import logo from "@core/static/logo.png";
import { FaBars } from "react-icons/fa6";
import { Dispatch, SetStateAction, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AvatarWithDot from "./AvatarWithDot";
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import "../static/style.css"
import { routerNames } from "@core/utils/routesName";
import LanguageChangerAnt from "./LanguageChangerAnt";
import { logout } from "@users/utils/auth";
import { useGetClinicData } from "@my-clinica/hooks/getClinic";
import { domain } from "@core/utils/baseAxios";
import { useAdminData } from "@users/hooks/superUser";

type Prop = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    link: string
}


export default function Header({ open, setOpen }: Prop) {
    const pathname = useLocation();
    const navigate = useNavigate()

    const clinicId = localStorage.getItem("clinicId")
    const getClinicData = useGetClinicData(clinicId ? clinicId as string : "0")

    const uniqueToken = localStorage.getItem("uniqueToken")
    const { data } = useAdminData(uniqueToken as string)
    const [isFocused, setIsFocused] = useState(false);


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button className="text-lg"><p>{localStorage.getItem('role')} <br /> {data?.data?.firstName}</p> </button>
            ),
        },
        {
            key: '1',
            label: (
                <button onClick={() => logout(navigate)} className="bg-red-700 text-white px-5 py-1 rounded-md font-semibold text-lg w-40">Chiqish </button>
            ),
        }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-10">
            <div className="w-full h-[57px] bg-white border-b border-gray-200 ">
                <div className="flex justify-between sm:justify-between lg:justify-between  items-center mx-auto h-full px-4 min-w-1/2">
                    <div className="flex items-center gap-x-3  ">
                        <img src={clinicId && getClinicData.data?.success && !getClinicData.data.data.byDefaultLogo ? `${domain}/${getClinicData.data.data.logoFilePath}` : logo} alt="logo" className={`w-[50px] cursor-pointer `} onClick={() => setOpen(!open)} />
                        <h1 className={`text-gray-700 duration-200 font-semibold text-xl  origin-left tracking-widest ${open ? "sm:block hidden" : " sm:hidden block "}`}>{clinicId && getClinicData.data?.success && getClinicData.data.data.clinicShortName != "Uzlabs.uz" ? getClinicData.data?.data.clinicShortName : "Uzlabs.uz"}</h1>
                        <h1 className={`text-gray-700 duration-200  font-semibold text-xl  ${!open ? "hidden" : "sm:hidden  "} origin-left tracking-widest `}>{clinicId && getClinicData.data?.success && getClinicData.data.data.clinicShortName != "Uzlabs.uz" ? getClinicData.data?.data.clinicShortName : "Uzlabs.uz"}</h1>


                        <div className={`text-white text-sm font-semi tracking-wider ml-[1%] 2xl:ml-[2%] hidden lg:inline-block 
                            ${open ? "md:max-w-[calc(100%-250px)] 2xl:max-w-[calc(100%-250px)] md:ml-[87px] 2xl:ml-[87px]" : "md:max-w-[calc(100%-70px)] md:ml-[15px]"}`}>
                            <div className=''>
                                <label className={`input input-bordered rounded-sm  flex items-center gap-2 transition-all  ease-in-out input-sm  bg-secondary/10  hover:border-secondary focus:scale-x-110  cursor-pointer  focus:ring-1 focus:ring-secondary focus:outline-none ${isFocused ? "w-54" : "w-32"} `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="14px"
                                        className="fill-secondary mr-1 ">
                                        <path
                                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                        </path>
                                    </svg>
                                    <input type="text" className={` px-2 py-1 text-sm  duration-1000`} placeholder="Qidirish" onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)} />

                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center '>
                        <div className='hidden md:inline-block'>
                            <div className='flex items-center gap-2 '>
                                <span className='w-9 h-9  bg-secondary/10 rounded-full flex items-center justify-center'>
                                    <LanguageChangerAnt />
                                </span>

                                <span className='w-9 h-9  bg-secondary/10 rounded-full flex justify-center items-center'>
                                    <MdOutlineStarOutline className='text-secondary font-extrabold text-xl' />
                                </span>
                                <span className='w-9 h-9  bg-secondary/10 rounded-full flex justify-center items-center'>
                                    <RiListCheck3 className='text-secondary font-extrabold text-xl' />
                                </span>
                                <span className='w-9 h-9  bg-secondary/10 rounded-full flex justify-center items-center'>
                                    <AiFillAlert className='text-secondary font-extrabold text-xl' />
                                </span>
                                <span className='w-9 h-9  bg-secondary/10 rounded-full flex justify-center items-center'>
                                    <RiMessage3Line className='text-secondary font-extrabold text-xl' />
                                </span>

                            </div>
                        </div>


                        <Space direction="vertical" className="sm:block hidden">
                            <Space wrap>
                                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                                    <Button className="btn-ghost border-none btn-circle p-0 m-0">
                                        <AvatarWithDot url={userLogo} isOnline={true} />
                                    </Button>
                                </Dropdown>
                            </Space>
                        </Space>
                        <FaBars className="text-secondary text-xl md:hidden translate-y-1/3  cursor-pointer  rounded-md" onClick={() => setOpen(!open)} />


                    </div>

                </div>
            </div>
            <div className="w-full h-[50px] bg-white border-b border-gray-200  z-0">
                <div className="flex justify-between items-center mx-auto h-full px-4">
                    <div className={`text-white text-sm font-semi  tracking-wider ml-[1%] 2xl:ml-[2%] ${open ? "md:max-w-[calc(100%-250px)] md:ml-[275px] 2xl:ml-[275px] " : "md:max-w-[calc(100%-70px)] md:ml-[80px] 2xl:ml-[80px]"}`}>
                        <div className='flex items-center gap-2 text-secondary text-base 2xl:text-lg'>
                            <RiHome3Line className="text-secondary text-xl" />
                            <span>
                                {routerNames.map((route) => (
                                    route.key == pathname.pathname ? route.value : ""
                                ))}

                            </span>
                        </div>
                    </div>


                    <div className='hidden md:inline-block'>
                        {/* <div className='flex items-center gap-3 border-2'>
                            <div className="bg-secondary/10 l p-1.5">
                                <FaRegCalendarAlt className="text-secondary text-sm h-4 w-4" />
                            </div>

                            <input type="text" className="placeholder:text-[12px] placeholder:tracking-wider mr-3 placeholder:text-center placeholder:text-black" placeholder="10/01/2024 - 10/30/2024" />
                        </div> */}
                    </div>

                </div>
            </div>

        </div>
    )
}
