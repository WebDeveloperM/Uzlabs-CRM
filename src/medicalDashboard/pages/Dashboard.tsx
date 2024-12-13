import Layout from '@core/bootComponents/Layout'
import LoaderTimer from '@core/bootComponents/LoaderTimer'
// import { useDeleteClinicData } from '@medical-dashboard/hooks/deleteClinic'
import { useGetClinicData } from '@medical-dashboard/hooks/getClinic'
import { isAuthenticated, isCheckClinic } from '@users/utils/auth'
import { useEffect, useState } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { Modal, Button } from 'react-bootstrap';

export default function Dashboard() {
    const clinicId = localStorage.getItem("clinicId")
    const clinicData = useGetClinicData(clinicId ? clinicId as string : "0")
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const { mutateAsync } = useDeleteClinicData(clinicId as string)


    // const handleDelete = async () => {
    //     const response = await mutateAsync()
    //     if (response.success && response.message == "Clinic deleted successfully.") {
    //         toast.success("Shifoxona ma'lumotlari o'chirildi")
    //         localStorage.removeItem("clinicId")
    //     }
    //     setIsModalOpen(false)
    //     // navigate("/clinica")
    // }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1); // Sahifa o'zgarganda keyni yangilash
    }, [location]);



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

            <Button variant="danger" onClick={handleShow}>
                <i className="ri-delete-bin-line new-modalbek"></i>ocshi
            </Button>

            <Modal show={show} onHide={handleClose} style={{ zIndex: 2050 }}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>sdfsdfsdfdsfdsfdsfdsfdsfs</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*  Row starts */}
            <div className="row gx-3" key={key}>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title">Mening shifoxonam</h5>
                        </div>
                        <div className="card-body pt-0">
                            {/*  Table starts */}
                            <div className="table-responsive">
                                <table id="scrollVertical" className="table truncate m-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nomi</th>
                                            <th>Manzil</th>
                                            <th className=''>Telefon raqam</th>
                                            <th className=''>Elektron pochta</th>
                                            <th className=''>Shifoxona turi</th>
                                            <th className=''>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='flex items-center gap-2'>
                                                <img src="assets/images/doctor.png" className="img-2x rounded-5 me-1"
                                                    alt="Medical Admin Template" />
                                                {clinicData.data?.data.clinicName}
                                            </td>
                                            <td> {clinicData.data?.data.legalAddress}</td>
                                            <td className="">{clinicData.data?.data.phoneNumber}</td>
                                            <td className="">{clinicData.data?.data.email}</td>
                                            <td className="">{clinicData.data?.data.clinicType}</td>

                                            <td>
                                                <div className="d-inline-flex gap-1 ">

                                                    <button type="button" className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    >
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


                            <div className="modal fade bg-white z-[50]" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body ">
                                            sdfsdfsdfdsfdsfdsfdsfdsfs
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            {/*  Row ends */}



        </Layout >
    )
}


