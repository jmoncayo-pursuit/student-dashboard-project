import React from "react";
import './AdditionalDetails.scss';

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
      <div className="student-box">
        <div className="student-info">
          <img src={profilePhoto} alt={names.preferredName} className="profile-photo" />
          <div className="student-details">
            <h2>{names.preferredName} {names.middleName} {names.surname}</h2>
            <p>{username}</p>
            <p>Birthday {dob}</p>
          </div>
        </div>
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
