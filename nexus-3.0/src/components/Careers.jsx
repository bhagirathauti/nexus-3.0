import React from 'react';
import JobCard from './JobCard';
import '../Stylesheets/Careers.css';
import jobsData from '../assets/careers.json'; 
import { Toaster } from 'react-hot-toast';
const Careers = () => {
  return (
    <div className="careers-container">
      <h1 className="careers-title">Careers at Our College</h1>
      <div className="job-list">
        {jobsData.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            description={job.description}
            applicants={job.applicants}
            openings={job.openings}
          />
        ))}
      </div>
      <Toaster/>
    </div>
  );
};

export default Careers;
