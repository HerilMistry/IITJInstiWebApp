import React, { useState } from "react";
import "./MessMenu.css";

const days = ["TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "MONDAY"];

const MessMenu = () => {
  const [activeDay, setActiveDay] = useState("TUESDAY");

  return (
    <div className="mess-container">
      <header className="mess-header">
        <h1>Mess Menu <span role="img" aria-label="chef">👨‍🍳</span></h1>
        <a href="#" className="report-link">Report Mess Issue →</a>
      </header>

      <nav className="day-selector">
        {days.map((day) => (
          <span 
            key={day} 
            className={activeDay === day ? "active" : ""} 
            onClick={() => setActiveDay(day)}
          >
            {day}
          </span>
        ))}
      </nav>

      <div className="progress-bar"></div>

      <div className="filter-options">
        <span className="filter veg">Veg ✖</span>
        <span className="filter non-veg">Non-Veg ✖</span>
        <span className="filter jain">Jain ✖</span>
      </div>

      <button className="paid-extras">View Paid Extras →</button>

      <div className="day-content">
        <h2>{activeDay} Menu</h2>
        <p>Menu items will be displayed here</p>
      </div>
    </div>
  );
};

export default MessMenu;
