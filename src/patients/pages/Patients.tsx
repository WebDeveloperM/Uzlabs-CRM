import Layout from "@core/components/Layout";
import { useState } from "react";
import Table from "../components/Table";
import { isAuthenticated, isCheckClinic } from "@users/utils/auth";
import { Navigate } from "react-router-dom";

export default function Patients() {
    const [open, setOpen] = useState(true);
    // const [filter, setFilter] = useState(false);
    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }
    if (!isCheckClinic()) {
        return <Navigate to='/clinica' />
    }

    return (
        <>
            <Layout open={open} setOpen={setOpen}>
                <div className="overflow-x-auto bg-white rounded-md text-gray-700  h-full pb-5 overflow-y-scroll 2xl:m-5 m-3 ">
                    <div className="flex items-center justify-between px-3 2xl:px-5 pt-3">
                        <h4 className="text-lg font-semibold">Patients List</h4>
                        <button className="bg-secondary text-white px-3 py-1 rounded-md">Add Patient</button>
                    </div>

                
                    <div className="m-[2px] mb-3 mr-3 mt-4 float-right flex items-center gap-2">
                        <span>Search</span>
                        <label htmlFor="inputSearch" className="sr-only">Search </label>
                        <input id="inputSearch" type="text" className="block w-48 2xl:w-64 rounded-lg border py-1  text-sm focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/50" />
                    </div>

                    <div className="clear-both"></div>
                    <Table />
                </div>
            </Layout>
        </>
    )
}
