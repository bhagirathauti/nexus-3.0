import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DepartmentInfo from './components/DepartmentInfo';
import EventsPage from './components/EventsPage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import TrainingAndPlacementPage from './components/TrainingAndPlacementPage';
import AdmissionsPage from './components/AdmissionsPage';
import ClubsPage from './components/ClubsPage';
import "./App.css"
import Gallery from './components/Gallery';
import BackToTop from './components/BackToTop';

function App() {
  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/departments" element={<DepartmentInfo/>}/>
          <Route path="/events" element={<EventsPage />} />
          <Route path='/placements' element={<TrainingAndPlacementPage/>}/>
          <Route path='/admission-info' element={<AdmissionsPage/>}/>
          <Route path='/clubs' element={<ClubsPage/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
      <BackToTop/>
    </Router>
  );
}

export default App;
