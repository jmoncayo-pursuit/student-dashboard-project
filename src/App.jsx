// App.jsx
import React, { useState } from "react";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";
import CohortHeader from "./components/CohortHeader";
import SortByDateDropdown from "./components/sortbydatedropdown/SortByDateDropdown";
import data from "./data/data.json";
import "./app.scss";
import TopRightPanel from "./components/toprightpanel/TopRightPanel";
import SearchUsers from "./components//toprightpanel/SearchUsers";

const App = () => {
  const [selectedCohort, setSelectedCohort] = useState("");
  const [students, setStudents] = useState(data);
  const [searchTerm, setSearchTerm] = useState(""); 

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

  const filterOptions = data.map((student) => ({
    value: student.username,
    label: student.username,
  }));

  const handleFilterChange = (event) => {
    console.log("Selected option:", event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredStudents = data.filter((student) =>
      student.username.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setStudents(filteredStudents);
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
      <TopRightPanel
        filterOptions={filterOptions}
        handleFilterChange={handleFilterChange}
        handleSearchInputChange={handleSearchInputChange} 
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