import React, { useState } from "react";

const BrainDump = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const colors = ["#c3e6cb", "#a8d5e2", "#d4c4fb"]; // pastel colors to rotate
  const [colorIndex, setColorIndex] = useState(0);

  // Handle input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Add a task to the Brain Dump
  const handleAddTask = (e) => {
    if (e.key === "Enter" && taskInput.trim()) {
      const newTask = {
        text: taskInput,
        color: colors[colorIndex % colors.length], // Assign a color in rotation
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      setColorIndex(colorIndex + 1); // Rotate to next color
    }
  };

  // Handle dragging from Brain Dump
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text", JSON.stringify(task)); // Pass the entire task object as JSON
  };

  return (
    <div className="brain-dump">
      <h2>Brain Dump</h2>
      <input
        type="text"
        placeholder="Enter a task and press Enter"
        value={taskInput}
        onChange={handleInputChange}
        onKeyDown={handleAddTask}
      />
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="task-item"
            draggable
            onDragStart={(e) => handleDragStart(e, task)} // Pass task object with color
            style={{ backgroundColor: task.color }} // Set background color
          >
            {task.text}
            <button
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {tasks.length >= 10 && <p>Task limit reached (10 tasks max)</p>}
    </div>
  );
};

export default BrainDump;
