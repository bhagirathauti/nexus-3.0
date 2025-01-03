import React from 'react';
import toprecruitersData from '../assets/toprecruiters.json';
import '../Stylesheets/CompanyGrid.css';

const CompanyGrid = () => {
  return (
    <div className="company-grid-container">
      <h1>Top Recruiters</h1>
      <div className="company-grid">
        {toprecruitersData.map((recruiter, index) => (
          <div key={index} className="company-card">
            <img
              src={recruiter.logo}
              alt={recruiter.company}
              className="company-logo"
            />
            <p className="company-name">{recruiter.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyGrid;
