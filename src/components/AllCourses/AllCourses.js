import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AllCourse.css'
const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./allCourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Header></Header>


            <div className="course">
                <div className="row">
                    {
                        courses.map((course) => (
                            <div className="col-md-3">
                                <div className="cart   p-2 m-2 position-relative">
                                    <img className=" img rounded-circle pb-2" src={course.img} alt="" />
                                    <div className=""> <h3>{course.name}</h3>
                                        <h5>Tution Fee: <small>{course.fee} <span className=" fs-4">&#2547;</span></small></h5>

                                        <p>Total Credit: {course.credit}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default AllCourses;