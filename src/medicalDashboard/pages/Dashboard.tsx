import Layout from '@core/bootComponents/Layout'
import LoaderTimer from '@core/bootComponents/LoaderTimer'
import { isAuthenticated, isCheckClinic } from '@users/utils/auth'
import { Navigate } from 'react-router-dom'


export default function Dashboard() {
    // const clinicId = localStorage.getItem("clinicId")
    // const clincData = useGetClinicData(clinicId ? clinicId as string : "0")
    // const isLoading = clincData.isLoading
    // const [newData, setData] = useState<ClinicaUpdateData>(defaultData)
 

    if (!isAuthenticated()) {
        return <Navigate to="/" />
    }
    if (!isCheckClinic()) {
        return <Navigate to='/clinica' />
    }



    return (
        <Layout>

            <LoaderTimer time={3000} />
            {/* Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-9 col-sm-12">
                    <div className="card mb-3 bg-3">
                        <div className="card-body">
                            <div className="mh-230">
                                <div className="py-3 px-2 text-white">
                                    <h6>Good Morning,</h6>
                                    <h3 className="mb-1">Dr. Ema Wilson</h3>
                                    <p className="fw-normal">Your schedule today.</p>
                                    <div className="mt-4 d-flex gap-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-box lg bg-lime rounded-5 me-2">
                                                <i className="ri-stethoscope-line fs-4"></i>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h2 className="m-0 lh-1">86</h2>
                                                <p className="m-0">Appointments</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="icon-box lg bg-lime rounded-5 me-2">
                                                <i className="ri-lungs-line fs-4"></i>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h2 className="m-0 lh-1">23</h2>
                                                <p className="m-0">Surgeries</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-12">
                    <div className="card mb-3 bg-primary">
                        <div className="card-body">
                            <div className="mh-230 text-white">
                                <h5>Patients</h5>
                                <div className="text-dark apex-labels-primary">
                                    <div className="overflow-hidden">
                                        <div id="weeklyPatients"></div>
                                    </div>
                                </div>
                                <div className="text-center w-75 m-auto">
                                    Increased patients by <span className="badge bg-lime">90</span> in the last Seven days.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row ends */}

            {/* Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-4 col-sm-6">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Doctors</h5>
                        </div>
                        <div className="card-body">
                            <div className="scroll300">

                                <ul className="list-unstyled d-grid gap-3">
                                    <li className="w-100">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <img src="assets/images/doctor.png" className="img-3x rounded-circle" alt="Doctor Dashboard" />
                                            <div className="flex-fill">
                                                <span className="d-flex fw-semibold">Dr. Smith Chang</span>
                                                <span className="text-muted small">Cardiology</span>
                                            </div>
                                            <span className="badge bg-primary-subtle rounded-pill text-primary">
                                                <i className="ri-circle-fill me-1"></i>Available</span>
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <img src="assets/images/doctor2.png" className="img-3x rounded-circle" alt="Doctor Dashboard" />
                                            <div className="flex-fill">
                                                <span className="d-flex fw-semibold">Dr. Dmitriy Groshev</span>
                                                <span className="text-muted small">Orthopedics</span>
                                            </div>
                                            <span className="badge bg-primary-subtle rounded-pill text-primary">
                                                <i className="ri-circle-fill me-1"></i>Available</span>
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <img src="assets/images/doctor3.png" className="img-3x rounded-circle" alt="Doctor Dashboard" />
                                            <div className="flex-fill">
                                                <span className="d-flex fw-semibold">Dr. Sheryl Glass</span>
                                                <span className="text-muted small">Dermatology</span>
                                            </div>
                                            <span className="badge bg-danger-subtle rounded-pill text-danger">
                                                <i className="ri-circle-fill me-1"></i>Not Available</span>
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <img src="assets/images/doctor4.png" className="img-3x rounded-circle" alt="Doctor Dashboard" />
                                            <div className="flex-fill">
                                                <span className="d-flex fw-semibold">Dr. Gabriela Tyler</span>
                                                <span className="text-muted small">Neurology</span>
                                            </div>
                                            <span className="badge bg-primary-subtle rounded-pill text-primary">
                                                <i className="ri-circle-fill me-1"></i>Available</span>
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <img src="assets/images/doctor6.png" className="img-3x rounded-circle" alt="Doctor Dashboard" />
                                            <div className="flex-fill">
                                                <span className="d-flex fw-semibold">Dr. Lilly Chavez</span>
                                                <span className="text-muted small">Ophthalmology</span>
                                            </div>
                                            <span className="badge bg-primary-subtle rounded-pill text-primary">
                                                <i className="ri-circle-fill me-1"></i>Available</span>
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <img src="assets/images/doctor7.png" className="img-3x rounded-circle" alt="Doctor Dashboard" />
                                            <div className="flex-fill">
                                                <span className="d-flex fw-semibold">Dr. Robbie Dudley</span>
                                                <span className="text-muted small">Gastroenterology</span>
                                            </div>
                                            <span className="badge bg-danger-subtle rounded-pill text-danger">
                                                <i className="ri-circle-fill me-1"></i>Not Available</span>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Reviews</h5>
                        </div>
                        <div className="card-body">
                            <div className="scroll300">

                                {/* Reviews starts */}
                                <div className="d-grid gap-5">
                                    <div className="d-flex">
                                        <img src="assets/images/patient1.png" className="img-3x rounded-2" alt="Medical Admin Template" />
                                        <div className="ms-3">
                                            <span className="badge border border-primary text-primary mb-3">Recommend</span>
                                            <h6>Kristie Jimenez</h6>
                                            <p className="mb-2">I am consulting with her for last 10 years and she is really good in
                                                thyroid. Her experience has greatest strength. By looking at the report she will
                                                diagnosis the problem and listen to us. We might think she is in a hurry to complete
                                                the
                                                patient but her experience makes her 100%.</p>
                                            <p className="badge bg-primary"><i className="ri-thumb-up-line"></i> I recommend the doctor.</p>
                                            <div className="rating-stars">
                                                <div className="readonly5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img src="assets/images/patient2.png" className="img-3x rounded-2" alt="Medical Admin Template" />
                                        <div className="ms-3">
                                            <span className="badge border border-primary text-primary mb-3">Excellent</span>
                                            <h6>Natasha Dunn</h6>
                                            <p className="mb-2">Dr.Jessika is my physician from past four years. Till now, whatever
                                                treatment and advice she has given me is of the best kind. I am extremely satisfied
                                                with
                                                it. There may be about 10 minutes of waiting period before consultation. The hospital
                                                and staff are good as well.</p>
                                            <p className="badge bg-primary"><i className="ri-thumb-up-line"></i> I recommend the doctor.</p>
                                            <div className="rating-stars">
                                                <div className="readonly5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <img src="assets/images/patient3.png" className="img-3x rounded-2" alt="Medical Admin Template" />
                                        <div className="ms-3">
                                            <span className="badge border border-danger text-danger mb-3">Bad</span>
                                            <h6>Winnie Black</h6>
                                            <p className="mb-2">Its a not recommerded example. Its a not recommerded example. Its a not
                                                recommerded example. Its a not recommerded example.
                                            </p>
                                            <p className="badge bg-secondary text-body"><i className="ri-thumb-down-line"></i> I do not
                                                recommend the
                                                doctor.
                                            </p>
                                            <div className="rating-stars">
                                                <div className="readonly2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Load More</button>
                                    </div>
                                </div>
                                {/* Reviews ends */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Consultation</h5>
                        </div>
                        <div className="card-body">
                            <div className="scroll300">
                                <div id="patients2"></div>
                                <div className="d-flex gap-2 mt-3 px-3">
                                    <div className="w-50 border border-secondary rounded-5 p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-box md bg-primary rounded-5 me-2">
                                                <i className="ri-men-line fs-4"></i>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h3 className="m-0 lh-1 text-primary">86</h3>
                                                <p className="m-0">Male</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-50 border border-secondary rounded-5 p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-box md bg-primary rounded-5 me-2">
                                                <i className="ri-women-line fs-4"></i>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h3 className="m-0 lh-1 text-primary">38</h3>
                                                <p className="m-0">Female</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row ends */}


            {/*  Row starts */}
            <div className="row gx-3">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title">Doctors List</h5>
                            <a href="add-doctors.html" className="btn btn-primary ms-auto">Add Doctor</a>
                        </div>
                        <div className="card-body pt-0">

                            {/*  Table starts */}
                            <div className="table-responsive">
                                <table id="scrollVertical" className="table truncate m-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Doctor Name</th>
                                            <th>Designation</th>
                                            <th className="text-center">Sun</th>
                                            <th className="text-center">Mon</th>
                                            <th className="text-center">Tue</th>
                                            <th className="text-center">Wed</th>
                                            <th className="text-center">Thu</th>
                                            <th className="text-center">Fri</th>
                                            <th className="text-center">Sat</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#0008</td>
                                            <td>
                                                <img src="assets/images/doctor.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Allan Stuart
                                            </td>
                                            <td>Oncologist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">9AM-2PM</td>
                                            <td className="text-center">9AM-2PM</td>
                                            <td className="text-center">9AM-2PM</td>
                                            <td className="text-center">9AM-2PM</td>
                                            <td className="text-center">9AM-2PM</td>
                                            <td className="text-center">9AM-2PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0021</td>
                                            <td>
                                                <img src="assets/images/doctor1.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Smith White
                                            </td>
                                            <td>Neurology</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">3PM-5PM</td>
                                            <td className="text-center">3PM-5PM</td>
                                            <td className="text-center">3PM-5PM</td>
                                            <td className="text-center">3PM-5PM</td>
                                            <td className="text-center">3PM-5PM</td>
                                            <td className="text-center">3PM-5PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0026</td>
                                            <td>
                                                <img src="assets/images/doctor2.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Gilbert Sandoval
                                            </td>
                                            <td>Cardiologist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">5PM-9PM</td>
                                            <td className="text-center">5PM-9PM</td>
                                            <td className="text-center">5PM-9PM</td>
                                            <td className="text-center">5PM-9PM</td>
                                            <td className="text-center">5PM-9PM</td>
                                            <td className="text-center">5PM-9PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0039</td>
                                            <td>
                                                <img src="assets/images/doctor3.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Bernardo James
                                            </td>
                                            <td>Clinical Doctor</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">7AM-9AM</td>
                                            <td className="text-center">7AM-9AM</td>
                                            <td className="text-center">7AM-9AM</td>
                                            <td className="text-center">7AM-9AM</td>
                                            <td className="text-center">7AM-9AM</td>
                                            <td className="text-center">7AM-9AM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0044</td>
                                            <td>
                                                <img src="assets/images/doctor4.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Ronald Sullivan
                                            </td>
                                            <td>Radiologist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">3PM-9PM</td>
                                            <td className="text-center">3PM-9PM</td>
                                            <td className="text-center">3PM-9PM</td>
                                            <td className="text-center">3PM-9PM</td>
                                            <td className="text-center">3PM-9PM</td>
                                            <td className="text-center">3PM-9PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0083</td>
                                            <td>
                                                <img src="assets/images/doctor5.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Amelia Bruklin
                                            </td>
                                            <td>Neurologist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">6PM-8PM</td>
                                            <td className="text-center">6PM-8PM</td>
                                            <td className="text-center">6PM-8PM</td>
                                            <td className="text-center">6PM-8PM</td>
                                            <td className="text-center">6PM-8PM</td>
                                            <td className="text-center">6PM-8PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0067</td>
                                            <td>
                                                <img src="assets/images/doctor2.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Bshton Cozei
                                            </td>
                                            <td>Pediatrics</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">4PM-7PM</td>
                                            <td className="text-center">4PM-7PM</td>
                                            <td className="text-center">4PM-7PM</td>
                                            <td className="text-center">4PM-7PM</td>
                                            <td className="text-center">4PM-7PM</td>
                                            <td className="text-center">4PM-7PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0048</td>
                                            <td>
                                                <img src="assets/images/doctor3.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                George Bailey
                                            </td>
                                            <td>Pediatrics</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0058</td>
                                            <td>
                                                <img src="assets/images/doctor4.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Andrea Lalema
                                            </td>
                                            <td>Dentist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">8AM-4PM</td>
                                            <td className="text-center">8AM-4PM</td>
                                            <td className="text-center">8AM-4PM</td>
                                            <td className="text-center">8AM-4PM</td>
                                            <td className="text-center">8AM-4PM</td>
                                            <td className="text-center">8AM-4PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0047</td>
                                            <td>
                                                <img src="assets/images/doctor3.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Taylor Melon
                                            </td>
                                            <td>Therapist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">9AM-3PM</td>
                                            <td className="text-center">9AM-3PM</td>
                                            <td className="text-center">9AM-3PM</td>
                                            <td className="text-center">9AM-3PM</td>
                                            <td className="text-center">9AM-3PM</td>
                                            <td className="text-center">9AM-3PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0082</td>
                                            <td>
                                                <img src="assets/images/doctor.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                Meera Gill
                                            </td>
                                            <td>Gynecologist</td>
                                            <td className="text-center text-danger">NA</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td className="text-center">5PM-8PM</td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </button>
                                                    <a href="edit-doctors.html" className="btn btn-outline-success btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Doctor Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                    <a href="doctors-profile.html" className="btn btn-outline-info btn-sm"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Profile">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*  Table ends */}

                            {/*  Modal Delete Row */}
                            <div className="modal fade" id="delRow" tabIndex={-1} aria-labelledby="delRowLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="delRowLabel">
                                                Confirm
                                            </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Are you sure you want to delete the doctor from list?
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button className="btn btn-outline-secondary" data-bs-dismiss="modal"
                                                    aria-label="Close">No</button>
                                                <button className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/*  Row ends */}

        </Layout>
    )
}


