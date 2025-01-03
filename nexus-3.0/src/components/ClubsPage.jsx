import React, { useState } from 'react';
import clubData from '../assets/clubs.json';
import '../Stylesheets/ClubsPage.css';

const ClubsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredClubs = clubData.filter(club =>
    club.club_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="clubs-page">
      <h2>Popular Student Clubs</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Clubs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="club-cards-container">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club, index) => (
            <div key={index} className="club-card">
              <div className="club-card-header">
                <img src={club.placeholderImage} alt={club.club_name} className="club-logo" />
                <h3>{club.name}</h3>
              </div>
              <section className="faculty-message">
                <h4>Message from Faculty Coordinator</h4>
                <p>{club.short_message_from_faculty_coordinator}</p>
                <p><strong>Faculty Coordinator: </strong>{club.faculty_coordinator_name}</p>
              </section>
              <section className="club-president">
                <h4>Club President</h4>
                <p><strong>Name: </strong>{club.club_president_name}</p>
                <p><strong>Email: </strong>{club.club_email}</p>
              </section>
            </div>
          ))
        ) : (
          <p>No clubs found.</p>
        )}
      </div>
    </div>
  );
};

export default ClubsPage;
