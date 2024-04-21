// OnTrackIndicator.jsx
//  Component to indicate whether a student is "On Track" or "Off Track" based on certain criteria.

import React from "react";

const OnTrackIndicator = ({ student }) => {
  const { certifications, codewars } = student;
  const isOnTrack = certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview && codewars.current.total > 600;

  return (
    <div className={`on-track-indicator ${isOnTrack ? 'on-track' : 'off-track'}`}>
      {isOnTrack ? "On Track" : "Off Track"}
    </div>
  );
};

export default OnTrackIndicator;
