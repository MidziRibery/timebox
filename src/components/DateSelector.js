// Importing React and the useState hook to manage the state of the day and date inputs.
import React, { useState } from "react";

const DateSelector = () => {
  // Using useState to store and manage the selected day and date values.
  const [day, setDay] = useState(""); // Default value for the day is an empty string.
  const [date, setDate] = useState(""); // Default value for the date is an empty string.

  return (
    <div className="date-selector">
      {/* Label and dropdown for selecting the day of the week */}
      <label>Day:</label>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Select Day</option> {/* Default placeholder option */}
        {/* Options for each day of the week */}
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      {/* Label and input field for selecting the date */}
      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
