// Importing React and useState for managing state
import React, { useState } from "react";

const TimeSlots = () => {
  // Updated array of time slots with 30-minute intervals
  const timeSlots = [
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];

  // State to keep track of tasks assigned to each time slot
  const [tasksInSlots, setTasksInSlots] = useState(
    Array(timeSlots.length).fill(null)
  );

  // Function to handle assigning a task to a time slot (placeholder for drag-and-drop logic)
  const handleTaskDrop = (task, index) => {
    const updatedSlots = [...tasksInSlots];
    updatedSlots[index] = task;
    setTasksInSlots(updatedSlots);
  };

  return (
    // Main container for the Time Slots
    <div className="time-slots">
      <h2>Time Slots</h2>

      {/* Rendering each time slot */}
      <ul>
        {timeSlots.map((time, index) => (
          <li key={index} className="time-slot">
            <strong>{time}</strong> {/* Displaying the time */}
            {/* Displaying the task if assigned to the time slot */}
            <div className="task-slot">
              {tasksInSlots[index] ? tasksInSlots[index] : "No task"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlots;
