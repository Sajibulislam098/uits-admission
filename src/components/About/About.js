import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1>About us</h1>
                <div className="d-flex justify-content-center  pt-5 pb-5">
                    <h5 className="justify-content-center align-middle">University of Information Technology and Sciences (UITS), the first IT-based private university in Bangladesh was founded on 7 August 2003 as a non-profit organization. INFORMATION SCIENCE AND TECHNOLOGY SOLUTION LTD. (ISTS), a concern of PHP group headed by Alhaj Sufi Mohamed Mizanur Rahman Chowdhury is the sponsor of UITS.</h5>
                    <img className="w-50" src="https://uits.edu.bd/wp-content/uploads/2021/04/uits-1.jpg" alt="" />
                </div>
                <div>
                    <h1>History</h1>
                    <p><small>
                        University of Information Technology and Sciences (UITS), the first IT-based private university in Bangladesh was founded on 7 August 2003 as a non-profit organization. INFORMATION SCIENCE AND TECHNOLOGY SOLUTION LTD. (ISTS), a concern of PHP group headed by Alhaj Sufi Mohamed Mizanur Rahman Chowdhury is the sponsor of UITS. The guiding spirit behind the endeavor is “divine blessings, mixed with hard work, backed by good intentions, make miracles.

                        The government was pleased with the UITS’s infrastructure and teaching program and allowed the university to run its activities. The order of the government was turned into action from 07 August 2003. And till then UITS conducts all its activities  as per its Vision, Mission, Goals, and Commitment to Quality Education with a view to shaping a complete, effective and efficient manpower.

                        UITS added the latest education system to its curriculum to developing the knowledge and skills of the students as well as integrated human values in the education system.  UITS is a science and technological knowledge-based center that provides marketable skills for younger generations who may be gainfully employed both national and international organizations.</small></p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;