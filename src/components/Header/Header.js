import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
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
                                <NavLink activeClassName={activeStyle} to="/home" className="hover hover-1 items ms-5 fs-4">
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/allCourse" className=" items ms-5 fs-4 ">
                                    <li>Service</li>
                                </NavLink>
                                <NavLink to="/about" className=" items ms-5 fs-4">
                                    <li>About</li>
                                </NavLink>
                                <NavLink to="contact" className=" items ms-5 fs-4">
                                    <li>Contact us</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;