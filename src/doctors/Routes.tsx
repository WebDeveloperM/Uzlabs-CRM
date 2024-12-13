import { Route, Routes } from "react-router-dom"

import AddDoctors from "./pages/Doctors"
import "./static/style.css"
import Doctors from "./pages/Doctors"
import ViewDoctorDetail from "./pages/ViewDoctorDetail"
import EditDoctor from "./pages/EditDoctor"

export default function DoctorsRoutes() {
   
    return (

        <Routes>
            <Route path="/*" element={<Doctors />} />
            <Route path="/add-doctors/*" element={<AddDoctors />} />
            <Route path="/view-doctor/" element={<ViewDoctorDetail />} />
            <Route path="/edit-doctor/" element={<EditDoctor />} />
        </Routes>

    )
}
