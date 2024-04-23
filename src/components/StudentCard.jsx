// StudentCard.jsx
// Component representing each student's card in the list, displaying their basic information like name, username, birthday, and profile photo.

import React, { useState } from "react";
import AdditionalDetails from "./additionaldetails/AdditionalDetails";
import OneOnOneSection from "./OneOnOneSection";

const StudentCard = ({ student }) => {
  const { names, username, dob, profilePhoto } = student;
  const [showDetails, setShowDetails] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      document.body.classList.add('student-details-popup-open');
    } else {
      document.body.classList.remove('student-details-popup-open');
    }
  };

  const handleShowNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className="student-card">
        <div className="student-info">
            <img src={profilePhoto} alt={names.preferredName} className="profile-photo" />
            <h2>{names.preferredName} {names.middleName} {names.surname}</h2>
        </div>
        <div className="email-bday">
            <p>{username}</p>
            Birthday {dob}
        </div>
        <div >
            <button className="details-btn" onClick={handleShowDetails}>More Details</button>
        </div>
        {showDetails && (
          <div className="student-details-popup">
            <button className="close-btn" onClick={handleShowDetails}>X</button>
            <div className="student-info-popup">
              {/* Student info goes here */}
            </div>
            {!showNotes ? (
              <div className="scores-codewars-certifications">
                <AdditionalDetails student={student} />
                <button className="notes-btn" onClick={handleShowNotes}>Notes</button>
              </div>
            ) : (
              <OneOnOneSection student={student} />
            )}
          </div>
        )}
    </div>
  );
};

export default StudentCard;
