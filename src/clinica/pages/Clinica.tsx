import Layout from "@core/components/Layout";
import { useState } from "react";
import clinica from "@clinica/static/clinica1.jpg"
import { Link } from "react-router-dom";

export default function Clinica() {
    const [open, setOpen] = useState(true);


    return (
        <>
            <Layout open={open} setOpen={setOpen}>

                <div className="overflow-x-auto bg-white rounded-md text-gray-700 z-[-1] h-[70vh] pb-5 overflow-y-scroll 2xl:m-5 m-3 ">

                    <div className="sm:grid grid-cols-2">
                        <div className="flex justify-center">
                            <img src={clinica} alt="" className="w-[100%] mt-10" />
                        </div>
                        <div className="text-center sm:text-start sm:mt-[24%] mt-[5%]">
                            <h1 className="2xl:text-3xl text-xl">Shifoxonangizni ro'yxatdan o'tkazing.</h1>
                            <p className="mt-2 sm:mb-4 mb-7 2xl:text-xl 2xl:my-6 text-base ">Tizimdan foydalana olishingiz uchun shifoxona qo'shing</p>
                            <Link to="/clinica/add-clinica" className="bg-secondary 2xl:text-xl py-2 hover:text-white hover:no-underline hover:bg-secondary/80 text-white px-3 rounded-md ">Shifoxona qo'shish</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
