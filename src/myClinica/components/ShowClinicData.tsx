
import FormInput from "@core/components/FormInput"
import { FaLink } from "react-icons/fa"
import { useWorkerPositions } from "@clinica/hooks/addClinic"
import { useGetClinicData } from "@my-clinica/hooks/getClinic"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { ClinicResponse } from "@my-clinica/types"
import instagram from "@my-clinica/static/instagram.webp"
import telegram from "@my-clinica/static/telegram.png"
import facebook from "@my-clinica/static/facebook.png"
import youtube from "@my-clinica/static/youtube.png"
import TreeSelectComponent from "./TreeSelectComponent"

export default function ShowClinicData() {
    const clinicData = useGetClinicData(localStorage.getItem("clinicId") as string)
    const [_, setSelectedIds] = useState<number[]>([])
    const methods = useForm<ClinicResponse>({ mode: "onBlur" })

    const [openMedia, setOpenMedia] = useState(false)

    const workerPositions = useWorkerPositions()

    const handleChange = (ids: number[]) => {
        setSelectedIds(ids)
    }

    if (!workerPositions.data || !workerPositions.data.data) {
        return <p className="my-5">Ma'lumotlar yuklanmoqda...</p>
    }

    return (
        <div className="overflow-x-auto rounded-md mt-2 text-gray-700  h-full pb-5 overflow-y-scroll 2xl:mt-6 ">
            <hr />
            <h4 className="text-lg my-5 font-semibold">Shifoxona ma'lumotlari</h4>


            <FormProvider {...methods}>
                <form action="">
                    <div className="sm:grid grid-cols-12 gap-3 px-0.5">
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Shifoxona rasmiy nomi
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                value={clinicData.data?.data.clinicName}
                                className="mt-1"
                                name="clinicName"
                                placeholder={"Shifoxona nomini kiriting"}
                                disabled
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Telefon raqam
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={clinicData.data?.data.phoneNumber}
                                disabled
                                className="mt-1"
                                name="phoneNumber"
                                placeholder={"Telefon raqam kiriting"}

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Elektron pochta
                                    </label>
                                }
                                disabled

                                defaultValue={clinicData.data?.data.email}
                                type="email"
                                className="mt-1"
                                name="email"
                                placeholder={"Elektron manzil kiriting"}
                                required={false}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Website nomi
                                    </label>
                                }
                                disabled

                                className="mt-1"
                                name="website"
                                defaultValue={clinicData.data?.data.website}
                                placeholder={"Web sahifa kiriting"}
                                required={false}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        INN
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                disabled

                                defaultValue={clinicData.data?.data.taxpayerIdNumber}
                                className="mt-1"
                                name="taxpayerIdNumber"
                                placeholder={"INN raqam kiriting"}
                            />
                        </div>
                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        STIR
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                disabled

                                defaultValue={clinicData.data?.data.stateRegistrationNumber}
                                className="mt-1"
                                name="stateRegistrationNumber"
                                placeholder={"STIR raqami"}

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 px-0.5 mt-1">
                            <label className="block mb-1 text-sm font-medium text-gray-900 ">Shifoxona turi</label>
                            <select
                                id="countries"
                                name="clinicType"
                                disabled

                                defaultValue={clinicData.data?.data.clinicType}
                                className="bg-white border border-gray-300 select-sm text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary block w-full  "
                            >
                                <option>Shifoxona turini tanlang</option>
                                <option value="Xususiy">Xususiy</option>
                                <option value="Davlat tashkiloti">Davlat tashkiloti</option>
                                <option value="Ixtisoslashtirilgan">Ixtisoslashtirilgan</option>
                            </select>
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Litsenziya raqami
                                    </label>
                                }
                                disabled

                                required={false}
                                defaultValue={clinicData.data?.data.licenseNumber as string}
                                className="mt-1"
                                name="licenseNumber"
                                placeholder={"Litsenziya raqamini kiriting"}

                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Litsenziya amal qilish muddati
                                    </label>
                                }
                                disabled

                                required={false}
                                defaultValue={clinicData.data?.data.licenseExpiryDate as string}
                                className="mt-1"
                                name="licenseExpiryDate"
                                type="date"
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4">
                            <FormInput
                                label={
                                    <label htmlFor="firstName" className="text-gray-700">
                                        Bank xisob raqami
                                        <span className="text-red-500">*</span>
                                    </label>
                                }
                                defaultValue={clinicData.data?.data.bankAccountDetails}
                                className="mt-1"
                                disabled

                                name="bankAccountDetails"
                                placeholder={"Bank xisob raqamini kiriting"}
                                type="number"
                            />
                        </div>

                        <div className="2xl:col-span-3 col-span-4 mt-1">
                            <label className="text-gray-700 font-medium mt-2">
                                Xizmat turlari
                                <span className="text-red-500">*</span>
                            </label>

                            <TreeSelectComponent
                                data={workerPositions.data?.data}
                                language="uz"
                                placeholder="Tanlang"
                                onChange={handleChange}
                                defaultValue={clinicData.data?.data.additionalServices}
                                isDisabled={true}

                            />
                        </div>
                    </div>

                    <div className="mt-2 px-1">
                        <label className="block mb-1 text-sm font-medium text-gray-900 ">Manzil</label>
                        <textarea
                            disabled
                            id="message"
                            rows={2}
                            defaultValue={clinicData.data?.data.legalAddress as string}
                            name="legalAddress"
                            className=" p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-1 focus:ring-secondary focus:outline-none block "
                            placeholder="Shifoxona to'grisida ma'lomotlar..."
                        ></textarea>
                    </div>
                    <div className="mt-2 px-1">
                        <label className="block mb-1 text-sm font-medium text-gray-900 ">Ta'rif</label>
                        <textarea
                            disabled
                            id="message"
                            rows={3}
                            defaultValue={clinicData.data?.data.description as string}
                            name="description"
                            className=" p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-1 focus:ring-secondary focus:outline-none block "
                            placeholder="Shifoxona to'grisida ma'lomotlar..."
                        ></textarea>
                    </div>

                    <p
                        onClick={() => setOpenMedia(!openMedia)}
                        className="p-1.5 pl-3 my-4 cursor-pointer w-full sm:w-52 flex items-center gap-2 bg-primary hover:bg-primary/80 text-sm text-white rounded-md duration-200"
                    >
                        <FaLink />
                        Ijtimoiy tarmoq manzillari
                    </p>

                    {openMedia ? (
                        <div className="sm:grid grid-cols-10 gap-2">
                            <div className="col-span-2 ml-0.5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Instagram</label>
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <img src={instagram} alt="" className="w-5 h-5" />
                                    </div>
                                    <input
                                        disabled
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.instagram as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Telegram</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <img src={telegram} alt="" className="w-5 h-5" />
                                    </div>
                                    <input
                                        disabled
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.telegram as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block  ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Facebook</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <img src={facebook} alt="" className="w-5 h-5" />
                                    </div>
                                    <input
                                        disabled
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.facebook as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 2xl:w-64 sm:w-48 w-full"
                                        placeholder="Username kiriting"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 mr-0.5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Youtube</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <img src={youtube} alt="" className="w-5 h-5" />
                                    </div>
                                    <input
                                        disabled
                                        type="text"
                                        id="input-group-1"
                                        defaultValue={clinicData.data?.data.youtube as string}
                                        className="bg-white input-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-secondary focus:outline-none block ps-10 p-2.5 w-full"
                                        placeholder="Havola kiriting"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}

                </form>
            </FormProvider>

        </div >
    )
}
