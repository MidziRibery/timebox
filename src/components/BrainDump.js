import React, { useState } from "react";

const BrainDump = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Add a task to the Brain Dump
  const handleAddTask = (e) => {
    if (e.key === "Enter" && taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Handle dragging from Brain Dump
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text", task);
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
            onDragStart={(e) => handleDragStart(e, task)}
          >
            {task}
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
