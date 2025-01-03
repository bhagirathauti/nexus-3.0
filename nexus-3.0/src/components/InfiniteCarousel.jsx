import React, { useState, useEffect } from 'react';
import toprecruitersData from '../assets/toprecruiters.json';
import '../Stylesheets/InfiniteCarousel.css';

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % toprecruitersData.length);
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <h1>Top Recruiters</h1>
      <div className="carousel">
        <div className="carousel-items">
          {toprecruitersData.map((recruiter, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={recruiter.logo}
                alt={recruiter.company}
                className="carousel-logo"
              />
              <p>{recruiter.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
