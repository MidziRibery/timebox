import React, { useState } from "react";

const PriorityList = () => {
  const [priorities, setPriorities] = useState([]); // State to manage top 3 priorities

  // Handle dropping a task into the priority list
  const handleDrop = (e) => {
    e.preventDefault();
    const taskData = e.dataTransfer.getData("text");
    const task = JSON.parse(taskData);

    if (priorities.length < 3) {
      setPriorities([...priorities, task]); // Add task if <3 priorities
    } else {
      alert("You can only have 3 top priorities for the day!");
    }
  };

  // Allow drop functionality
  const handleDragOver = (e) => e.preventDefault();

  // Remove a priority task
  const removeTask = (index) =>
    setPriorities(priorities.filter((_, i) => i !== index));

  return (
    <div
      className="priority-list"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>Top Priorities</h2>
      {/* Display each priority */}
      {priorities.map((task, index) => (
        <div
          key={index}
          className="priority-item"
          style={{ backgroundColor: task.color }}
        >
          {task.text}
          <button onClick={() => removeTask(index)}>X</button>
        </div>
      ))}
      {priorities.length < 3 && (
        <p>Top 3 Important Tasks? Drag and Drop Here! (max 3)</p>
      )}
    </div>
  );
};

export default PriorityList;
