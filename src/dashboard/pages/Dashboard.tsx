import Layout from '@core/bootComponents/Layout'
import Loader from '@core/bootComponents/Loader'

export default function Dashboard() {

    return (
        <Layout>

            <Loader time={5000} />

            {/* Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-9 col-sm-12">

                    {/* Row starts */}
                    <div className="row gx-3">
                        <div className="col-sm-4 col-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="p-2 border border-primary rounded-circle me-3">
                                            <div className="icon-box md bg-primary-lighten rounded-5">
                                                <i className="ri-surgical-mask-line fs-4 text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h1 className="lh-1">980</h1>
                                            <p className="m-0">Patients</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-1">
                                        <a className="text-primary" href="javascript:void(0);">
                                            <span>View All</span>
                                            <i className="ri-arrow-right-line text-primary ms-1"></i>
                                        </a>
                                        <div className="text-end">
                                            <p className="mb-0 text-primary">+40%</p>
                                            <span className="badge bg-primary-light text-primary small">this month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="p-2 border border-primary rounded-circle me-3">
                                            <div className="icon-box md bg-primary-lighten rounded-5">
                                                <i className="ri-lungs-line fs-4 text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h1 className="lh-1">260</h1>
                                            <p className="m-0">Appointments</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-1">
                                        <a className="text-primary" href="javascript:void(0);">
                                            <span>View All</span>
                                            <i className="ri-arrow-right-line ms-1"></i>
                                        </a>
                                        <div className="text-end">
                                            <p className="mb-0 text-primary">+30%</p>
                                            <span className="badge bg-primary-light text-primary small">this month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="p-2 border border-primary rounded-circle me-3">
                                            <div className="icon-box md bg-primary-lighten rounded-5">
                                                <i className="ri-money-dollar-circle-line fs-4 text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h1 className="lh-1">$6800</h1>
                                            <p className="m-0">Revenue</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-1">
                                        <a className="text-primary" href="javascript:void(0);">
                                            <span>View All</span>
                                            <i className="ri-arrow-right-line ms-1"></i>
                                        </a>
                                        <div className="text-end">
                                            <p className="mb-0 text-primary">+20%</p>
                                            <span className="badge bg-primary-light text-primary small">this month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row ends */}

                    {/* Row starts */}
                    <div className="row gx-3">
                        <div className="col-xxl-12 col-sm-12">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title">Specialities</h5>
                                </div>
                                <div className="card-body pt-0">

                                    {/* Row starts */}
                                    <div className="row g-3">
                                        <div className="col-sm col-6">
                                            <div className="card border rounded-5">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <img src="assets/images/icons/bone.svg" className="img-3x mb-4" alt="Medical Admin" />
                                                        <h6>Orthopedic</h6>
                                                        <h2 className="text-primary m-0">9</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm col-6">
                                            <div className="card border rounded-5">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <img src="assets/images/icons/kidney.svg" className="img-3x mb-4" alt="Hoapital Admin" />
                                                        <h6>Kidney</h6>
                                                        <h2 className="text-primary m-0">5</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm col-6">
                                            <div className="card border rounded-5">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <img src="assets/images/icons/liver.svg" className="img-3x mb-4" alt="Hospital Dashboard" />
                                                        <h6>Liver</h6>
                                                        <h2 className="text-primary m-0">6</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm col-6">
                                            <div className="card border rounded-5">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <img src="assets/images/icons/stomach.svg" className="img-3x mb-4"
                                                            alt="Medical Dashboard" />
                                                        <h6>Surgery</h6>
                                                        <h2 className="text-primary m-0">12</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm col-6">
                                            <div className="card border rounded-5">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <img src="assets/images/icons/microscope.svg" className="img-3x mb-4"
                                                            alt="Hospital Dashboard" />
                                                        <h6>Laboratory</h6>
                                                        <h2 className="text-primary m-0">5</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Row ends */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row ends */}

                </div>
                <div className="col-xxl-3 col-sm-12">
                    <div className="card mb-3 display-card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center m-auto">
                                <div className="display-card-body m-4">
                                    <img src="assets/images/lungs.png" className="img-fluid" alt="Doctor Dashboard" />
                                    <span className="dot-circle one"></span>
                                    <span className="dot-circle two"></span>
                                    <span className="dot-circle three"></span>
                                    <span className="dot-circle four"></span>
                                    <span className="dot-circle five"></span>
                                </div>
                                <div className="d-flex gap-2">
                                    <div className="icon-box border rounded-5">
                                        <div className="text-center p-1">
                                            <h6 className="text-body small mt-2 mb-0">Left</h6>
                                            <div id="sparkline1"></div>
                                        </div>
                                    </div>
                                    <div className="icon-box border rounded-5">
                                        <div className="text-center p-1">
                                            <h6 className="text-body small mt-2 mb-0">Health</h6>
                                            <div id="sparkline2"></div>
                                        </div>
                                    </div>
                                    <div className="icon-box border rounded-5">
                                        <div className="text-center p-1">
                                            <h6 className="text-body small mt-2 mb-0">Right</h6>
                                            <div id="sparkline3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row ends */}

            {/* Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-12 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header pb-0">
                            <h5 className="card-title">Patients by Age</h5>
                        </div>
                        <div className="card-body pt-0">
                            <div className="overflow-hidden">
                                <div id="availableBeds"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row ends */}

            {/* Row starts */}
            <div className="row gx-3">
                <div className="col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Patients</h5>
                        </div>
                        <div className="card-body">
                            <div className="overflow-hidden">
                                <div id="patients"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Income By Department</h5>
                        </div>
                        <div className="card-body">
                            <div className="overflow-hidden">
                                <div id="departments"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row ends */}

            {/* Row starts */}
            <div className="row gx-3">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Recent Patient Visits</h5>
                        </div>
                        <div className="card-body pt-0">

                            {/* Table starts */}
                            <div className="table-responsive">
                                <table id="hideSearchExample" className="table m-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Patient Name</th>
                                            <th>Age</th>
                                            <th>Date of Birth</th>
                                            <th>Diagnosis</th>
                                            <th>Type</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>
                                                <img src="assets/images/patient.png" className="img-2x rounded-5 me-1"
                                                    alt="Doctors Admin Template" />
                                                Willian Mathews
                                            </td>
                                            <td>21</td>
                                            <td>
                                                20/06/2010
                                            </td>
                                            <td>Heart Attack</td>
                                            <td>
                                                <span className="badge bg-danger-subtle text-danger fs-6">Emergency</span>
                                            </td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <span data-bs-toggle="tooltip" data-bs-placement="top"
                                                            data-bs-title="Delete Patient Details">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </span>
                                                    </button>
                                                    <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>002</td>
                                            <td>
                                                <img src="assets/images/patient1.png" className="img-2x rounded-5 me-1"
                                                    alt="Doctors Admin Template" />
                                                Adam Bradley
                                            </td>
                                            <td>36</td>
                                            <td>
                                                24/09/2002
                                            </td>
                                            <td>Diabetes</td>
                                            <td>
                                                <span className="badge bg-primary-subtle text-primary fs-6">Non Urgent</span>
                                            </td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <span data-bs-toggle="tooltip" data-bs-placement="top"
                                                            data-bs-title="Delete Patient Details">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </span>
                                                    </button>
                                                    <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>003</td>
                                            <td>
                                                <img src="assets/images/patient2.png" className="img-2x rounded-5 me-1"
                                                    alt="Doctors Admin Template" />
                                                Merle Daniel
                                            </td>
                                            <td>82</td>
                                            <td>
                                                22/02/2007
                                            </td>
                                            <td>Chancroid</td>
                                            <td>
                                                <span className="badge bg-warning-subtle text-warning fs-6">Out Patient</span>
                                            </td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <span data-bs-toggle="tooltip" data-bs-placement="top"
                                                            data-bs-title="Delete Patient Details">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </span>
                                                    </button>
                                                    <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>004</td>
                                            <td>
                                                <img src="assets/images/patient3.png" className="img-2x rounded-5 me-1"
                                                    alt="Doctors Admin Template" />
                                                Nicole Sellers
                                            </td>
                                            <td>29</td>
                                            <td>
                                                28/09/1996
                                            </td>
                                            <td>Pediatric</td>
                                            <td>
                                                <span className="badge bg-info-subtle text-info fs-6">Discharge</span>
                                            </td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <span data-bs-toggle="tooltip" data-bs-placement="top"
                                                            data-bs-title="Delete Patient Details">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </span>
                                                    </button>
                                                    <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>005</td>
                                            <td>
                                                <img src="assets/images/patient4.png" className="img-2x rounded-5 me-1"
                                                    alt="Doctors Admin Template" />
                                                Kathy Atkinson
                                            </td>
                                            <td>58</td>
                                            <td>
                                                30/03/1989
                                            </td>
                                            <td>Alphaviruses</td>
                                            <td>
                                                <span className="badge bg-danger-subtle text-danger fs-6">Urgent</span>
                                            </td>
                                            <td>
                                                <div className="d-inline-flex gap-1">
                                                    <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
                                                        data-bs-target="#delRow">
                                                        <span data-bs-toggle="tooltip" data-bs-placement="top"
                                                            data-bs-title="Delete Patient Details">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </span>
                                                    </button>
                                                    <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
                                                        <i className="ri-edit-box-line"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Table ends */}

                            {/* Modal Delete Row */}
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
                                            Are you sure you want to delete the patient details?
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal"
                                                    aria-label="Close">No</button>
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                                    aria-label="Close">Yes</button>
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
        </Layout>
    )
}



