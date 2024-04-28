// SearchUsers.jsx

import React from "react";

const SearchUsers = ({ handleSearchInputChange }) => {
  return (
    <input
      type="text"
      className="search-users"
      placeholder="Search students..."
      onChange={handleSearchInputChange}
    />
  );
};

export default SearchUsers;
