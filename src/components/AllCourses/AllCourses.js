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

            {/* shown all Courses */}

            <div className="course container">
                <h1 className="p-4">Choose Your Favourite Subject </h1>
                <div className="row">
                    {
                        courses.map((course) => (

                            <div className="col-md-4">
                                <div className="cart d-flex flex-column  p-2 m-2 ">
                                    <img className=" img pb-3" src={course.img} alt="" />
                                    <div className=""> <h3>{course.name}</h3>
                                        <h5>Tution Fee: <small>{course.fee} <span className=" fs-4">&#2547;</span></small></h5>

                                        <p>Total Credit: {course.credit}</p></div>
                                    <div className="mt-auto mb-2">
                                        <button className="btn btn-warning  ">Details</button>
                                    </div>
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