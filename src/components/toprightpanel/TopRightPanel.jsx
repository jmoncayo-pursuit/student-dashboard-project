// TopRightPanel.jsx

import React, { useState } from "react";
import FilterUsers from "./FilterUsers";
import SearchUsers from "./SearchUsers";
import AdditionalDetails from "../additionaldetails/AdditionalDetails";
import './TopRightPanel.scss';

const TopRightPanel = ({ filterOptions, handleFilterChange, handleSearchInputChange, data }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const handleFilterSelect = (event) => {
    const selectedOption = event.target.value;
    setSelectedEmail(selectedOption);
    setShowDetailsPopup(true); 
    handleFilterChange(event); 
  };

  const handleCloseDetailsPopup = () => {
    setShowDetailsPopup(false);
  };

  return (
    <div className="top-right-panel">

      <FilterUsers filterOptions={filterOptions} handleFilterChange={handleFilterSelect} />

      <SearchUsers handleSearchInputChange={handleSearchInputChange} />

      <span className="welcome-back-text">Welcome Back</span>

      <div className="login-profile-80px">
        <div className="circle"></div> 
      </div>

      {/* Data Rendering */}
      {data && data.map(item => (
        <div key={item.id}>
        </div>
      ))}

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