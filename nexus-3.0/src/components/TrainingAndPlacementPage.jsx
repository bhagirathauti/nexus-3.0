import React, { useState } from 'react';
import '../Stylesheets/TrainingAndPlacementPage.css';
import placementData from '../assets/allplacements.json';
import CompanyGrid from './CompanyGrid';

const TrainingAndPlacementPage = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const years = [...new Set(placementData.map((student) => student.Year))]
        .sort((a, b) => a - b);
    const filteredData = selectedYear
        ? placementData.filter((student) => student.Year === parseInt(selectedYear))
        : placementData.sort((a, b) => b.Year - a.Year);
    const calculateStatistics = (data) => {
        const numberOfStudents = data.length;
        const totalPackage = data.reduce((sum, student) => sum + student.Package, 0);
        const averagePackage = numberOfStudents > 0 ? totalPackage / numberOfStudents : 0;
        return { numberOfStudents, averagePackage };
    };

    const { numberOfStudents, averagePackage } = calculateStatistics(filteredData);

    return (
        <div className="training-placement-page">
            <section className="placement-officer-message">
                <h2>Message from the Placement Officer's Desk</h2>
                <p>
                    "At GIT, we believe in empowering our students to excel not only academically but also in their professional careers. Our dedicated Placement Cell works tirelessly to bridge the gap between students and the corporate world by offering specialized training programs, career counseling, resume-building workshops, and mock interviews. We aim to ensure that our students are well-prepared to face the competitive job market. We collaborate with leading national and international companies to bring exciting career opportunities to our students, focusing on placements that align with their aspirations. Through a personalized approach, we ensure that every student is supported throughout the process, from guidance to career placement. We also organize industry visits and real-world business scenario workshops to help students gain practical knowledge. The success of our placement initiatives is a direct result of our team's dedication, and I personally ensure that each student gets the best chance to secure a top-tier role. I encourage all students to take full advantage of the resources available to them. Together, we will continue to shape the leaders of tomorrow. Feel free to contact me for further assistance."
                </p>
                <h3><strong>Mr. Ravi Kumar</strong></h3>
                <h3>Placement Officer, BITS Sindri</h3>
                <h3>Contact: <a href="tel:+919876543210">+91 98765 43210</a></h3>
            </section>
            <section className="top-recruiters">
                <CompanyGrid/>
            </section>
            <section className="placement-data">
                <h2>Year-wise Placement Data</h2>
                <div className="year-selector">
                    <label htmlFor="year-select">Select Year:</label>
                    <select
                        id="year-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="">All Years</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="statistics">
                    {selectedYear && (
                        <div className="statistics-info">
                            <p>Number of Students Placed: {numberOfStudents}</p>
                            <p>Average Package: ₹{averagePackage.toFixed(2)} LPA</p>
                        </div>
                    )}
                </div>
                <div className="placement-cards">
                    {filteredData.length > 0 ? (
                        <div className="placement-card">
                            <h3>{selectedYear ? `Placement Data - ${selectedYear}` : 'All Years Placement Data'}</h3>
                            <div className="cards-container">
                                {filteredData.map((student, index) => (
                                    <div key={index} className="student-card">
                                        <h4>{student.Name}</h4>
                                        <p>Company: {student.Company}</p>
                                        <p>Package: ₹{student.Package} LPA</p>
                                        {!selectedYear && <p>Year: {student.Year}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>No placement data available for the selected year.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TrainingAndPlacementPage;
