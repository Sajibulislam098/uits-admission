import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './MoreInfo.css'
const MoreInfo = () => {
    return (
        <div>
            <div className="mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-100" src="https://uits.edu.bd/wp-content/uploads/2021/09/Screenshot_40.png" alt="" />
                    </div>
                    <div className="col-md-6 pt-3">
                        <h1>Complete Registration for Vaccination Before Enrolling any Course</h1>
                        <div className="d-flex">
                            <div>
                                <img src="https://uits.edu.bd/wp-content/uploads/2021/09/Screenshot_45-removebg-preview.png" alt="" />

                                <h2>Shurokkha App</h2>
                                <p className="ps-5 pe-5 justify-content-center"><small>Please register for COVID-19 vaccine if you have NID</small></p>
                                <button className="btn btn-outline-primary">Registration Now</button>
                            </div>
                            <div>
                                <img src="https://uits.edu.bd/wp-content/uploads/2021/09/ugc-removebg-preview.png" alt="" />

                                <h2>UGC Website</h2>
                                <p className="ps-5 pe-5"><small>Students who don't have NID are suggested to register below</small></p>
                                <button className="btn btn-outline-primary">Registration Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admission container mb-5">
                <Row>
                    <Col xs={6} md={4}>
                        <img className="w-100 m-3 admission-img" src="https://uits.edu.bd/wp-content/uploads/2020/01/UITS-Students.jpg" alt="" /></Col>
                    <Col xs={12} md={8} className="p-4">
                        <h2 className="pb-2">ON-CAMPUS / ONLINE ADMISSION OPEN</h2>
                        <p>Admission Going on for the Autumn Semester 2021
                            <span className="fw-2">Get 50% Special Discount</span> on Admission Fee due to COVID-19 pandemic.
                            Seize the opportunity to create a bright future...</p>
                        <h4 className="pb-5">"You may delay, but time will not" — Benjamin Franklin.</h4>

                        <button className="btn btn-danger">Apply Now</button>
                    </Col>

                </Row></div>

        </div>
    );
};

export default MoreInfo;