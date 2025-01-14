import React from "react";
import "../Stylesheets/NoticeBoard.css";

const NoticeBoard = ({ isOpen, onClose }) => {
  const notices = [
    "New admissions for 2025 batch have started. Apply now!",
    "Placement drive for final year students is scheduled on 20th Jan.",
    "Cultural fest registrations are open till 15th Feb.",
    "Holiday announced on 26th Jan for Republic Day.",
    "Departmental seminars will begin from 5th Feb. Check your schedules.",
  ];

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Notice Board</h2>
        <ul className="notice-list">
          {notices.map((notice, index) => (
            <li key={index} className="notice-item">
              {notice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeBoard;
