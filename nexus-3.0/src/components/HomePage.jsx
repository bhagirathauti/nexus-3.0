import React from 'react';
import '../Stylesheets/HomePage.css';
import placementsData from '../assets/placements.json';
import InfiniteCarousel from './InfiniteCarousel';

const HomePage = () => {
    return (
        <div className="homepage">
            <section className="college-info">
                <h1>Welcome to BITS, Sindri</h1>
                <p>Providing excellence in education and innovation since 1980. BITS Sindri has established itself as one of the leading institutions in the region, consistently providing students with a platform to achieve their academic and career goals. Located in the heart of Sindri, our college boasts a vibrant campus equipped with modern infrastructure and facilities, designed to foster creativity, research, and innovation.</p>
                <p>We are committed to creating a learning environment where students are inspired to pursue their dreams and develop a strong sense of responsibility, leadership, and global awareness. Our institution is known for its rigorous academic programs, world-class faculty, and excellent industry linkages that prepare students for successful careers.</p>
            </section>
            <section className="about">
                <h1>About Us</h1>
                <p>Our college is dedicated to nurturing talent and fostering growth through world-class education. We offer a wide range of undergraduate and postgraduate programs designed to equip our students with the skills they need to excel in their careers and make meaningful contributions to society. Our commitment to providing a holistic education is reflected in our well-rounded curriculum, which blends academic rigor with practical exposure through internships, projects, and industry collaborations.</p>
                <p>Our college is more than just a place for academic excellence. It is a community that encourages students to explore diverse interests, engage in extracurricular activities, and embrace leadership roles. With a track record of excellent placements and strong ties with top global and national companies, we are proud to see our students become successful professionals, entrepreneurs, and leaders in various fields.</p>
                <ul>
                    <li><strong>Number of Students:</strong> 5000+ students from across the country, with a diverse mix of backgrounds, skills, and interests.</li>
                    <li><strong>AICTE Approved:</strong> Yes, we are accredited by the All India Council for Technical Education (AICTE), ensuring that our programs meet the highest educational standards.</li>
                    <li><strong>Number of Hostels:</strong> 5 modern hostels offering state-of-the-art facilities, ensuring safety, comfort, and a conducive environment for students’ academic growth.</li>
                    <li><strong>Years of Teaching:</strong> Over 40 years of providing top-tier education and shaping the future of young minds.</li>
                    <li><strong>College History:</strong> Established in 1980, we have grown into a premier educational institution with a rich legacy of success and academic excellence.</li>
                    <li><strong>Research and Innovation:</strong> Our focus on research and innovation is central to our mission. We provide students with opportunities to engage in cutting-edge research and work on projects that solve real-world problems.</li>
                    <li><strong>Global Exposure:</strong> Through international exchange programs and collaborations with top universities worldwide, we offer our students valuable global exposure to broaden their perspectives and experiences.</li>
                </ul>
            </section>
            <section className="chairman-message">
                <h1>Message from the Chairman</h1>
                <p>"At BITS Sindri, we believe in empowering students to explore their passions and create a brighter future. As we enter the fourth decade of excellence, we continue to adapt to the changing landscape of education, ensuring that our students are prepared to face global challenges. We are proud of our legacy and excited about the future as we strive to provide the best possible learning experience to our students."</p>
                <p>"Our college’s vision is to build an ecosystem that fosters holistic development—academic excellence, leadership, creativity, and social responsibility. Our students are not only equipped with technical skills but are also encouraged to become critical thinkers, problem-solvers, and responsible citizens."</p>
                <p>"As we move forward, we are committed to continuing our journey of transformation. By keeping pace with industry trends and innovations, we ensure that our students are not only ready for the present but are also prepared for the future. I invite you to join us at BITS Sindri, where every student’s success is our priority, and together, we will continue shaping the leaders of tomorrow."</p>
                <p><strong>Dr. John Smith</strong></p>
                <p>Chairman, BITS Sindri</p>
            </section>
            <section className="placementss">
                <h1>Top Placements</h1>
                <div className="placement-cardss">
                    {placementsData.length > 0 ? (
                        placementsData.map((student, index) => (
                            <div key={index} className="placement-cardd">
                                <img src={student.image} alt={student.name} className="student-image" />
                                <div className="student-info">
                                    <h3>{student.name}</h3>
                                    <p>Department: {student.department}</p>
                                    <p>Package: {student.package}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No placements available.</p>
                    )}
                </div>
            </section>
            <InfiniteCarousel />
        </div>
    );
};

export default HomePage;
