// App.jsx

import React, { useState } from "react";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";
import CohortHeader from "./components/CohortHeader";
import OneOnOneSection from "./components/OneOnOneSection";
import AdditionalDetails from "./components/additionaldetails/AdditionalDetails";
import data from "./data/data.json";
import "./app.scss";
import SortByDateDropdown from "./components/sortbydatedropdown/SortByDateDropdown";

const App = () => {
  const [selectedCohort, setSelectedCohort] = useState("");
  const [students, setStudents] = useState(data);

  const handleSelectCohort = (cohort) => {
    if (cohort === "all") {
      setStudents(data);
      setSelectedCohort(null);
    } else {
      
      const filteredStudents = data.filter(
        (student) => student.cohort.cohortCode === cohort
      );
      setStudents(filteredStudents);
      setSelectedCohort(cohort);
    }
  };

  return (
    <div className="app">
      <aside className="aside">
        <div className="title">
          <h2>Pursuit</h2>
        </div>
        <CohortList
          cohorts={getCohorts(data)}
          onSelectCohort={handleSelectCohort}
          selectedCohort={selectedCohort} 
        />
      </aside>
      <div className="top-right-panel">
        {/* filter-users-dropdown search-users welcome-back-text login-profile-80px */}
      </div>
      <main className="main-content">
        <div className="upper-main">
          <div className="all-students">
            <CohortHeader
              selectedCohort={selectedCohort}
              totalStudents={students.length}
            />
          </div>
          <div className="sort-by-date-dropdown">
          <SortByDateDropdown students={students} onSortChange={setStudents} />

          </div>
        </div>
        <div className="lower-main">
          <StudentList students={students} />
        </div>
      </main>
    </div>
  );
};

const getCohorts = (data) => {
  const uniqueCohorts = [];
  data.forEach(student => {
    if (!uniqueCohorts.includes(student.cohort.cohortCode)) {
      uniqueCohorts.push(student.cohort.cohortCode);
    }
  });
  return uniqueCohorts;
};

export default App;