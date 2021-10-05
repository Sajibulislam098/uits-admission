import { Carousel } from 'bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoreInfo from '../MoreInfo/MoreInfo';
import "./Home.css"

const Home = () => {

    return (
        <div>
            <Header></Header>

            {/* Carousel Section */}


            <div className=" pb-5  ">

                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/126942670_4820662134643099_8592656744240711535_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFCN11tBxI_7Ms5GSzXlHyMdPFNFt07mSx08U0W3TuZLA9czCSYnZg33E9pu_JDyMA_MOYWmGNmfenwrwrHMpQc&_nc_ohc=ny2rdiBLGukAX-15OSr&_nc_ht=scontent.fcgp1-1.fna&oh=5693c128ca424457417d0542cbec6b8c&oe=6180A3AE" className="d-block w-100 cHeight" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/216036014_5914481985261103_3183158885321495655_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHk2jF21RSEwhEZqasUvr4DPnDILUKkyhM-cMgtQqTKExLdbNU4XWZlvkQenk6-Zhy86Yvi61R1lO82H2bNq5xE&_nc_ohc=VWoHBIkPVYwAX_6s5Y_&_nc_ht=scontent.fcgp1-1.fna&oh=fbf6afe8fcd6da7af1a852ac31260733&oe=61819EF0" className="d-block w-100 cHeight" alt="..." />

                        </div>
                        <div className="carousel-item">
                            <img src="https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/101052333_592374094747075_7988416154383155200_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGI_TJyNDJr-OpSxNTx9N-Ao1-PtzoEz0WjX4-3OgTPRb_2DaUZhZQYunTQedFyNWCsMBCgNpeQirrxIGiq0vDX&_nc_ohc=Ak7x-qiemzYAX__9IX1&_nc_ht=scontent.fcgp1-1.fna&oh=0f6d4fdf0043ee2aa2eb09bf8457600c&oe=6181DA5A" className="d-block w-100 cHeight" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* some  information are added in MoreInfro component*/}
            <MoreInfo></MoreInfo>

            {/* Course Section */}
            <Course></Course>

            {/* Footer Section */}
            <Footer></Footer>
        </div>
    );
};

export default Home;