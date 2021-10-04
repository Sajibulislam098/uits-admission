import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import SingleCourse from '../../components/SingleCourse/SingleCourse';

const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (




        <div>
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
            <Link to="/allCourse"><button className="btn btn-success">More Course</button></Link>
        </div>

    );
};

export default Course;