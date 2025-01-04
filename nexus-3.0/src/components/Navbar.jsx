import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          GIT, Pune
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'expanded' : ''}`}>
        <Link to="/admission-info" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Admissions
        </Link>
        <Link to="/placements" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Placements
        </Link>
        <Link to="/departments" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Departments
        </Link>
        <Link to="/events" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Events
        </Link>
        <Link to="/clubs" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Clubs
        </Link>
        <Link to="/gallery" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
