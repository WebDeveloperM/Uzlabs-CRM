import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserRoutes from "@users/Routes.tsx"
import BaseContextProvider from "@core/components/BaseContextProvider.tsx"
import DashboardRoutes from "./dashboard/Routes"
import DoctorsRoutes from "./doctors/Routes"
import PatientsRoutes from "./patients/Routes"
import AppointmentsRoutes from "./appointments/Routes"
import NotFound from "@core/pages/NotFound"
import "react-toastify/dist/ReactToastify.css"
import ClinicaRoutes from "./clinica/Routes"
import 'rsuite/dist/rsuite.min.css';
import 'react-quill/dist/quill.snow.css';
import MyClinicaRoutes from "./myClinica/Routes"
import "@core/assets/css/main.min.css"
import "@core/assets/vendor/overlay-scroll/OverlayScrollbars.min.css"
import "@core/assets/vendor/daterange/daterange.css"
import "@core/assets/vendor/datatables/dataTables.bs5.css"
import "@core/assets/vendor/datatables/dataTables.bs5-custom.css"
import "@core/assets/vendor/datatables/buttons/dataTables.bs5-custom.css"
import MedicalDashboardRoutes from "./medicalDashboard/Routes"
import ClinicDashboardRoutes from "./clinicDashboard/Routes"


export default function App() {

    return (
        <StrictMode>
            <BaseContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<UserRoutes />} />
                        <Route path="/dashboard/*" element={<DashboardRoutes />} />
                        <Route path="/medical-dashboard/*" element={<MedicalDashboardRoutes />} />
                        <Route path="/clinic-dashboard/*" element={<ClinicDashboardRoutes />} />
                        <Route path="/patients/*" element={<PatientsRoutes />} />
                        <Route path="/doctors/*" element={<DoctorsRoutes />} />
                        <Route path="/appointments/*" element={<AppointmentsRoutes />} />
                        <Route path="/clinica/*" element={<ClinicaRoutes />} />
                        <Route path="/my-clinica/*" element={<MyClinicaRoutes />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </BaseContextProvider>
        </StrictMode>
    )
}

createRoot(document.getElementById("root")!).render(<App />)
