import React, { useState } from 'react';
import eventsData from '../assets/events.json';
import toast,{ Toaster } from 'react-hot-toast';
import '../Stylesheets/EventsPage.css';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredEvents = eventsData.filter(event =>
    event.EventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRegister = (eventName) => {
    toast.success(`Thank you for registering for ${eventName}!`);
  };

  return (
    <div className="events-page">
      <h2>Upcoming Events</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="events-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img
                src={event.EventImage}
                alt={`${event.EventName} banner`}
                className="event-image"
              />
              <div className="event-details">
                <h2>{event.EventName}</h2>
                <p><strong>Event Date:</strong> {event.EventDate}</p>
                <p><strong>Registration Opens:</strong> {event.RegistrationStarts}</p>
                <p><strong>Registration Deadline:</strong> {event.RegistrationEnds}</p>
                <p><strong>Ticket Price:</strong> ${event.TicketPrice}</p>
              </div>
              <button
                className="register-button"
                onClick={() => handleRegister(event.EventName)}
              >
                Register
              </button>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default EventsPage;
