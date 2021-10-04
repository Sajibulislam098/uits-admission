import React from 'react';

const SingleCourse = (props) => {
    const { name, img, fee, credit } = props.course

    return (
        <div>
            <div className="col-md-3">
                <div className="card h-100">
                    <img className="w-100 rounded" src={img} alt="" />
                    <h2>{name}</h2>
                    <h5>Tution Fee: <small>{fee} <span className=" fs-4">&#2547;</span></small></h5>

                    <p>Total Credit: {credit}</p>  </div>
            </div>
        </div>
    );
};

export default SingleCourse;