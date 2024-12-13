import { Route, Routes } from "react-router-dom"
import Appointments from "./pages/Appointments"

export default function AppointmentsRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Appointments />} />
        </Routes>
    )
}