// {/* App body starts */ }
// <div className="app-body">

//     {/* Row starts */}
//     <div className="row gx-3">
//         <div className="col-xxl-9 col-sm-12">

//             {/* Row starts */}
//             <div className="row gx-3">
//                 <div className="col-sm-4 col-12">
//                     <div className="card mb-3">
//                         <div className="card-body">
//                             <div className="d-flex align-items-center">
//                                 <div className="p-2 border border-primary rounded-circle me-3">
//                                     <div className="icon-box md bg-primary-lighten rounded-5">
//                                         <i className="ri-surgical-mask-line fs-4 text-primary"></i>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex flex-column">
//                                     <h1 className="lh-1">980</h1>
//                                     <p className="m-0">Patients</p>
//                                 </div>
//                             </div>
//                             <div className="d-flex align-items-end justify-content-between mt-1">
//                                 <a className="text-primary" href="javascript:void(0);">
//                                     <span>View All</span>
//                                     <i className="ri-arrow-right-line text-primary ms-1"></i>
//                                 </a>
//                                 <div className="text-end">
//                                     <p className="mb-0 text-primary">+40%</p>
//                                     <span className="badge bg-primary-light text-primary small">this month</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-4 col-12">
//                     <div className="card mb-3">
//                         <div className="card-body">
//                             <div className="d-flex align-items-center">
//                                 <div className="p-2 border border-primary rounded-circle me-3">
//                                     <div className="icon-box md bg-primary-lighten rounded-5">
//                                         <i className="ri-lungs-line fs-4 text-primary"></i>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex flex-column">
//                                     <h1 className="lh-1">260</h1>
//                                     <p className="m-0">Appointments</p>
//                                 </div>
//                             </div>
//                             <div className="d-flex align-items-end justify-content-between mt-1">
//                                 <a className="text-primary" href="javascript:void(0);">
//                                     <span>View All</span>
//                                     <i className="ri-arrow-right-line ms-1"></i>
//                                 </a>
//                                 <div className="text-end">
//                                     <p className="mb-0 text-primary">+30%</p>
//                                     <span className="badge bg-primary-light text-primary small">this month</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-4 col-12">
//                     <div className="card mb-3">
//                         <div className="card-body">
//                             <div className="d-flex align-items-center">
//                                 <div className="p-2 border border-primary rounded-circle me-3">
//                                     <div className="icon-box md bg-primary-lighten rounded-5">
//                                         <i className="ri-money-dollar-circle-line fs-4 text-primary"></i>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex flex-column">
//                                     <h1 className="lh-1">$6800</h1>
//                                     <p className="m-0">Revenue</p>
//                                 </div>
//                             </div>
//                             <div className="d-flex align-items-end justify-content-between mt-1">
//                                 <a className="text-primary" href="javascript:void(0);">
//                                     <span>View All</span>
//                                     <i className="ri-arrow-right-line ms-1"></i>
//                                 </a>
//                                 <div className="text-end">
//                                     <p className="mb-0 text-primary">+20%</p>
//                                     <span className="badge bg-primary-light text-primary small">this month</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Row ends */}

