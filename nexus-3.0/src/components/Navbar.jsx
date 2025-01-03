import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          College Logo
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/admission-info" className="navbar-link">
          Admissions
        </Link>
        <Link to="/placements" className='navbar-link'>Placements</Link>
        <Link to="/departments" className='navbar-link'>Departments</Link>
        <Link to="/events" className="navbar-link">
          Events
        </Link>
        <Link to="/clubs" className="navbar-link">
          Clubs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
