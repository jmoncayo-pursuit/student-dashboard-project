// AdditionalDetails.jsx

import React from "react";
import './AdditionalDetails.scss';

const AdditionalDetails = ({ student }) => {
  if (!student) return null;
  
  const { names, username, dob, profilePhoto, certifications, codewars, notes, cohort } = student;

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
          <div className="profile-photo-container">
          <img src={profilePhoto} alt={names.preferredName} className="profile-photo" />
          </div>
          <div className="student-details">
            <h2>{names.preferredName} {names.middleName} {names.surname}</h2>
            <p>{username}</p>
            <p>Birthday {dob}</p>
          </div>
        </div>
      </div>

      <div className="additional-details">
        <h3 className="addtional-details-header">Additional Details:</h3>
        <div className="details-container">
          <div className="detail">
            
            <div className="detail-data">
            <h3 >Codewars:</h3>
              <p>Total: {codewars.current.total}</p>
              <p>Last Week: {codewars.current.lastWeek}</p>
              <p>Goal Total: {codewars.goal.total}</p>
              <p>Last Week Goal: {codewars.goal.lastWeek}</p>
            </div>
          </div>
          <div className="detail">
          <div className="detail-data">
            <h3>Certifications:</h3>
            <p>Resume: {certifications.resume.toString()}</p>
            <p>LinkedIn: {certifications.linkedin.toString()}</p>
            <p>GitHub: {certifications.github.toString()}</p>
            <p>Mock Interview: {certifications.mockInterview.toString()}</p>
            </div>
          </div>
          <div className="detail">
          <div className="detail-data">
            <h3>Cohort:</h3>
            <p>Cohort Code: {cohort.cohortCode}</p>
            <p>Start Date: {cohort.cohortStartDate}</p>
            <p>Assignments Score: {cohort.scores.assignments}</p>
            <p>Projects Score: {cohort.scores.projects}</p>
            <p>Assessments Score: {cohort.scores.assessments}</p>
            </div>
          </div>
          <div className="detail">
          <div className="detail-data">
            <h3>Notes:</h3>
            {notes.map((note, index) => (
              <div key={index}>
                <p>{note.commenter}: {note.comment}</p>
              </div>              
            ))}</div>
          </div>          
          <div className="detail">
          <div className="detail-data">
            <h3>On-track Status:</h3> 
            <p>
              {isOnTrack ? 'On Track' : 'Off Track'}
            </p> 
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdditionalDetails;
