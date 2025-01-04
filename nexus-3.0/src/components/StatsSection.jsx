import React from 'react';
import '../Stylesheets/StatsSection.css'; 

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat-card">
        <i className="icon fa fa-user-graduate"></i>
        <h3>Students Graduated</h3>
        <p>Over 25,000 students successfully graduated.</p>
      </div>
      <div className="stat-card">
        <i className="icon fa fa-book-open"></i>
        <h3>Courses Offered</h3>
        <p>More than 50 diverse courses across disciplines.</p>
      </div>
      <div className="stat-card">
        <i className="icon fa fa-users"></i>
        <h3>Alumni Network</h3>
        <p>A strong network of over 50,000 alumni worldwide.</p>
      </div>
      <div className="stat-card">
        <i className="icon fa fa-building"></i>
        <h3>Companies Visited</h3>
        <p>150+ top companies recruit our students annually.</p>
      </div>
      <div className="stat-card">
        <i className="icon fa fa-calendar-alt"></i>
        <h3>Years of Legacy</h3>
        <p>Celebrating 40+ years of excellence in education.</p>
      </div>
    </section>
  );
};

export default StatsSection;
