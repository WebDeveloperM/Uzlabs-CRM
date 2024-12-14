
import { RiSurgicalMaskLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import bone from "../static/bone.svg";
import kidney from "../static/kidney.svg";
import liver from "../static/liver.svg";
import stomach from "../static/stomach.svg";
import labaratory from "../static/microscope.svg";
import lungs from "../static/lungs.png";
import ApexCharts from "@core/components/ApexChart";
import GroupedBarChart from "@core/components/GroupedBarChart";

export default function Main() {


    return (
        <div>
            <div className="w-full p-5">

                <div className="2xl:grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        {/* cards  */}
                        <div className="sm:grid grid-cols-12 gap-5 gap-y-5">
                            <div className="lg:col-span-4 sm:col-span-6 bg-white shadow-md rounded-lg p-4 h-[145px] mt-5 sm:mt-0">
                                <div className="flex justify-start items-center gap-3">
                                    <div className="border p-1.5 border-secondary  rounded-full">
                                        <RiSurgicalMaskLine className="rounded-full h-[50px] w-[50px] p-3  text-secondary bg-secondary/5" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-3xl font-semibold">980</h2>
                                        <p className="text-sm text-gray-900 ">Bemorlar soni</p>
                                    </div>
                                </div>

                                <p className="flex justify-end text-secondary text-sm">+35%</p>

                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-secondary flex items-center gap-1">View All <GoArrowRight /></p>
                                    <p className="text-sm text-secondary bg-secondary-light px-1 py-0.5 rounded-md">this month</p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 sm:col-span-6 bg-white shadow-md rounded-lg p-4 h-[145px] mt-5 sm:mt-0">
                                <div className="flex justify-start items-center gap-3">
                                    <div className="border p-1.5 border-secondary  rounded-full">
                                        <FaUserDoctor className="rounded-full h-[50px] w-[50px] p-3  text-secondary bg-secondary/5" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-3xl font-semibold">72</h2>
                                        <p className="text-sm text-gray-900 ">Doctorlar soni</p>
                                    </div>
                                </div>

                                <p className="flex justify-end text-secondary text-sm">+11%</p>

                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-secondary flex items-center gap-1">View All <GoArrowRight /></p>
                                    <p className="text-sm text-secondary bg-secondary-light px-1 py-0.5 rounded-md">this month</p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 sm:col-span-6 bg-white shadow-md rounded-lg p-4 h-[145px] mt-5 sm:mt-0">
                                <div className="flex justify-start items-center gap-3">
                                    <div className="border p-1.5 border-secondary  rounded-full">
                                        <RiMoneyDollarCircleLine className="rounded-full h-[50px] w-[50px] p-3  text-secondary bg-secondary/5" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-3xl font-semibold">$3280</h2>
                                        <p className="text-sm text-gray-900 ">Finance</p>
                                    </div>
                                </div>

                                <p className="flex justify-end text-secondary text-sm">+35%</p>

                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-secondary flex items-center gap-1">View All <GoArrowRight /></p>
                                    <p className="text-sm text-secondary bg-secondary-light px-1 py-0.5 rounded-md">this month</p>
                                </div>
                            </div>


                        </div>
                        {/* Specialities */}
                        <div className="w-full mt-5 bg-white shadow-md rounded-lg px-4 py-1">
                            <h2 className="text-base text-gray-900 font-semibold">Specialities</h2>
                            <div className="grid grid-cols-4 sm:grid-cols-10 gap-5 mb-3">
                                <div className="col-span-2 bg-white  rounded-3xl border border-gray-300 p-4">
                                    <div className="flex justify-center items-center">
                                        <img className="w-[50px] h-[50px] my-2" src={bone} alt="" />
                                    </div>
                                    <h2 className="text-base text-gray-900 font-semibold text-center pt-1" >Orthopedic</h2>
                                    <p className="text-2xl font-bold text-secondary text-center">10</p>
                                </div>
                                <div className="col-span-2 bg-white  rounded-3xl border border-gray-300 p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img className="w-[50px] h-[50px] my-2" src={kidney} alt="" />
                                    </div>
                                    <h2 className="text-base text-gray-900 font-semibold text-center pt-1" >Kidney</h2>
                                    <p className="text-2xl font-bold text-secondary text-center">4</p>
                                </div>
                                <div className="col-span-2 bg-white  rounded-3xl border border-gray-300 p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img className="w-[50px] h-[50px] my-2" src={liver} alt="" />
                                    </div>
                                    <h2 className="text-base text-gray-900 font-semibold text-center pt-1" >Liver</h2>
                                    <p className="text-2xl font-bold text-secondary text-center">14</p>
                                </div>
                                <div className="col-span-2 bg-white  rounded-3xl border border-gray-300 p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img className="w-[50px] h-[50px] my-2" src={stomach} alt="" />
                                    </div>
                                    <h2 className="text-base text-gray-900 font-semibold text-center pt-1" >Surgery</h2>
                                    <p className="text-2xl font-bold text-secondary text-center">9</p>
                                </div>
                                <div className="col-span-2 bg-white  rounded-3xl border border-gray-300 p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img className="w-[50px] h-[50px] my-2" src={labaratory} alt="" />
                                    </div>
                                    <h2 className="text-base text-gray-900 font-semibold text-center pt-1" >Laboratory</h2>
                                    <p className="text-2xl font-bold text-secondary text-center">7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 mt-5  2xl:mt-0 ">
                        <div className="bg-white shadow-md rounded-lg p-4  h-full">
                            <div className="flex justify-center py-5">
                                <img src={lungs} alt="Lungs" className="w-[200px] h-[200px]" />
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <div className=" border border-gray-300 rounded-[30px] max-w-[70px] ">
                                    <h5 className="text-center text-gray-900 font-semibold  mt-3 mb-0">Left</h5>
                                    <ApexCharts series={80} fontSizeName="10px" fontSizeValue="10px" color="#238781" label="" labelValue="" height={80} />

                                </div>
                                <div className=" border border-gray-300 rounded-[30px] max-w-[70px] ">
                                    <h5 className="text-center text-gray-900 font-semibold mt-3 mb-0">Health</h5>
                                    <ApexCharts series={80} fontSizeName="10px" fontSizeValue="10px" color="#c42300" label="" labelValue="" height={80} />

                                </div>
                                <div className=" border border-gray-300 rounded-[30px] max-w-[70px] ">
                                    <h5 className="text-center text-gray-900 font-semibold mt-3 mb-0">Right</h5>
                                    <ApexCharts series={80} fontSizeName="10px" fontSizeValue="10px" color="#238781" label="" labelValue="" height={80} />

                                </div>

                            </div>
                        </div>
                    </div>



                </div>



                <div className="bg-white shadow-md rounded-lg p-4  h-full mt-5">
                    <h2 className="text-base text-gray-900 font-semibold">Patients by Age</h2>


                    <GroupedBarChart />
                </div>

            </div>
        </div>
    )
}
