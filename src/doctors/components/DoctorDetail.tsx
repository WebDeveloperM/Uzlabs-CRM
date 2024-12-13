import FormInput from "@core/components/FormInput";
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { TimeRangePickerProps } from 'antd/es/time-picker';
import { Link } from "react-router-dom";
import { useWorkerPositions } from "@clinica/hooks/addClinic";
import TreeSelectComponent from "./TreeSelectComponent";
import { useDocorView } from "@doctors/hooks/viewDoctor";
import { FormProvider, useForm } from "react-hook-form";
import { DoctorDetailResponseType } from "@doctors/types";
import userLogo from "@doctors/static/userLogo.png"


export default function DoctorDetail() {

    const uniqueToken  = localStorage.getItem("doctorToken")
    const { data } = useDocorView(uniqueToken as string)
    const workerPositions = useWorkerPositions()

    // const [allowTime, setAllowTime] = useState<string[]>(["08:00:00", "20:00:00"])
    const methods = useForm<DoctorDetailResponseType>({ mode: "onBlur" })
    // const [startTime, endTime] = `${data && convertTimeFormat(data?.data.allowedWorkingHours as string)}`.split("-");

    const handleChangeSelect = () => {
        console.log("")
    }

    dayjs.extend(customParseFormat);

    const timePickerChange: TimeRangePickerProps['onChange'] = () => {
    };

    if (!workerPositions.data || !workerPositions.data.data) {
        return <p className="px-5">Ma'lumotlar yuklanmoqda...</p> // Yuklanayotgan holat
    }

    return (
        <div className="px-6 mt-6">
            <h4 className="mb-5">Hodim tog'risida ma'lumot</h4>
            <FormProvider {...methods}>
                <form action="" className="  ">
                    <div className="sm:grid grid-cols-12 gap-3 px-0.5">
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Familiya
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={data?.data.lastName}
                                disabled
                                className="mt-1"
                                name="lastName"
                                placeholder={"Familiya kiriting"}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Ism
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={data?.data.firstName}
                                disabled
                                className="mt-1"
                                name="firstName"
                                placeholder={"Ism kiriting"}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Otasining ismi
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={data?.data.fatherName}
                                disabled
                                className="mt-1"
                                name="fatherName"
                                placeholder={"Otasining ismini kiriting"}
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 sm:mt-0 mt-2">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Telefon raqam
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={data?.data.phoneNumber}
                                disabled
                                className="mt-1"
                                name="phoneNumber"
                                placeholder={"Telefon raqam kiriting"}

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 sm:mt-0 mt-2">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Time Out (minut)
                                    </label>
                                }
                                defaultValue={data?.data.timeOutMinutes}
                                disabled
                                className="mt-1"
                                name="timeOutMinutes"
                                placeholder={"Ishlash muddati"}


                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 sm:mt-1 mt-2">
                            <p className="text-gray-700 pb-1">
                                Kirish imkoniyati (08:00 - 20:00)
                            </p>
                            <Space direction="vertical" >
                                <TimePicker.RangePicker className="sm:w-[338px] w-[100%]"
                                    onChange={timePickerChange}
                                    defaultValue={[dayjs(`08:00`, 'HH:mm'), dayjs('20:00', 'HH:mm')]}
                                    placeholder={['Boshlash', 'Tugash']}
                                    disabled

                                />
                            </Space>
                        </div>

                        <div className="2xl:col-span-3 col-span-4 sm:mt-0 mt-2">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Ish haqqi
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={data?.data.salary}
                                disabled
                                className="mt-1"
                                name="salary"
                                placeholder={"Oylik ish haqqi"}
                                type="number"

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 mt-1">
                            <label className="text-gray-700 font-medium mt-2">
                                Hodimning roli
                                <span className="text-red-500">*</span>
                            </label>


                            <TreeSelectComponent
                                data={workerPositions.data?.data}
                                language="uz"
                                placeholder="Tanlang"
                                onChange={handleChangeSelect}
                                defaultValue={data?.data.position}
                                isDisabled
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 gap-2">
                            <div className="grid grid-cols-12">
                                <div className={`col-span-7 sm:mt-0 mt-2}`}>
                                    <FormInput
                                        label={
                                            <label htmlFor="firstName" className="text-gray-700">
                                                {`Navbat uchun harf`}
                                                <span className="text-red-500">*</span>
                                            </label>
                                        }
                                        defaultValue={data?.data.orderSign}
                                        disabled
                                        className="mt-1"
                                        name="orderSign"
                                        placeholder="AA"
                                    />
                                </div>

                                <div className="mt-2 col-span-4">
                                    <div className="flex flex-col items-start space-y-2 ml-2">
                                        <label className="">Jinsi:</label>

                                        <div className="flex items-center space-x-4">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    value="Male"
                                                    name="sex"
                                                    checked={data?.data.sex == "Male" ? true : false}
                                                    className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                                                    disabled
                                                />
                                                <span className="">Erkak</span>
                                            </label>

                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    value="Female"
                                                    name="sex"
                                                    disabled
                                                    checked={data?.data.sex == "Female" ? true : false}
                                                    className="w-3 h-3 text-pink-600 focus:ring-pink-500"
                                                />
                                                <span className="">Ayol</span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>





                    <div className="sm:grid grid-cols-12 gap-4 px-0.5 mt-2">
                        <div className="col-span-3 pt-2 ml-0.5 mt-[70px] sm:mt-0">
                            {data?.data.base64Photo ?
                                <img src={data?.data.base64Photo} alt="" className="w-40 rounded-xl" /> :
                                <img src={userLogo} alt="" className="w-40 rounded-xl" />
                            }
                        </div>
                        {data?.data.description ? <div className="col-span-7">
                            <p className="mb-2">Hodim haqida malumot</p>

                            <div className="" dangerouslySetInnerHTML={{ __html: data?.data.description as string }} />
                        </div> : null
                        }


                    </div>


                    <div className="flex flex-col items-start space-y-2 mt-5">
                        <label className="">Faqat o'z hisbotlarini ko'ra olsin:</label>

                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="yes"
                                    name="canSeeReports"
                                    disabled
                                    checked={data?.data.canSeeReports ? true : false}
                                    className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="">Ha</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="no"
                                    name="canSeeReports"
                                    disabled
                                    checked={!data?.data.canSeeReports ? true : false}
                                    className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="">Yo'q</span>
                            </label>


                        </div>

                    </div>


                    <div className="flex gap-2 justify-end ">

                        <Link to={'/doctors'}>
                            <button
                                type="submit"
                                className="w-32 p-1.5  mt-2 bg-white border hover:bg-secondary-light text-sm text-secondary rounded-md duration-200"
                            >
                                Orqaga qaytish
                            </button>
                        </Link>

                    </div>

                </form>
            </FormProvider>
        </div >
    )
}
