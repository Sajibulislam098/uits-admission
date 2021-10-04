import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row p-2 ">
                    <div className="col-md-3">
                        <div className="logo-img">
                            <img className="w-75 " src="https://uits.edu.bd/wp-content/uploads/2019/11/UITS-MOBILE-01.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="menu-container  ">
                            <ul className=" d-flex align-items-end justify-content-end ">
                                <Link to="/home" className=" items ms-5 fs-4">
                                    <li>Home</li>
                                </Link>
                                <Link to="/allCourse" className=" items ms-5 fs-4 ">
                                    <li>Service</li>
                                </Link>
                                <Link to="/about" className=" items ms-5 fs-4">
                                    <li>About</li>
                                </Link>
                                <Link to="contact" className=" items ms-5 fs-4">
                                    <li>Contact us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;