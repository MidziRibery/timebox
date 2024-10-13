import React, { useState } from "react";

const DateSelector = () => {
  const [day, setDay] = useState(""); // Day selector state
  const [date, setDate] = useState(""); // Date selector state

  return (
    <div className="date-selector">
      {/* Dropdown for selecting the day */}
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Select Day</option>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((dayOption) => (
          <option key={dayOption} value={dayOption}>
            {dayOption}
          </option>
        ))}
      </select>

      {/* Date picker for selecting the date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
