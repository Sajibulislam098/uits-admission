import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>

            {/* About part */}

            <div className="container pt-5 pb-5">
                <h1 className="border-bottom border-danger w-25 pb-2">About us</h1>
                <div className="d-flex justify-content-center  pt-5 pb-5 align-middle">
                    <h5 className="p-5">University of Information Technology and Sciences (UITS), the first IT-based private university in Bangladesh was founded on 7 August 2003 as a non-profit organization. INFORMATION SCIENCE AND TECHNOLOGY SOLUTION LTD. (ISTS), a concern of PHP group headed by Alhaj Sufi Mohamed Mizanur Rahman Chowdhury is the sponsor of UITS.</h5>
                    <img className="w-50" src="https://uits.edu.bd/wp-content/uploads/2021/04/uits-1.jpg" alt="" />
                </div>
                <div className="pb-5">
                    <h1 className="border-bottom border-danger w-25 pb-2">History</h1>
                    <p><small>
                        University of Information Technology and Sciences (UITS), the first IT-based private university in Bangladesh was founded on 7 August 2003 as a non-profit organization. INFORMATION SCIENCE AND TECHNOLOGY SOLUTION LTD. (ISTS), a concern of PHP group headed by Alhaj Sufi Mohamed Mizanur Rahman Chowdhury is the sponsor of UITS. The guiding spirit behind the endeavor is “divine blessings, mixed with hard work, backed by good intentions, make miracles.

                        The government was pleased with the UITS’s infrastructure and teaching program and allowed the university to run its activities. The order of the government was turned into action from 07 August 2003. And till then UITS conducts all its activities  as per its Vision, Mission, Goals, and Commitment to Quality Education with a view to shaping a complete, effective and efficient manpower.

                        UITS added the latest education system to its curriculum to developing the knowledge and skills of the students as well as integrated human values in the education system.  UITS is a science and technological knowledge-based center that provides marketable skills for younger generations who may be gainfully employed both national and international organizations.</small></p>
                </div>

                {/* Archivement part  */}
                <div>
                    <h1 className="border-bottom border-danger w-50 pb-2"     >Archives of Our Establishment</h1>
                    <ul className="text-start">
                        <li>On August 7, 2003 the University began its journey with 3 Schools and the main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students.</li>
                        <li>On March 10, 2004 the Bachelor of Business Administration the First under graduate program of UITS was started under Business Studies Department.</li>
                        <li>On August 22, 2004 the Bachelor of Arts in English and Master of Computer Applications was started under Department of English and Computer Science & Engineering.</li>
                        <li>On October 18, 2004 the International Master of Business Administration was started under Business Studies Department</li>
                        <li>On September 13, 2005 the programme Bachelor of Science in Computer Science & Engineering was started under Department of Computer Science & Engineering.</li>
                        <li>On October 9, 2005 the programme Bachelor of Science in Electronics & Communication Engineering and the Master of Science in Telecommunications were started under the Department of Electronics & Communication Engineering.</li>
                        <li>On November 20, 2005 the programme Bachelor of Laws was started under the Department of Law.</li>
                        <li>On March 22, 2006 the programme Master of Laws was started under the Department of Law.Master of Arts in English was started under the Department of English and Bachelor of Science in Information Technology was started under Department of Information Technology.</li>
                        <li>On May 3, 2006 the programme Master of Science in Telecommunication was started under the Department of Electronic & Communication Engineering.</li>
                        <li>On July 27, 2008 the programme Bachelor of Laws (2 years) was started under the Department of Law.</li>
                        <li>On December 21, 2008 the programme Bachelor of Science in Electrical & Electronic Engineering was started under the Department of Electrical & Electronic Engineering.</li>
                        <li>On May 7, 2012 the programme Bachelor of Science in Civil Engineering was started under the Department of Civil Engineering.</li>
                    </ul>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default About;