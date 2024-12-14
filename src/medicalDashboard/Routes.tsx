import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard";


export default function MedicalDashboardRoutes() {
   
    return (

        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>


    )
}
