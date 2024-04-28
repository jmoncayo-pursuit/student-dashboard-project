import React from "react";

const FilterUsers = ({ filterOptions, handleFilterChange }) => {

  return (
    
    <select className="filter-users-dropdown" onChange={handleFilterChange}>

      <option disabled defaultValue>Filter Users</option>

      {filterOptions && filterOptions.length > 0 && (

        filterOptions.map((option, index) => (

          <option key={index} value={option.value}>{option.label}</option>
        ))
      )}
    </select>
  );
};

export default FilterUsers;
