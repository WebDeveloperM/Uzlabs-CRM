import { useClinica } from "@clinica/context/ClinicaContext";
import YandexMap2 from "../YandexMap2";
import { useClinicRegister } from "@clinica/hooks/addClinic";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { ClinicaFormData } from "@clinica/types";
import { useNavigate } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
// import { useState } from 'react';
// import { TiWarningOutline } from "react-icons/ti";

type Props = {
  onPrevious: (status: boolean) => void
  onNext: (status: boolean) => void
}

export default function AddClinicaTab3({ onPrevious, onNext }: Props) {
  const { data } = useClinica();
  const { mutateAsync, isLoading } = useClinicRegister()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const methods = useForm<ClinicaFormData>({ mode: "onBlur" })
  const navigate = useNavigate()


  async function onSubmit() {
    if (isLoading) return
    if (!data.legalAddress) {
      toast.warning("Manzil kiritish majburiy")
      return
    }

    if (!confirmModal) {
      toast.warning("Ma'lumotlar tasdiqlanmagan")
      return
    }

    const response = await mutateAsync(data)

    if (!response.success && response.message == "A clinic with the same name already exists.") {
      toast.warning("Bunday shifoxona nomi mavjud")
      return
    }
    if (!response.success && response.message == "A clinic with the same taxpayer ID already exists.") {
      toast.warning("Sizning shifoxonangiz mavjud")
      return
    }
    if (!response.success && response.message == "This admin already has a clinic registered.") {
      toast.warning("Sizning shifoxonangiz mavjud")
      return
    }
    if (!response.success && response.message == "Invalid UniqueToken. Admin not found.") {
      toast.error("Tizimga kirishda nosozlik aniqlandi.")
      navigate("/")
    }

    if (response.success && response.message == "Clinic registered successfully.") {
      toast.success("Ma'lumotlar qabul qilindi")
      localStorage.setItem("clinicId", response.data[0].clinicId)
      onNext(true)
      return
    }
  }


  return (
    <div className="overflow-x-auto bg-white rounded-md text-gray-700 z-[-1] h-full pb-5 overflow-y-scroll  ">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="mb-7">
          <YandexMap2 />
          <br />
          <div className="flex gap-2 justify-between">
            <button
              onClick={() => onPrevious(true)}
              className="w-24 p-1.5 my-2 mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Oldingi
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-24 p-1.5 my-2 mt-4 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Tasdiqlash
            </button>
          </div>

          {isModalOpen && (

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white  shadow-lg  max-w-md w-full pb-6">

                <div className="flex justify-between bg-secondary-light  px-5 py-4 items-center border-b ">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Ma'lumotlarni tasdiqlash
                  </h2>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex justify-center text-4xl my-4 text-gray-500">
                  <IoWarningOutline />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  Kiritilgan ma'lumotlarni tasdiqlaysizmi?
                </h2>

                <div className="mt-6 flex justify-end space-x-2 px-4">

                  <button
                    className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Bekor qilish
                  </button>

                  <button
                    className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                    onClick={() => {
                      setConfirmModal(true);
                    }}
                  >
                    Tasdiqlayman
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </FormProvider>

    </div>
  )
}

// onClick={() => onNext(true)}