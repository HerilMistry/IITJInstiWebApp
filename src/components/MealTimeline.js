import React from "react";
import "./MealTimeline.css";

const MealTimeline = () => {
  return (
    <div className="meal-timeline">
      <div className="meal-time">
        <span className="meal-name">☀️ Breakfast</span>
        <span className="time">7:30 AM - 10:00 AM</span>
      </div>
      <div className="meal-time">
        <span className="meal-name">🌞 Lunch</span>
        <span className="time">12:15 PM - 2:45 PM</span>
      </div>
      <div className="meal-time">
        <span className="meal-name">🌅 Snacks</span>
        <span className="time">5:30 PM - 6:30 PM</span>
      </div>
      <div className="meal-time">
        <span className="meal-name">🌙 Dinner</span>
        <span className="time">7:45 PM - 10:30 PM</span>
      </div>
    </div>
  );
};

export default MealTimeline;
