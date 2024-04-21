// SortByDateDropdown.jsx
import "./SortByDateDropdown.scss"

import React, { useState } from "react";

const SortByDateDropdown = ({ students, onSortChange }) => {
  const [sortBy, setSortBy] = useState("none");

  const handleSortChange = (event) => {
    if (Array.isArray(students)) {
      setSortBy(event.target.value);
      if (event.target.value === "asc") {
        const sortedStudents = [...students].sort((a, b) => new Date(a.dob) - new Date(b.dob));
        onSortChange(sortedStudents);
      } else if (event.target.value === "desc") {
        const sortedStudents = [...students].sort((a, b) => new Date(b.dob) - new Date(a.dob));
        onSortChange(sortedStudents);
      } else {
        // No sorting needed for other options
      }
    }
  };

  return (
    <div className="sort-by-date-dropdown-div">
      <select className="sort-by-date-dropdown" value={sortBy} onChange={handleSortChange}>
        <option className="sort-by-date-dropdown" value="none">Sort By date</option>
        <option className="sort-by-date-dropdown" value="asc">Date (Ascending)</option>
        <option className="sort-by-date-dropdown" value="desc">Date (Descending)</option>
        {/* Remove the "highestScore" option here */}
      </select>
    </div>
  );
};

export default SortByDateDropdown;
