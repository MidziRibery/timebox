// src/components/PriorityList.js

import React, { useState } from "react";

const PriorityList = () => {
  // State to manage the priority tasks, initially an empty array.
  const [priorities, setPriorities] = useState([]);

  // Function to handle dropping a new task in the priority list.
  const handleDrop = (e) => {
    e.preventDefault();
    const task = e.dataTransfer.getData("text"); // Retrieve the task text being dragged
    // Only allow adding tasks if there are less than 3 priorities.
    if (priorities.length < 3) {
      setPriorities([...priorities, task]); // Add the new task to the priorities.
    } else {
      alert("You can only have 3 top priorities for the day!"); // Alert user if priorities > 3.
    }
  };

  // Function to handle drag over event (allows dropping).
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior to allow drop
  };

  // Function to remove a task when needed.
  const removeTask = (index) => {
    const newPriorities = priorities.filter((_, i) => i !== index); // Filter out the task at the given index.
    setPriorities(newPriorities); // Update the priority list.
  };

  return (
    // Main container for the priority list
    <div
      className="priority-list"
      onDrop={handleDrop} // Handles the drop event
      onDragOver={handleDragOver} // Allows drag over the component
    >
      <h2>Top Priorities</h2> {/* Heading for the top priorities section */}
      {/* Render each priority in its own box */}
      {priorities.map((task, index) => (
        <div key={index} className="priority-item">
          {task}
          <button onClick={() => removeTask(index)}>X</button>{" "}
          {/* Button to remove a task */}
        </div>
      ))}
      {/* Message to display when there is space for more priorities */}
      {priorities.length < 3 && <p>Drag tasks here (max 3)</p>}
    </div>
  );
};

export default PriorityList;