//             {/* Row starts */}
//             <div className="row gx-3">
//                 <div className="col-xxl-12 col-sm-12">
//                     <div className="card mb-3">
//                         <div className="card-header">
//                             <h5 className="card-title">Specialities</h5>
//                         </div>
//                         <div className="card-body pt-0">

//                             {/* Row starts */}
//                             <div className="row g-3">
//                                 <div className="col-sm col-6">
//                                     <div className="card border rounded-5">
//                                         <div className="card-body">
//                                             <div className="d-flex flex-column align-items-center">
//                                                 <img src="assets/images/icons/bone.svg" className="img-3x mb-4" alt="Medical Admin" />
//                                                 <h6>Orthopedic</h6>
//                                                 <h2 className="text-primary m-0">9</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm col-6">
//                                     <div className="card border rounded-5">
//                                         <div className="card-body">
//                                             <div className="d-flex flex-column align-items-center">
//                                                 <img src="assets/images/icons/kidney.svg" className="img-3x mb-4" alt="Hoapital Admin" />
//                                                 <h6>Kidney</h6>
//                                                 <h2 className="text-primary m-0">5</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm col-6">
//                                     <div className="card border rounded-5">
//                                         <div className="card-body">
//                                             <div className="d-flex flex-column align-items-center">
//                                                 <img src="assets/images/icons/liver.svg" className="img-3x mb-4" alt="Hospital Dashboard" />
//                                                 <h6>Liver</h6>
//                                                 <h2 className="text-primary m-0">6</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm col-6">
//                                     <div className="card border rounded-5">
//                                         <div className="card-body">
//                                             <div className="d-flex flex-column align-items-center">
//                                                 <img src="assets/images/icons/stomach.svg" className="img-3x mb-4"
//                                                     alt="Medical Dashboard" />
//                                                 <h6>Surgery</h6>
//                                                 <h2 className="text-primary m-0">12</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm col-6">
//                                     <div className="card border rounded-5">
//                                         <div className="card-body">
//                                             <div className="d-flex flex-column align-items-center">
//                                                 <img src="assets/images/icons/microscope.svg" className="img-3x mb-4"
//                                                     alt="Hospital Dashboard" />
//                                                 <h6>Laboratory</h6>
//                                                 <h2 className="text-primary m-0">5</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* Row ends */}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Row ends */}

