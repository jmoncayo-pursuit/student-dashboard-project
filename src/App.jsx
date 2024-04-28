// App.jsx
import React, { useState } from "react";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";
import CohortHeader from "./components/CohortHeader";
import SortByDateDropdown from "./components/sortbydatedropdown/SortByDateDropdown";
import data from "./data/data.json";
import "./app.scss";
import TopRightPanel from "./components/toprightpanel/TopRightPanel";

const App = () => {
  const [selectedCohort, setSelectedCohort] = useState("");
  const [students, setStudents] = useState(data);

  const getCohorts = () => {
    const uniqueCohorts = [];
    data.forEach((student) => {
      if (!uniqueCohorts.includes(student.cohort.cohortCode)) {
        uniqueCohorts.push(student.cohort.cohortCode);
      }
    });
    return uniqueCohorts;
  };

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

  // Extract email addresses for filter options
  const filterOptions = data.map((student) => ({
    value: student.username,
    label: student.username,
  }));

  // Handle filter change function
  const handleFilterChange = (event) => {
    // Implement logic to handle filter change
    console.log("Selected option:", event.target.value);
  };

  return (
    <div className="app">
      <aside className="aside">
        <div className="title">
          <h2>Pursuit</h2>
        </div>
        <CohortList
          cohorts={getCohorts()}
          onSelectCohort={handleSelectCohort}
          selectedCohort={selectedCohort}
        />
      </aside>
      {/* Pass filter options and handler function to TopRightPanel */}
      <TopRightPanel
        filterOptions={filterOptions}
        handleFilterChange={handleFilterChange}
        handleSearchInputChange={() => {}}
        username="Jean"
        profileImageUrl="profile.jpg"
        data={students}
      />

      <main className="main-content">
        <div className="upper-main">
          <div className="all-students">
            <CohortHeader
              selectedCohort={selectedCohort}
              totalStudents={students.length}
            />
          </div>
          <div className="sort-by-date-dropdown">
            <SortByDateDropdown
              students={students}
              onSortChange={setStudents}
            />
          </div>
        </div>
        <div className="lower-main">
          <StudentList students={students} />
        </div>
      </main>
    </div>
  );
};

export default App;
