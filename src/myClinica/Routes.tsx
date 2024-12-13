import { Route, Routes } from "react-router-dom"
import "./static/style.css"
import MyClinica from "./pages/MyClinica"
import MyClinicaEdit from "./pages/MyClinicaEdit"

export default function MyClinicaRoutes() {

    return (

        <Routes>
            <Route path="/*" element={<MyClinica />} />
            <Route path="/edit-clinica" element={<MyClinicaEdit />} />
        </Routes>


    )
}
