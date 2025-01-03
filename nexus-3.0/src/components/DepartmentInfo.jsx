import React, { useState } from 'react';
import departmentData from '../assets/departments.json';
import '../Stylesheets/DepartmentInfo.css';

const DepartmentInfo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredDepartments = departmentData.filter(department =>
    department.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="department-info">
      <h2>Department Information</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Departments"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="department-cards-container">
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((department, index) => (
            <div key={index} className="department-card">
              <div className="department-card-header">
                <h3>{department.name} Department</h3>
              </div>
              <section className="hod-message">
                <h4>Message from the HOD</h4>
                <p>{department.hod} shares the vision and mission of the department, aiming for excellence in education and research.</p>
                <p>{department.messageFromHod}</p>
              </section>
              <section className="professors">
                <h4>Our Professors</h4>
                <ul>
                  {department.professors.map((professor, idx) => (
                    <li key={idx}>
                      <strong>{professor.name}</strong>: {professor.subject}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))
        ) : (
          <p>No departments found.</p>
        )}
      </div>
    </div>
  );
};

export default DepartmentInfo;
