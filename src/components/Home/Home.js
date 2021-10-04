
import Course from '../../images/Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoreInfo from '../MoreInfo/MoreInfo';
import "./Home.css"

const Home = () => {

    return (
        <div>
            <Header></Header>
            {/* Carousel Section */}
            <div className=" pb-5 ">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/216036014_5914481985261103_3183158885321495655_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHk2jF21RSEwhEZqasUvr4DPnDILUKkyhM-cMgtQqTKExLdbNU4XWZlvkQenk6-Zhy86Yvi61R1lO82H2bNq5xE&_nc_ohc=VWoHBIkPVYwAX-rtV9k&_nc_ht=scontent.fcgp1-1.fna&oh=0d5f8893eceec69011718517bc52428a&oe=61819EF0" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/p180x540/111314705_4205672032808782_5074869386837925555_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGuvYxCaN10tKpQ-3sKd6I5O26Q990KajQ7bpD33QpqNK_tHHrLgz333GGazq8vo0tlXzLuNO9OOd6lt1Yy1xBi&_nc_ohc=CNBsL_rQ6RYAX-_qgIZ&_nc_ht=scontent.fcgp1-1.fna&oh=3959a3a2b5f889e72e969e5e966701b7&oe=61818D21" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://uits.edu.bd/wp-content/uploads/2020/01/UITS-Students.jpg" className="d-block w-100" alt="..." />
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
            {/* Course Section */}
            <Course></Course>
            <MoreInfo></MoreInfo>

            <Footer></Footer>
        </div>
    );
};

export default Home;