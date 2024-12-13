import { Route, Routes } from "react-router-dom"
import Patients from "./pages/Patients"


export default function PatientsRoutes() {
   
    return (

        <Routes>
            <Route path="/" element={<Patients />} />
        </Routes>


    )
}
