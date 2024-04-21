// CohortHeader.jsx
// Component to show the header indicating the currently selected cohort and the total count of students.

import React from "react";

const CohortHeader = ({ selectedCohort, totalStudents }) => {
  return (
    <div className="cohort-header">
      <h2>{selectedCohort}</h2>
      All Students <span className="total-students-text">({totalStudents})</span>
    </div>
  );
};

export default CohortHeader;
