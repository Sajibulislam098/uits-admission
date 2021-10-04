import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div >

                <img className="w-100 cover-full" src="https://i.stack.imgur.com/V1fUu.png" alt="" />
                <h1><Link to="/"><button className="btn btn-danger">Go Back to Home Page</button></Link></h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;