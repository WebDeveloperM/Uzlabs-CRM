import React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { VscRefresh } from "react-icons/vsc";
import { ConfigProvider, Flex, Input, Typography } from 'antd';
import { UploadClinicaPhotoParams, UploadClinicLogo } from "src/clinica/types";
import { useUploadClinicLogo } from "@clinica/hooks/addClinic";
import { useNavigate } from "react-router-dom";
import { IoWarningOutline } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';

type Props = {
  onPrevious: (status: boolean) => void
}


export default function AddClinicaTab2({ onPrevious }: Props) {
  const methods = useForm<UploadClinicLogo>({ mode: "onBlur" })
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [checkbox, setCheckbox] = useState(false);
  const [logoShortName, setLogoShortName] = useState<string>("Uzlabs.uz");
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)

  const navigate = useNavigate()



  const cropperRef = useRef<HTMLImageElement>(null);


  const { mutateAsync } = useUploadClinicLogo();

  async function onSubmit() {

    const data: UploadClinicLogo & UploadClinicaPhotoParams = {
      logo: file,
      clinicId: parseInt(localStorage.getItem("clinicId") as string),
      clinicShortName: logoShortName,
      byDefaultLogo: !checkbox,
    };

    if (!confirmModal) {
      toast.warning("Ma'lumotlar tasdiqlanmagan")
      return
    }

    const response = await mutateAsync(data);

    if (!response.success && response.message == "No logo file provided.") {
      toast.error("Rasm yuklashda xatolik bor");
      return
    }
    if (response.success && response.message == "Clinic logo and short name updated successfully.") {
      toast.success("Profile muvaffaqqiyatli saqlandi");
      navigate("/my-clinica")
      window.location.reload()
      return
    }

  }


  const theme = {
    token: {
      colorPrimary: '#238781',
    },
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  const getCropData = () => {
    const cropper = (cropperRef.current as any)?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
        if (blob) {
          const croppedFile = new File([blob], "cropped-image.png", { type: "image/png" });
          setFile(croppedFile);
        }
      }, 'image/png');
    }
  };


  return (
    <div className="overflow-x-auto bg-white  rounded-md text-gray-700 z-[-1] h-full pb-5 overflow-y-scroll">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} action="" className="mb-2">
          <div className="grid grid-cols-12 gap-3 px-0.5">
            <div className="2xl:col-span-4 col-span-12">
              {!image ?
                <div className="flex items-center justify-start">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center sm:w-72 w-full sm:h-40 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Profile rasmini yuklash</span></p>
                      <p className="text-xs text-gray-500  text-center">SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                  </label>
                </div> : null}



              {image && !file && (
                <Cropper
                  src={image}
                  style={{ height: 200, width: '100%' }}
                  initialAspectRatio={9 / 9}
                  guides={false}
                  ref={cropperRef}
                />
              )}

              {image && !file ?
                <button type='button' onClick={getCropData} className="w-24 p-1.5 my-2 mt-4 bg-primary hover:bg-primary/80 text-sm text-white rounded-md duration-200">Yuklash</button>
                :
                null}
            </div>
          </div>


          {file ?
            <>
              <img src={URL.createObjectURL(file)} alt="" className="w-40 rounded-xl" />
              <button
                onClick={() => {
                  setImage(null)
                  setFile(null)
                }}
                type='button'
                className="w- p-1.5  bg-slate-400 mt-4 text-sm text-white rounded-md duration-200 flex items-center gap-2">
                <VscRefresh />
                Rasmni yangilash
              </button>
            </>
            : null
          }

          <br />

          <ConfigProvider theme={theme}>
            <Flex vertical gap={16}>
              <div>
                <Typography.Title level={5}>Logo matni kiriting</Typography.Title>
                <Input
                  count={{
                    show: true,
                    max: 10,
                  }}
                  maxLength={10}
                  required={false}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogoShortName(e.target.value)}
                  placeholder="Uzlabs.uz"
                  className="focus:ring-1 focus:ring-secondary focus:outline-none max-w-[60%] sm:max-w-[15%] mx-0.5"
                />
              </div>
            </Flex>
          </ConfigProvider>


          <div className="flex items-start my-3 ml-1">
            <div className="flex items-center h-5">
              <input type="checkbox" onChange={(e) => setCheckbox(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " />
            </div>
            <label className="ms-2 text-sm font-medium text-gray-900">Asosiy logo sifatida o'rnatish</label>
          </div>

          <div className="flex gap-2 justify-between">
            <button
              onClick={() => onPrevious(true)}
              type="submit"
              className="w-24 p-1.5 my-2 mt-2 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Oldingi
            </button>


            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-24 p-1.5 my-2 mt-2 bg-secondary hover:bg-secondary/80 text-sm text-white rounded-md duration-200"
            >
              Tasdiqlash
            </button>
          </div>

          {isModalOpen && (

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white  shadow-lg  max-w-md w-full pb-6">
                {/* Modal header */}
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

                {/* Modal content */}
                <div className="flex justify-center text-4xl my-4 text-gray-500">
                  <IoWarningOutline />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  Kiritilgan ma'lumotlarni tasdiqlaysizmi?
                </h2>

                {/* Modal footer */}
                <div className="mt-6 flex justify-end space-x-2 px-4">
                  {/* Cancel button */}
                  <button
                    className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Bekor qilish
                  </button>
                  {/* Confirm/Delete button */}
                  <button
                    className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                    onClick={() => {
                      setConfirmModal(true);
                      // methods.handleSubmit(onSubmit)();
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
