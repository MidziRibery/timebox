// src/components/TimeSlots.js

import React, { useState } from "react";

const TimeSlots = () => {
  // Time slot hours
  const hours = [
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  // State to keep track of tasks assigned to each :00 and :30 time slot
  const [tasksInSlots00, setTasksInSlots00] = useState(
    Array(hours.length).fill(null)
  );
  const [tasksInSlots30, setTasksInSlots30] = useState(
    Array(hours.length).fill(null)
  );

  return (
    <div className="time-slots-container">
      {/* Header row for :00 and :30 */}
      <div className="time-slots-header">
        <div className="hour-column-header"></div> {/* Empty for alignment */}
        <div className="time-slot-header">:00</div>
        <div className="time-slot-header">:30</div>
      </div>

      {/* Time slots rendered side by side with hour column */}
      {hours.map((hour, index) => (
        <div className="time-slot-row" key={index}>
          <div className="hour-column">
            <strong>{hour}</strong> {/* Only display the hour here */}
          </div>
          <div className="time-slot">
            {/* :00 Time Slot */}
            <div className="task-slot">
              {tasksInSlots00[index] ? tasksInSlots00[index] : "No task"}
            </div>
          </div>
          <div className="time-slot">
            {/* :30 Time Slot */}
            <div className="task-slot">
              {tasksInSlots30[index] ? tasksInSlots30[index] : "No task"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
