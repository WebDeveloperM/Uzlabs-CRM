import userLogo from "@doctors/static/userLogo.png"
import { domain } from "@core/utils/baseAxios"
import { routerNames } from "@core/utils/routesName"
import { useGetClinicData } from "@my-clinica/hooks/getClinic"
import { useAdminData } from "@users/hooks/superUser"
import { isAuthenticated, isCheckClinic } from "@users/utils/auth.ts"
import { ReactNode, useEffect} from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import logo from "@core/static/logo.png"
import LanguageChange from "./LanguageChange"
import $ from "jquery";


type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {

    const { data } = useAdminData(localStorage.getItem("uniqueToken") as string)
    const clinicId = localStorage.getItem("clinicId")
    const getClinicData = useGetClinicData(clinicId as string)
    const { pathname } = useLocation();

    useEffect(() => {
        $(".toggle-sidebar").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        // Sidebarni pin qilish
        $(".pin-sidebar").on("click", function () {
            if ($(".page-wrapper").hasClass("pinned")) {
                // Hoverda unpin qilish
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").unbind("hover");
            } else {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").on("mouseenter", function () {
                    console.log("mouseenter");
                    $(".page-wrapper").addClass("sidebar-hovered");
                });

                $("#sidebar").on("mouseleave", function () {
                    console.log("mouseout");
                    $(".page-wrapper").removeClass("sidebar-hovered");
                });
            }
        });

        $("#loading-wrapper").fadeOut(3000);

        // Sidebarni overlay orqali toggle qilish
        $("#overlay").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        // Oynaning o'lchami o'zgarganda
        const handleResize = () => {
            const width = (window as Window).innerWidth; // `window`ni to'g'ri aniqlash
            if (width <= 768) {
                $(".page-wrapper").removeClass("pinned");
            }
            if (width >= 768) {
                $(".page-wrapper").removeClass("toggled");
            }
        };

        $(window).resize(handleResize);
        handleResize(); // initial resize check

        // Cleanup: Komponent o'chirilganda jQuery hodisalarini olib tashlash
        return () => {
            $(".toggle-sidebar").off("click");
            $(".pin-sidebar").off("click");
            $("#overlay").off("click");
            $(window).off("resize", handleResize);
            $("#loading-wrapper").stop();
        };
    }, []); // Empty dependency array — bu faqat bir marta ishlaydi


    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }


    if (!isCheckClinic()) {
        return <Navigate to='/clinica' />
    }

    return (
        <div className={`page-wrapper`}>

            <div className="main-container">

                <nav id="sidebar" className="sidebar-wrapper">

                    <div className="brand-container d-flex align-items-center justify-content-between">


                        <div className="app-brand ms-3">
                            <a href="" className="flex items-center gap-3" >
                                <img src={getClinicData.data?.success && !getClinicData.data.data.byDefaultLogo ? `${domain}/${getClinicData.data.data.logoFilePath}` : logo} alt="logo" className="logo rounded-full" />
                                <h1 className={`text-gray-700 duration-200 font-semibold text-xl  origin-left tracking-widest`}>{getClinicData.data?.success && getClinicData.data.data.clinicShortName != "Uzlabs.uz" ? getClinicData.data?.data.clinicShortName : "Uzlabs.uz"}</h1>
                            </a>
                        </div>

                        <button type="button" className="pin-sidebar me-3">
                            <i className="ri-menu-line"></i>
                        </button>

                    </div>

                    <div className="sidebar-profile">
                        <img src={data?.data?.photoBase64 ? data?.data?.photoBase64 : userLogo} className="rounded-5" alt="Hospital Admin Templates" />
                        <h6 className="mb-1 profile-name text-nowrap text-truncate text-primary">{data?.data?.fatherName}</h6>
                        <small className="profile-name text-nowrap text-truncate">{localStorage.getItem('role')}</small>
                    </div>

                    <div className="sidebarMenuScroll">
                        <ul className="sidebar-menu">
                            <li className={`${pathname.startsWith("/dashboard") ? "active current-page" : ""} `}>
                                <Link to={"/dashboard"}>
                                    <i className="ri-home-6-line"></i>
                                    <span className="menu-text">Hospital Admin</span>
                                </Link>
                            </li>
                            <li className={`${pathname.startsWith("/medical-dashboard") ? "active current-page" : ""} `}>
                                <Link to={"/medical-dashboard"}>
                                    <i className="ri-home-smile-2-line"></i>
                                    <span className="menu-text">Medical Dashboard</span>
                                </Link>
                            </li>
                            <li className={`${pathname.startsWith("/clinic-dashboard") ? "active current-page" : ""} `}>
                                <Link to={"/clinic-dashboard"}>
                                    <i className="ri-home-5-line"></i>
                                    <span className="menu-text">Clinic Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <a href="doc-appointments.html">
                                    <i className="ri-calendar-2-line"></i>
                                    <span className="menu-text">Appointments</span>
                                </a>
                            </li>
                            <li>
                                <a href="my-patients.html">
                                    <i className="ri-empathize-line"></i>
                                    <span className="menu-text">My Patients</span>
                                </a>
                            </li>
                            <li>
                                <a href="patient-profile.html">
                                    <i className="ri-empathize-line"></i>
                                    <span className="menu-text">Patient Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="doctor-dashboard.html">
                                    <i className="ri-stethoscope-line"></i>
                                    <span className="menu-text">Doctors Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="doctors-grid.html">
                                    <i className="ri-stethoscope-line"></i>
                                    <span className="menu-text">Doctors Grid</span>
                                </a>
                            </li>
                            <li>
                                <a href="doctors-cards.html">
                                    <i className="ri-stethoscope-line"></i>
                                    <span className="menu-text">Doctors Cards</span>
                                </a>
                            </li>
                            <li>
                                <a href="doctors-profile.html">
                                    <i className="ri-stethoscope-line"></i>
                                    <span className="menu-text">Doctors Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="add-doctors.html">
                                    <i className="ri-stethoscope-line"></i>
                                    <span className="menu-text">Add Doctor</span>
                                </a>
                            </li>
                            <li>
                                <a href="edit-doctors.html">
                                    <i className="ri-stethoscope-line"></i>
                                    <span className="menu-text">Edit Doctor</span>
                                </a>
                            </li>
                            <li>
                                <a href="patient-dashboard.html">
                                    <i className="ri-heart-pulse-line"></i>
                                    <span className="menu-text">Patients Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="patients-list.html">
                                    <i className="ri-heart-pulse-line"></i>
                                    <span className="menu-text">Patients List</span>
                                </a>
                            </li>
                            <li>
                                <a href="add-patient.html">
                                    <i className="ri-heart-pulse-line"></i>
                                    <span className="menu-text">Add Patient</span>
                                </a>
                            </li>
                            <li>
                                <a href="edit-patient.html">
                                    <i className="ri-heart-pulse-line"></i>
                                    <span className="menu-text">Edit Patient Details</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-nurse-line"></i>
                                    <span className="menu-text">Staff</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="staff.html">Staff List</a>
                                    </li>
                                    <li>
                                        <a href="add-staff.html">Add Staff</a>
                                    </li>
                                    <li>
                                        <a href="edit-staff.html">Edit Staff Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-dossier-line"></i>
                                    <span className="menu-text">Appointments</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="appointments.html">Appointments</a>
                                    </li>
                                    <li>
                                        <a href="appointments-list.html">Appointments List</a>
                                    </li>
                                    <li>
                                        <a href="book-appointment.html">Book Appointment</a>
                                    </li>
                                    <li>
                                        <a href="appointment-success.html">Appointment Success</a>
                                    </li>
                                    <li>
                                        <a href="edit-appointment.html">Edit Appointment</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-building-2-line"></i>
                                    <span className="menu-text">Departments</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="departments-list.html">Departments List</a>
                                    </li>
                                    <li>
                                        <a href="add-department.html">Add Department</a>
                                    </li>
                                    <li>
                                        <a href="edit-department.html">Edit Department</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-secure-payment-line"></i>
                                    <span className="menu-text">Accounts</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="income.html">Income</a>
                                    </li>
                                    <li>
                                        <a href="payments.html">Payments</a>
                                    </li>
                                    <li>
                                        <a href="invoices.html">Invoices</a>
                                    </li>
                                    <li>
                                        <a href="invoice-details.html">Invoice Details</a>
                                    </li>
                                    <li>
                                        <a href="create-invoice.html">Create Invoice</a>
                                    </li>
                                    <li>
                                        <a href="expenses.html">Expenses</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-group-2-line"></i>
                                    <span className="menu-text">Human Resources</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="hr-approvals.html">HR Approvals</a>
                                    </li>
                                    <li>
                                        <a href="staff-attendance.html">Attendance</a>
                                    </li>
                                    <li>
                                        <a href="staff-leaves.html">Staff Leaves</a>
                                    </li>
                                    <li>
                                        <a href="staff-holidays.html">Holidays</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-money-dollar-circle-line"></i>
                                    <span className="menu-text">Salaries</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="salaries.html">Salary List</a>
                                    </li>
                                    <li>
                                        <a href="payslip.html">Payslip</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-hotel-bed-line"></i>
                                    <span className="menu-text">Rooms</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="room-statistics.html">Statistics</a>
                                    </li>
                                    <li>
                                        <a href="rooms-allotted.html">Rooms Allotted</a>
                                    </li>
                                    <li>
                                        <a href="rooms-by-dept.html">Rooms By Department</a>
                                    </li>
                                    <li>
                                        <a href="available-rooms.html">Available Rooms</a>
                                    </li>
                                    <li>
                                        <a href="book-room.html">Book Room</a>
                                    </li>
                                    <li>
                                        <a href="add-room.html">Add Room</a>
                                    </li>
                                    <li>
                                        <a href="edit-room.html">Edit Room</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-car-washing-line"></i>
                                    <span className="menu-text">Ambulance</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="ambulance-list.html">Ambulance List</a>
                                    </li>
                                    <li>
                                        <a href="add-ambulance.html">Add Ambulance</a>
                                    </li>
                                    <li>
                                        <a href="edit-ambulance.html">Edit Ambulance</a>
                                    </li>
                                    <li>
                                        <a href="ambulance-call-list.html">Ambulance Call List</a>
                                    </li>
                                    <li>
                                        <a href="add-driver.html">Add Driver</a>
                                    </li>
                                    <li>
                                        <a href="edit-driver.html">Edit Driver</a>
                                    </li>
                                    <li>
                                        <a href="driver-list.html">Driver List</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="events.html">
                                    <i className="ri-calendar-line"></i>
                                    <span className="menu-text">Event Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html">
                                    <i className="ri-tent-line"></i>
                                    <span className="menu-text">Gallery</span>
                                </a>
                            </li>
                            <li>
                                <a href="news.html">
                                    <i className="ri-news-line"></i>
                                    <span className="menu-text">News & Updates</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-color-filter-line"></i>
                                    <span className="menu-text">UI Elements</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="alerts.html">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="avatars.html">Avatars</a>
                                    </li>
                                    <li>
                                        <a href="badges.html">Badges</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="button-groups.html">Button Groups</a>
                                    </li>
                                    <li>
                                        <a href="cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="advanced-cards.html">Advanced Cards</a>
                                    </li>
                                    <li>
                                        <a href="dropdowns.html">Dropdowns</a>
                                    </li>
                                    <li>
                                        <a href="list-items.html">List Items</a>
                                    </li>
                                    <li>
                                        <a href="progress.html">Progress Bars</a>
                                    </li>
                                    <li>
                                        <a href="placeholders.html">Placeholders</a>
                                    </li>
                                    <li>
                                        <a href="spinners.html">Spinners</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-notification-badge-line"></i>
                                    <span className="menu-text">Jquery Components</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="accordions.html">Accordions</a>
                                    </li>
                                    <li>
                                        <a href="carousel.html">Carousel</a>
                                    </li>
                                    <li>
                                        <a href="modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="popovers.html">Popovers</a>
                                    </li>
                                    <li>
                                        <a href="tabs.html">Tabs</a>
                                    </li>
                                    <li>
                                        <a href="tooltips.html">Tooltips</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-terminal-window-line"></i>
                                    <span className="menu-text">Forms</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="form-inputs.html">Form Inputs</a>
                                    </li>
                                    <li>
                                        <a href="form-checkbox-radio.html">Checkbox &amp; Radio</a>
                                    </li>
                                    <li>
                                        <a href="form-file-input.html">File Input</a>
                                    </li>
                                    <li>
                                        <a href="form-validations.html">Validations</a>
                                    </li>
                                    <li>
                                        <a href="date-time-pickers.html">Date Time Pickers</a>
                                    </li>
                                    <li>
                                        <a href="form-masks.html">Input Masks</a>
                                    </li>
                                    <li>
                                        <a href="form-tags.html">Input Tags</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="tables.html">
                                    <i className="ri-table-line"></i>
                                    <span className="menu-text">Tables</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-bar-chart-line"></i>
                                    <span className="menu-text">Graphs</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="apex.html">Apex Graphs</a>
                                    </li>
                                    <li>
                                        <a href="morris.html">Morris Graphs</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="maps.html">
                                    <i className="ri-road-map-line"></i>
                                    <span className="menu-text">Vector Maps</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons.html">
                                    <i className="ri-send-plane-2-line"></i>
                                    <span className="menu-text">Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="settings.html">
                                    <i className="ri-settings-5-line"></i>
                                    <span className="menu-text">Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="typography.html">
                                    <i className="ri-font-size"></i>
                                    <span className="menu-text">Typography</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-login-circle-line"></i>
                                    <span className="menu-text">Login/Signup</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="signup.html">Signup</a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html">Forgot Password</a>
                                    </li>
                                    <li>
                                        <a href="reset-password.html">Reset Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="page-not-found.html">
                                    <i className="ri-alert-line"></i>
                                    <span className="menu-text">Page Not Found</span>
                                </a>
                            </li>
                            <li>
                                <a href="maintenance.html">
                                    <i className="ri-auction-line"></i>
                                    <span className="menu-text">Maintenance</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#!">
                                    <i className="ri-dropdown-list"></i>
                                    <span className="menu-text">Menu Level</span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="#!">Level One Link</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            Level One Menu
                                            <i className="ri-arrow-right-s-line"></i>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li>
                                                <a href="#!">Level Two Link</a>
                                            </li>
                                            <li>
                                                <a href="#!">Level Two Menu
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li>
                                                        <a href="#!">Level Three Link</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Level Three Link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">Level One Link</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="default.html">
                                    <i className="ri-send-plane-line"></i>
                                    <span className="menu-text">External Link</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="ri-exchange-line"></i>
                                    <span className="menu-text">Chip</span>
                                    <span className="badge bg-primary ms-auto">6</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="ri-ticket-line"></i>
                                    <span className="menu-text">Badge</span>
                                    <span className="badge border border-primary text-primary ms-auto">Chip</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="disabled">
                                    <i className="ri-magic-line"></i>
                                    <span className="menu-text">Disabled Link</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-contact">
                        <h5 className="mb-1 lh-1 text-nowrap text-truncate">0987654321</h5>
                        <p className="fw-light m-0 text-nowrap text-truncate">Customer Support</p>
                        <i className="ri-cellphone-line"></i>
                    </div>

                </nav>


                <div className="app-container">


                    <div className="app-header d-flex align-items-center">


                        <div className="brand-container-sm d-xl-none d-flex align-items-center">

                            <div className="app-brand">
                                <a className="flex items-center gap-3">
                                    <img src={getClinicData.data?.success && !getClinicData.data.data.byDefaultLogo ? `${domain}/${getClinicData.data.data.logoFilePath}` : logo} alt="logo" className="logo rounded-full" />
                                    <h1 className={`text-gray-700 duration-200 font-semibold text-xl  origin-left tracking-widest`}>{getClinicData.data?.success && getClinicData.data.data.clinicShortName != "Uzlabs.uz" ? getClinicData.data?.data.clinicShortName : "Uzlabs.uz"}</h1>
                                </a>
                                <a href="" className="flex items-center gap-3">

                                </a>
                            </div>

                            <button type="button" className="toggle-sidebar">
                                <i className="ri-menu-line"></i>
                            </button>


                        </div>

                        <div className="search-container d-xl-block d-none">
                            <input type="text" className="form-control" id="searchId" placeholder="Search" />
                            <i className="ri-search-line"></i>
                        </div>

                        <div className="header-actions">

                            <div className="d-lg-flex d-none gap-2">


                                <LanguageChange />

                                <div className="dropdown">
                                    <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="ri-star-line"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-300">
                                        <h5 className="fw-semibold px-3 py-2 text-primary">Bookmarks</h5>

                                        <div className="d-flex justify-content-center gap-3">
                                            <a href="doctors-cards.html" className="text-center">
                                                <div className="icon-box lg bg-primary-subtle rounded-5 mb-1">
                                                    <i className="ri-stethoscope-line text-primary fs-4"></i>
                                                </div>
                                                Doctors
                                            </a>
                                            <a href="staff.html" className="text-center">
                                                <div className="icon-box lg bg-primary-subtle rounded-5 mb-1">
                                                    <i className="ri-nurse-line text-primary fs-4"></i>
                                                </div>
                                                Staff
                                            </a>
                                            <a href="patients-list.html" className="text-center">
                                                <div className="icon-box lg bg-primary-subtle rounded-5 mb-1">
                                                    <i className="ri-group-2-line text-primary fs-4"></i>
                                                </div>
                                                Patients
                                            </a>
                                        </div>


                                        <div className="d-grid m-3">
                                            <a href="javascript:void(0)" className="btn btn-outline-primary">Add New Bookmark</a>
                                        </div>


                                    </div>
                                </div>

                                <div className="dropdown">
                                    <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="ri-list-check-3"></i>
                                        <span className="count-label warning"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-300">
                                        <h5 className="fw-semibold px-3 py-2 text-primary">Activity</h5>


                                        <div className="scroll300">


                                            <div className="p-3">
                                                <ul className="p-0 activity-list2">
                                                    <li className="activity-item pb-3 mb-3">
                                                        <a href="#!">
                                                            <h5 className="fw-regular">
                                                                <i className="ri-circle-fill text-danger me-1"></i>
                                                                Invoices.
                                                            </h5>
                                                            <div className="ps-3 ms-2 border-start">
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <img src="assets/images/products/1.jpg" className="img-3x rounded-1"
                                                                            alt="Hospital Admin Templates" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        23 invoices have been paid to the MediCare Labs.
                                                                    </div>
                                                                </div>
                                                                <p className="m-0 small">10:20AM Today</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="activity-item pb-3 mb-3">
                                                        <a href="#!">
                                                            <h5 className="fw-regular">
                                                                <i className="ri-circle-fill text-info me-1"></i>
                                                                Purchased.
                                                            </h5>
                                                            <div className="ps-3 ms-2 border-start">
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <img src="assets/images/products/2.jpg" className="img-3x rounded-1"
                                                                            alt="Hospital Admin Templates" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        28 new surgical equipments have been purchased.
                                                                    </div>
                                                                </div>
                                                                <p className="m-0 small">04:30PM Today</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="activity-item pb-3 mb-3">
                                                        <a href="#!">
                                                            <h5 className="fw-regular">
                                                                <i className="ri-circle-fill text-success me-1"></i>
                                                                Appointed.
                                                            </h5>
                                                            <div className="ps-3 ms-2 border-start">
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <img src="assets/images/products/8.jpg" className="img-3x rounded-1"
                                                                            alt="Hospital Admin Templates" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        36 new doctors and 28 staff members appointed.
                                                                    </div>
                                                                </div>
                                                                <p className="m-0 small">06:50PM Today</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="activity-item">
                                                        <a href="#!">
                                                            <h5 className="fw-regular">
                                                                <i className="ri-circle-fill text-warning me-1"></i>
                                                                Requested
                                                            </h5>
                                                            <div className="ps-3 ms-2 border-start">
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <img src="assets/images/products/9.jpg" className="img-3x rounded-1"
                                                                            alt="Hospital Admin Templates" />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        Requested for 6 new vehicles for medical emergency. .
                                                                    </div>
                                                                </div>
                                                                <p className="m-0 small">08:30PM Today</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="d-grid m-3">
                                            <a href="javascript:void(0)" className="btn btn-primary">View all</a>
                                        </div>

                                    </div>
                                </div>

                                <div className="dropdown">
                                    <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="ri-alarm-warning-line"></i>
                                        <span className="count-label success"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-300">
                                        <h5 className="fw-semibold px-3 py-2 text-primary">Alerts</h5>

                                        <div className="scroll300">


                                            <div className="p-3">
                                                <div className="d-flex py-2">
                                                    <div className="icon-box md bg-primary rounded-circle me-3">
                                                        <span className="fw-bold fs-6 text-white">BS</span>
                                                    </div>
                                                    <div className="m-0">
                                                        <h6 className="mb-1 fw-semibold">Becky Shah</h6>
                                                        <p className="mb-1">
                                                            Appointed as a new President 2014-2025
                                                        </p>
                                                        <p className="small m-0 opacity-50">Today, 07:30pm</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex py-2">
                                                    <div className="icon-box md bg-primary rounded-circle me-3">
                                                        <span className="fw-bold fs-6 text-white">UF</span>
                                                    </div>
                                                    <div className="m-0">
                                                        <h6 className="mb-1 fw-semibold">Ursula Frazier</h6>
                                                        <p className="mb-1">
                                                            Congratulate, James for new job.
                                                        </p>
                                                        <p className="small m-0 opacity-50">Today, 08:00pm</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex py-2">
                                                    <div className="icon-box md bg-primary rounded-circle me-3">
                                                        <span className="fw-bold fs-6 text-white">MK</span>
                                                    </div>
                                                    <div className="m-0">
                                                        <h6 className="mb-1 fw-semibold">Myra Kane</h6>
                                                        <p className="mb-1">
                                                            Lewis added new doctors training schedule.
                                                        </p>
                                                        <p className="small m-0 opacity-50">Today, 09:30pm</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        {/* dfdfd */}
                                        <div className="d-grid m-3">
                                            <a href="javascript:void(0)" className="btn btn-primary">View all</a>
                                        </div>
                                        {/* View all button ends */}

                                    </div>
                                </div>
                                {/* Notifications dropdown ends */}

                                {/* Messages dropdown starts */}
                                <div className="dropdown">
                                    <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="ri-message-3-line"></i>
                                        <span className="count-label"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-300">
                                        <h5 className="fw-semibold px-3 py-2 text-primary">Messages</h5>

                                        {/* Scroll starts */}
                                        <div className="scroll300">

                                            {/* Messages list starts */}
                                            <div className="p-3">
                                                <div className="d-flex py-2">
                                                    <img src="assets/images/doctor3.png" className="img-3x me-3 rounded-5"
                                                        alt="Hospital Admin Templates" />
                                                    <div className="m-0">
                                                        <h6 className="mb-1 fw-semibold">Albert Winters</h6>
                                                        <p className="mb-1">
                                                            Appointed as a new President 2014-2025
                                                        </p>
                                                        <p className="small m-0 opacity-50">Today, 07:30pm</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex py-2">
                                                    <img src="assets/images/doctor1.png" className="img-3x me-3 rounded-5"
                                                        alt="Hospital Admin Templates" />
                                                    <div className="m-0">
                                                        <h6 className="mb-1 fw-semibold">Van Robinson</h6>
                                                        <p className="mb-1">
                                                            Congratulate, James for new job.
                                                        </p>
                                                        <p className="small m-0 opacity-50">Today, 08:00pm</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex py-2">
                                                    <img src="assets/images/doctor4.png" className="img-3x me-3 rounded-5"
                                                        alt="Hospital Admin Templates" />
                                                    <div className="m-0">
                                                        <h6 className="mb-1 fw-semibold">Mara Coffey</h6>
                                                        <p className="mb-1">
                                                            Lewis added new doctors training schedule.
                                                        </p>
                                                        <p className="small m-0 opacity-50">Today, 09:30pm</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Messages list ends */}

                                        </div>
                                        {/* Scroll ends */}

                                        {/* View all button starts */}
                                        <div className="d-grid m-3">
                                            <a href="javascript:void(0)" className="btn btn-primary">View all</a>
                                        </div>
                                        {/* View all button ends */}

                                    </div>
                                </div>
                            </div>
                            {/* Header actions ends */}

                            {/* Header user settings starts */}
                            <div className="dropdown ms-3">
                                <a id="userSettings" className="dropdown-toggle d-flex align-items-center" href="#!" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="avatar-box">
                                        <img src={data?.data?.photoBase64 ? data?.data?.photoBase64 : userLogo} className="img-2xx rounded-5" alt="Medical Dashboard" />
                                        <span className="status busy"></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow-lg">
                                    <div className="px-3 py-2">
                                        <span className="small">{localStorage.getItem("role")}</span>
                                        <h6 className="m-0">{data?.data?.firstName}</h6>
                                    </div>
                                    <Link to={"/"} className="d-grid mx-2">
                                        <button className="btn btn-danger w-full btn-sm m">Chiqish</button>
                                    </Link>
                                    {/* <div className="d-grid mx-2">
                                        <Link to={"/"} className="btn btn-danger ">Chiqish</Link>
                                    </div> */}
                                </div>
                            </div>
                            {/* Header user settings ends */}

                        </div>
                        {/* App header actions ends */}

                    </div>
                    {/* App header ends */}

                    {/* App hero header starts */}
                    <div className="app-hero-header d-flex align-items-center">

                        {/* Breadcrumb starts */}
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">
                                    <i className="ri-home-3-line"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item text-primary" aria-current="page">
                                {routerNames.map((route) => (
                                    route.key == pathname ? route.value : ""
                                ))}
                            </li>
                        </ol>
                        {/* Breadcrumb ends */}

                        {/* Sales stats starts */}
                        <div className="ms-auto d-lg-flex d-none flex-row">
                            <div className="input-group">
                                <span className="input-group-text bg-primary-lighten">
                                    <i className="ri-calendar-2-line text-primary"></i>
                                </span>
                                <input type="text" id="abc" className="form-control custom-daterange" />
                            </div>
                        </div>
                        {/* Sales stats ends */}

                    </div>
                    {/* App Hero header ends */}

                    <div className="app-body">
                        {children}
                    </div>



                    {/* App footer starts */}
                    <div className="app-footer">
                        <span>© Apollo admin 2024</span>
                    </div>
                    {/* App footer ends */}

                </div>

            </div >


        </div >

    )
} 
