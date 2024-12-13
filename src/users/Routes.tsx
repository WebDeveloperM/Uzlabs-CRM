import { Route, Routes } from "react-router-dom"
import Login from "@users/pages/Login.tsx"
import Register from "./pages/Register"
import ComplateRegistrations from "./pages/ComplateRegistrations"
import "./static/style.css"
export default function UserRoutes() {
    return (
        <Routes>
            <Route path="/register/*" element={<Register />} />
            <Route path="/add-username/*" element={<ComplateRegistrations />} />
            <Route path="/" element={<Login />} />
        </Routes>
    )
}
