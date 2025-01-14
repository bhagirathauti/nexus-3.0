import React from 'react';
import '../Stylesheets/JobCard.css';
import toast from "react-hot-toast"

const JobCard = ({ title, description, applicants, openings }) => {
    const btnclick = () =>{
        toast.success("Applied Successfully!!!")
    }
  return (
    <div className="job-card">
      <h3 className="job-title">{title}</h3>
      <p className="job-description">{description}</p>
      <p className="job-openings">Openings: {openings}</p>
      <p className="job-applicants">Applicants: {applicants}</p>
      <button className="apply-button" onClick={btnclick}>Apply Now</button>
    </div>
  );
};

export default JobCard;
