// FilterUsers.jsx
import React from "react";

const FilterUsers = ({ filterOptions, handleFilterChange }) => {
  return (
    <select className="filter-users-dropdown" onChange={handleFilterChange}>
      <option disabled defaultValue>Select an option</option> {/* Add a default disabled option */}
      {filterOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default FilterUsers;