//         </div>
//         <div className="col-xxl-3 col-sm-12">
//             <div className="card mb-3 display-card">
//                 <div className="card-body">
//                     <div className="d-flex flex-column align-items-center m-auto">
//                         <div className="display-card-body m-4">
//                             <img src="assets/images/lungs.png" className="img-fluid" alt="Doctor Dashboard" />
//                             <span className="dot-circle one"></span>
//                             <span className="dot-circle two"></span>
//                             <span className="dot-circle three"></span>
//                             <span className="dot-circle four"></span>
//                             <span className="dot-circle five"></span>
//                         </div>
//                         <div className="d-flex gap-2">
//                             <div className="icon-box border rounded-5">
//                                 <div className="text-center p-1">
//                                     <h6 className="text-body small mt-2 mb-0">Left</h6>
//                                     <div id="sparkline1"></div>
//                                 </div>
//                             </div>
//                             <div className="icon-box border rounded-5">
//                                 <div className="text-center p-1">
//                                     <h6 className="text-body small mt-2 mb-0">Health</h6>
//                                     <div id="sparkline2"></div>
//                                 </div>
//                             </div>
//                             <div className="icon-box border rounded-5">
//                                 <div className="text-center p-1">
//                                     <h6 className="text-body small mt-2 mb-0">Right</h6>
//                                     <div id="sparkline3"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* Row ends */}

