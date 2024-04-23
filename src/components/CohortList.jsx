// CohortList.jsx

import React from "react";

const CohortList = ({ cohorts, onSelectCohort, selectedCohort }) => {
  return (
    <div className="cohort-list">
      <ul>

        <li
          key="all"
          className={selectedCohort === null ? "active" : ""} // Highlight "All Students"
          onClick={() => onSelectCohort("all")}
        >
          <span className="all-students-option">All Students</span>
        </li>

        {cohorts.sort().map((cohort, index) => {
          // Add a space before the year to make it more human-readable
          const humanReadableCohort = cohort.replace(/(\d+)/, ' $1');

          return (
            <li
              key={index}
              className={selectedCohort === cohort ? "selected" : ""} // Highlight selected cohort
              onClick={() => onSelectCohort(cohort)}
            >
              {humanReadableCohort}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortList;
