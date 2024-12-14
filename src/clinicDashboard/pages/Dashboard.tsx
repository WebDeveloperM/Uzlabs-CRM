import Layout from '@core/bootComponents/Layout'

import LoaderTimer from '@core/bootComponents/LoaderTimer'

export default function Dashboard() {

    return (
        <Layout>

            <LoaderTimer time={3000} />

            {/*  Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-6 col-sm-12">
                    <div className="card mb-3 bg-4">
                        <div className="card-body mh-190">

                            {/*  Row starts */}
                            <div className="row gx-3">
                                <div className="col-sm-9">
                                    <div className="text-primary">
                                        <h4>Dr. Laura Jaden</h4>
                                        <h6 className="fw-normal">Dentist, BDS, BChD</h6>
                                        <div>
                                            Increased patients by <span className="fw-bold">90</span> in the last Seven days.
                                        </div>
                                        <a href="book-appointment.html" className="btn btn-primary mt-3">
                                            Book Appointment
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*  Row ends */}

                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-body mh-190">
                            <h5 className="card-title text-primary mb-4">Available Treatments</h5>
                            <div className="d-flex justify-content-center gap-4 flex-wrap">
                                <a href="javascript:void(0);" className="text-center">
                                    <div className="icon-box xl rounded-3 bg-secondary-subtle mb-1">
                                        <img src="assets/images/icons/liver.svg" className="img-3x" alt="Medical Admin"/>
                                    </div>
                                    Cardiology
                                </a>
                                <a href="javascript:void(0);" className="text-center">
                                    <div className="icon-box xl rounded-3 bg-secondary-subtle mb-1">
                                        <img src="assets/images/icons/bone.svg" className="img-3x" alt="Medical Admin"/>
                                    </div>
                                    Orthopedic
                                </a>
                                <a href="javascript:void(0);" className="text-center">
                                    <div className="icon-box xl rounded-3 bg-secondary-subtle mb-1">
                                        <img src="assets/images/icons/kidney.svg" className="img-3x" alt="Medical Admin"/>
                                    </div>
                                    Neurology
                                </a>
                                <a href="javascript:void(0);" className="text-center">
                                    <div className="icon-box xl rounded-3 bg-secondary-subtle mb-1">
                                        <img src="assets/images/icons/emergency.svg" className="img-3x" alt="Medical Admin"/>
                                    </div>
                                    Dentist
                                </a>
                                <a href="javascript:void(0);" className="text-center">
                                    <div className="icon-box xl rounded-3 bg-secondary-subtle mb-1">
                                        <img src="assets/images/icons/stomach.svg" className="img-3x" alt="Medical Admin"/>
                                    </div>
                                    Pediatrics
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Row ends */}

            {/*  Row starts */}
            <div className="row gx-3">
                <div className="col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Income</h5>
                        </div>
                        <div className="card-body">
                            <div className="overflow-hidden">
                                <div id="income" className="chart-height-xl"></div>
                            </div>
                            <div className="my-3 text-center">
                                <span className="badge bg-primary">22%</span> income has increase that last year.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Row ends */}

            {/*  Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-4 col-sm-6">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Appontments</h5>
                        </div>
                        <div className="card-body">

                            <div className="scroll300">
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex flex-column p-3 border rounded-2">
                                        <div className="d-flex align-items-center flex-row">
                                            <img src="assets/images/patient5.png" className="img-4x rounded-5 me-3" alt="Medical Dashboard"/>
                                                <div>
                                                    <h6 className="mb-1">Emmitt Macias</h6>
                                                    <p className="mb-1 small">Last Appointment 20 Sept 2024</p>
                                                    <span className="badge bg-primary-subtle text-primary">Patient ID : P0039</span>
                                                    <p className="mb-3 mt-1">Need an appointment urgent.</p>
                                                    <div className="d-flex gap-2">
                                                        <a href="appointments-list.html" className="btn btn-primary btn-sm">
                                                            Approve
                                                        </a>
                                                        <button type="button" className="btn btn-outline-secondary btn-sm">Decline</button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column p-3 border rounded-2">
                                        <div className="d-flex align-items-center flex-row mb-3">
                                            <img src="assets/images/patient1.png" className="img-4x rounded-5 me-3" alt="Medical Dashboard"/>
                                                <div>
                                                    <h6 className="mb-1">Kathy Atkinson</h6>
                                                    <p className="mb-1 small">Last Appointment 26 Sept 2024</p>
                                                    <span className="badge bg-primary-subtle text-primary">Patient ID : P0063</span>
                                                    <p className="mb-3 mt-1">Need an appointment urgent.</p>
                                                    <div className="d-flex gap-2">
                                                        <a href="appointments-list.html" className="btn btn-primary btn-sm">
                                                            Approve
                                                        </a>
                                                        <button type="button" className="btn btn-outline-secondary btn-sm">Decline</button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column p-3 border rounded-2">
                                        <div className="d-flex align-items-center flex-row mb-3">
                                            <img src="assets/images/patient2.png" className="img-4x rounded-5 me-3" alt="Medical Dashboard"/>
                                                <div>
                                                    <h6 className="mb-1">Merle Daniel</h6>
                                                    <p className="mb-1 small">Last Appointment 15 Mar 2024</p>
                                                    <span className="badge bg-primary-subtle text-primary">Patient ID : P0086</span>
                                                    <p className="mb-3 mt-1">Need an appointment urgent.</p>
                                                    <div className="d-flex gap-2">
                                                        <a href="appointments-list.html" className="btn btn-primary btn-sm">
                                                            Approve
                                                        </a>
                                                        <button type="button" className="btn btn-outline-secondary btn-sm">Decline</button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Activity</h5>
                        </div>
                        <div className="card-body">
                            <div className="scroll300">
                                <div className="activity-feed px-2 pt-2">
                                    <div className="feed-item">
                                        <span className="feed-date pb-1" data-bs-toggle="tooltip" data-bs-title="30 mins ago">30
                                            Mins Ago</span>
                                        <div className="mb-1">
                                            <a href="#">Dr. Kermit Shah</a> - uploaded a prescription.
                                        </div>
                                        <div className="mb-1">Patient Name - <a href="#" className="text-primary">Jody Fowler</a></div>
                                    </div>
                                    <div className="feed-item">
                                        <span className="feed-date pb-1" data-bs-toggle="tooltip" data-bs-title="55 Mins Ago">One
                                            Hour Ago</span>
                                        <div className="mb-1">
                                            <a href="#">Dr. Tameka Mccoy</a> - Task marked as complete.
                                        </div>
                                        <div className="mb-1">Patient Name - <a href="#" className="text-primary">Brenda Kemp</a></div>
                                    </div>
                                    <div className="feed-item">
                                        <span className="feed-date pb-1" data-bs-toggle="tooltip" data-bs-title="2 Hours 35 Mins Ago">3
                                            Hours Ago</span>
                                        <div className="mb-1">
                                            <a href="#">Dr. Vito Rivers</a> - Task marked as complete.
                                        </div>
                                        <div className="mb-1">Patient Name - <a href="#" className="text-primary">Amelia Moses</a></div>
                                    </div>
                                    <div className="feed-item">
                                        <span className="feed-date pb-1" data-bs-toggle="tooltip" data-bs-title="4 Hours 48 Mins Ago">5
                                            Hours Ago</span>
                                        <div className="mb-1">
                                            <a href="#">Dr. Kerry Mason</a> - Task marked as complete.
                                        </div>
                                        <div className="mb-1">Patient Name - <a href="#" className="text-primary">Lula Sullivan</a></div>
                                    </div>
                                    <div className="feed-item">
                                        <span className="feed-date pb-1" data-bs-toggle="tooltip" data-bs-title="One Day Ago">One
                                            Day Ago</span>
                                        <div className="mb-1">
                                            <a href="#">Dr. Alicia Jacobs</a> - Task marked as complete.
                                        </div>
                                        <div className="mb-1">Patient Name - <a href="#" className="text-primary">Earle Ochoa</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Insurance</h5>
                        </div>
                        <div className="card-body">
                            <div className="scroll300 auto-align-graph">
                                <div className="overflow-hidden">
                                    <div id="claims"></div>
                                </div>
                                <div className="mt-2 text-center">
                                    Anytime you make a claim whether partial or total of <span
                                        className="text-primary fw-semibold">$10000</span> base cover, it gets 100% restored
                                    for any subsequent claims in the same year.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Row ends */}

            {/*  Row starts */}
            <div className="row gx-3">
                <div className="col-xxl-6 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Patients</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-info bg-light lh-1">
                                20% higher than last year.
                            </div>
                            <div className="overflow-hidden">
                                <div id="patients"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Appointments</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-info bg-light lh-1">
                                33% higher than last year.
                            </div>
                            <div className="overflow-hidden">
                                <div id="appointments"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Row ends */}

            {/*  Row starts */}
            <div className="row gx-3">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Clinic Earnings</h5>
                        </div>
                        <div className="card-body pt-0">

                            {/*  Row start */}
                            <div className="row g-3">
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="border rounded-2 d-flex align-items-center flex-row p-2">
                                        <div className="me-2">
                                            <div id="sparkline1"></div>
                                        </div>
                                        <div className="m-0">
                                            <div className="d-flex align-items-center lh-1">
                                                <h4 className="m-0 fw-bold">$4900</h4>
                                                <div className="ms-2 text-primary d-flex">
                                                    <small>20%</small> <i className="ri-arrow-right-up-line ms-1 fw-bold"></i>
                                                </div>
                                            </div>
                                            <small>Online Consultation</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="border rounded-2 d-flex align-items-center flex-row p-2">
                                        <div className="me-2">
                                            <div id="sparkline2"></div>
                                        </div>
                                        <div className="m-0">
                                            <div className="d-flex align-items-center lh-1">
                                                <div className="fs-4 fw-bold">$750</div>
                                                <div className="ms-2 text-warning d-flex">
                                                    <small>26%</small> <i className="ri-arrow-right-down-line ms-1 fw-bold"></i>
                                                </div>
                                            </div>
                                            <small className="text-dark">Overall Purchases</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="border rounded-2 d-flex align-items-center flex-row p-2">
                                        <div className="me-2">
                                            <div id="sparkline3"></div>
                                        </div>
                                        <div className="m-0">
                                            <div className="d-flex align-items-center lh-1">
                                                <div className="fs-4 fw-bold">$560</div>
                                                <div className="ms-2 text-primary d-flex">
                                                    <small>28%</small> <i className="ri-arrow-right-up-line ms-1 fw-bold"></i>
                                                </div>
                                            </div>
                                            <small className="text-dark">Pending Invoices</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="border rounded-2 d-flex align-items-center flex-row p-2">
                                        <div className="me-2">
                                            <div id="sparkline4"></div>
                                        </div>
                                        <div className="m-0">
                                            <div className="d-flex align-items-center lh-1">
                                                <div className="fs-4 fw-bold">$390</div>
                                                <div className="ms-2 text-primary d-flex">
                                                    <small>30%</small> <i className="ri-arrow-right-up-line ms-1 fw-bold"></i>
                                                </div>
                                            </div>
                                            <small className="text-dark">Monthly Billing</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  Row ends */}

                        </div>
                    </div>
                </div>
            </div>
            {/*  Row ends */}


        </Layout>
    )
}


