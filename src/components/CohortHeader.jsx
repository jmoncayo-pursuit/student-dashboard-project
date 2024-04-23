// CohortHeader.jsx
// Component to show the header indicating the currently selected cohort and the total count of students.

import React from "react";

const CohortHeader = ({ selectedCohort, totalStudents }) => {

  const humanReadableCohort = selectedCohort.replace(/(\d+)/, ' $1');

  return (
    <div className="cohort-header">
      <h2>{humanReadableCohort}</h2>
      All Students <span className="total-students-text">({totalStudents})</span>
    </div>
  );
};

export default CohortHeader;
