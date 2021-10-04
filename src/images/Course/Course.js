import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (




        <div className=" container">
            <h1 className=" text-start border text-light p-4">Best Courses we Provide</h1>
            <div className="row ">

                {
                    courses.map((course) => (
                        <div className="col-md-3">
                            <div className="carts   p-2 m-2 position-relative">
                                <img className=" img rounded-circle pb-2" src={course.img} alt="" />
                                <div className=""> <h3>{course.name}</h3>
                                    <h5>Tution Fee: <small>{course.fee} <span className=" fs-4">&#2547;</span></small></h5>

                                    <p>Total Credit: {course.credit}</p></div>
                                <button className="btn btn-warning">Details</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="border text-end mt-3 rounded p-2">
                <Link className="" to="/allCourse"><button className=" btn btn-warning ">More Course</button></Link>
            </div>
        </div>

    );
};

export default Course;