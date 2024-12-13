import { Route, Routes } from "react-router-dom"
import Clinica from "@clinica/pages/Clinica"
import AddClinice from "@clinica/pages/AddClinica"
import "./static/style.css"

export default function ClinicaRoutes() {

    return (

        <Routes>
            <Route path="/*" element={<Clinica />} />
            <Route path="/add-clinica/*" element={<AddClinice />} />
          
        </Routes>


    )
}