//     {/* Row starts */}
//     <div className="row gx-3">
//         <div className="col-xxl-12 col-sm-12">
//             <div className="card mb-3">
//                 <div className="card-header pb-0">
//                     <h5 className="card-title">Patients by Age</h5>
//                 </div>
//                 <div className="card-body pt-0">
//                     <div className="overflow-hidden">
//                         <div id="availableBeds"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* Row ends */}

//     {/* Row starts */}
//     <div className="row gx-3">
//         <div className="col-sm-12">
//             <div className="card mb-3">
//                 <div className="card-header">
//                     <h5 className="card-title">Patients</h5>
//                 </div>
//                 <div className="card-body">
//                     <div className="overflow-hidden">
//                         <div id="patients"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-12">
//             <div className="card mb-3">
//                 <div className="card-header">
//                     <h5 className="card-title">Income By Department</h5>
//                 </div>
//                 <div className="card-body">
//                     <div className="overflow-hidden">
//                         <div id="departments"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* Row ends */}

//     {/* Row starts */}
//     <div className="row gx-3">
//         <div className="col-sm-12">
//             <div className="card">
//                 <div className="card-header">
//                     <h5 className="card-title">Recent Patient Visits</h5>
//                 </div>
//                 <div className="card-body pt-0">

//                     {/* Table starts */}
//                     <div className="table-responsive">
//                         <table id="hideSearchExample" className="table m-0 align-middle">
//                             <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Patient Name</th>
//                                     <th>Age</th>
//                                     <th>Date of Birth</th>
//                                     <th>Diagnosis</th>
//                                     <th>Type</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>001</td>
//                                     <td>
//                                         <img src="assets/images/patient.png" className="img-2x rounded-5 me-1"
//                                             alt="Doctors Admin Template" />
//                                         Willian Mathews
//                                     </td>
//                                     <td>21</td>
//                                     <td>
//                                         20/06/2010
//                                     </td>
//                                     <td>Heart Attack</td>
//                                     <td>
//                                         <span className="badge bg-danger-subtle text-danger fs-6">Emergency</span>
//                                     </td>
//                                     <td>
//                                         <div className="d-inline-flex gap-1">
//                                             <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
//                                                 data-bs-target="#delRow">
//                                                 <span data-bs-toggle="tooltip" data-bs-placement="top"
//                                                     data-bs-title="Delete Patient Details">
//                                                     <i className="ri-delete-bin-line"></i>
//                                                 </span>
//                                             </button>
//                                             <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
//                                                 <i className="ri-edit-box-line"></i>
//                                             </a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>002</td>
//                                     <td>
//                                         <img src="assets/images/patient1.png" className="img-2x rounded-5 me-1"
//                                             alt="Doctors Admin Template" />
//                                         Adam Bradley
//                                     </td>
//                                     <td>36</td>
//                                     <td>
//                                         24/09/2002
//                                     </td>
//                                     <td>Diabetes</td>
//                                     <td>
//                                         <span className="badge bg-primary-subtle text-primary fs-6">Non Urgent</span>
//                                     </td>
//                                     <td>
//                                         <div className="d-inline-flex gap-1">
//                                             <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
//                                                 data-bs-target="#delRow">
//                                                 <span data-bs-toggle="tooltip" data-bs-placement="top"
//                                                     data-bs-title="Delete Patient Details">
//                                                     <i className="ri-delete-bin-line"></i>
//                                                 </span>
//                                             </button>
//                                             <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
//                                                 <i className="ri-edit-box-line"></i>
//                                             </a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>003</td>
//                                     <td>
//                                         <img src="assets/images/patient2.png" className="img-2x rounded-5 me-1"
//                                             alt="Doctors Admin Template" />
//                                         Merle Daniel
//                                     </td>
//                                     <td>82</td>
//                                     <td>
//                                         22/02/2007
//                                     </td>
//                                     <td>Chancroid</td>
//                                     <td>
//                                         <span className="badge bg-warning-subtle text-warning fs-6">Out Patient</span>
//                                     </td>
//                                     <td>
//                                         <div className="d-inline-flex gap-1">
//                                             <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
//                                                 data-bs-target="#delRow">
//                                                 <span data-bs-toggle="tooltip" data-bs-placement="top"
//                                                     data-bs-title="Delete Patient Details">
//                                                     <i className="ri-delete-bin-line"></i>
//                                                 </span>
//                                             </button>
//                                             <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
//                                                 <i className="ri-edit-box-line"></i>
//                                             </a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>004</td>
//                                     <td>
//                                         <img src="assets/images/patient3.png" className="img-2x rounded-5 me-1"
//                                             alt="Doctors Admin Template" />
//                                         Nicole Sellers
//                                     </td>
//                                     <td>29</td>
//                                     <td>
//                                         28/09/1996
//                                     </td>
//                                     <td>Pediatric</td>
//                                     <td>
//                                         <span className="badge bg-info-subtle text-info fs-6">Discharge</span>
//                                     </td>
//                                     <td>
//                                         <div className="d-inline-flex gap-1">
//                                             <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
//                                                 data-bs-target="#delRow">
//                                                 <span data-bs-toggle="tooltip" data-bs-placement="top"
//                                                     data-bs-title="Delete Patient Details">
//                                                     <i className="ri-delete-bin-line"></i>
//                                                 </span>
//                                             </button>
//                                             <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
//                                                 <i className="ri-edit-box-line"></i>
//                                             </a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>005</td>
//                                     <td>
//                                         <img src="assets/images/patient4.png" className="img-2x rounded-5 me-1"
//                                             alt="Doctors Admin Template" />
//                                         Kathy Atkinson
//                                     </td>
//                                     <td>58</td>
//                                     <td>
//                                         30/03/1989
//                                     </td>
//                                     <td>Alphaviruses</td>
//                                     <td>
//                                         <span className="badge bg-danger-subtle text-danger fs-6">Urgent</span>
//                                     </td>
//                                     <td>
//                                         <div className="d-inline-flex gap-1">
//                                             <button type="button" className="btn btn-hover btn-sm rounded-5" data-bs-toggle="modal"
//                                                 data-bs-target="#delRow">
//                                                 <span data-bs-toggle="tooltip" data-bs-placement="top"
//                                                     data-bs-title="Delete Patient Details">
//                                                     <i className="ri-delete-bin-line"></i>
//                                                 </span>
//                                             </button>
//                                             <a href="edit-patient.html" className="btn btn-hover btn-sm rounded-5"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit Patient Details">
//                                                 <i className="ri-edit-box-line"></i>
//                                             </a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     {/* Table ends */}

//                     {/* Modal Delete Row */}
//                     <div className="modal fade" id="delRow" tabIndex={-1} aria-labelledby="delRowLabel" aria-hidden="true">
//                         <div className="modal-dialog modal-sm">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h5 className="modal-title" id="delRowLabel">
//                                         Confirm
//                                     </h5>
//                                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     Are you sure you want to delete the patient details?
//                                 </div>
//                                 <div className="modal-footer">
//                                     <div className="d-flex justify-content-end gap-2">
//                                         <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal"
//                                             aria-label="Close">No</button>
//                                         <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
//                                             aria-label="Close">Yes</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* Row ends */}

// </div>
// {/* App body ends */ }