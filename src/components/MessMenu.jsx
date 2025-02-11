import React from "react";
import "./MessMenu.css";

const MessMenu = () => {
  return (
    <div className="mess-container">
      <header className="mess-header">
        <h1>Mess Menu <span role="img" aria-label="chef">👨‍🍳</span></h1>
        <a href="#" className="report-link">Report Mess Issue →</a>
      </header>

      <nav className="day-selector">
        <span className="active">TUESDAY</span>
        <span>WEDNESDAY</span>
        <span>THURSDAY</span>
        <span>FRIDAY</span>
        <span>SATURDAY</span>
        <span>SUNDAY</span>
        <span>MONDAY</span>
      </nav>

      <div className="progress-bar"></div>

      <div className="filter-options">
        <span className="filter veg">Veg ✖</span>
        <span className="filter non-veg">Non-Veg ✖</span>
        <span className="filter jain">Jain ✖</span>
      </div>

      <button className="paid-extras">View Paid Extras →</button>
    </div>
  );
};

export default MessMenu;
