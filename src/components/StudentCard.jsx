// StudentCard.jsx
// Component representing each student's card in the list, displaying their basic information like name, username, birthday, and profile photo.

import React from "react";

const StudentCard = ({ student }) => {
  const { names, username, dob, profilePhoto } = student;

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
            <button className="details-btn">More Details</button>
        </div>
    </div>
  );
};

export default StudentCard;
