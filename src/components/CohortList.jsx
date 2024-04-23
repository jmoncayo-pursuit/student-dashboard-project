// CohortList.jsx

import React from "react";

const CohortList = ({ cohorts, onSelectCohort, selectedCohort }) => {
  return (
    <div className="cohort-list">
      <ul>

        <li
          key="all"
          className={selectedCohort === null ? "active" : ""} 
          onClick={() => onSelectCohort("all")}
        >
          <span className="all-students-option">All Students</span>
        </li>

        {cohorts.sort().map((cohort, index) => {
          const humanReadableCohort = cohort.replace(/(\d+)/, ' $1');

          return (
            <li
              key={index}
              className={selectedCohort === cohort ? "selected" : ""} 
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