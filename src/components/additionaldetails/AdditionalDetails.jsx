// AdditionalDetails.jsx 
// Component to show additional information about a student, including percentages for scores and certification statuses.

import './AdditionalDetails.scss';
import React from "react";

const AdditionalDetails = ({ student }) => {
  if (!student) return null;
  
  const { names, username, dob, profilePhoto, certifications, codewars } = student;

  const isOnTrack = (
    certifications &&
    certifications.resume &&
    certifications.linkedin &&
    certifications.github &&
    certifications.mockInterview &&
    codewars &&
    codewars.current &&
    codewars.current.total > 600
  );

  return (
    
   
<div className='pop-out-window'>    
      <div className="student-info pop-out">
        <img src={profilePhoto} alt={names.preferredName} className="profile-photo" />
        <h2>{names.preferredName} {names.middleName} {names.surname}</h2>
      </div>
      <div className="email-bday">
        <p>{username}</p>
        Birthday {dob}
      </div>
       <div className="additional-details">
      <h2>Additional Details</h2>
      <p>Codewars Score: {codewars.current.total}</p>
      <p>On-track Status: {isOnTrack ? 'On Track' : 'Off Track'}</p>
    </div>
    </div>
  );
};

export default AdditionalDetails;
