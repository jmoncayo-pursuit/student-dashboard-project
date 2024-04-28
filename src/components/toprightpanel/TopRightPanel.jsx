// TopRightPanel.jsx
import React, { useState } from "react";
import FilterUsers from "./FilterUsers";
import SearchUsers from "./SearchUsers";
import AdditionalDetails from "../additionaldetails/AdditionalDetails";
import './TopRightPanel.scss';

const TopRightPanel = ({ filterOptions, handleFilterChange, handleSearchInputChange, username, profileImageUrl, data }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const handleFilterSelect = (event) => {
    const selectedOption = event.target.value;
    setSelectedEmail(selectedOption);
    setShowDetailsPopup(true); // Open the popup when an email is selected
    handleFilterChange(event); // Call the original filter change handler
  };

  const handleCloseDetailsPopup = () => {
    setShowDetailsPopup(false);
  };

  return (
    <div className="top-right-panel">
      {/* Filter Users Dropdown */}
      <FilterUsers filterOptions={filterOptions} handleFilterChange={handleFilterSelect} />

      {/* Search Users */}
      <SearchUsers handleSearchInputChange={handleSearchInputChange} />

      {/* Welcome Back Text */}
      <span className="welcome-back-text">Welcome back, {username}!</span>

      {/* Login Profile (80px) */}
      <div className="login-profile-80px">
        <img src={profileImageUrl} alt="Profile" />
      </div>

      {/* Data Rendering */}
      {data && data.map(item => (
        <div key={item.id}>
          {/* Render item details here */}
        </div>
      ))}

      {/* Render AdditionalDetails component in a popup if email is selected */}
      {selectedEmail && showDetailsPopup && (
        <div className="student-details-popup">
          <button className="close-btn" onClick={handleCloseDetailsPopup}>X</button>
          <div className="additional-details">
            <AdditionalDetails student={data.find(student => student.username === selectedEmail)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRightPanel;
