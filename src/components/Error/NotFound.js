import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./NotFound.css"
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="notFound">
                <h1>404</h1>
                <h1>Page Not Found</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;