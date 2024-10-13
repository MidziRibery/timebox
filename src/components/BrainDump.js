import React, { useState } from "react";

const BrainDump = () => {
  const [tasks, setTasks] = useState([]); // Task list state
  const [taskInput, setTaskInput] = useState(""); // Current input state
  const [colorIndex, setColorIndex] = useState(0); // Color index for rotating colors
  const [strikeTasks, setStrikeTasks] = useState([]); // To track completed tasks

  // Pastel colors for tasks
  const colors = [
    "#c3e6cb",
    "#a8d5e2",
    "#d4c4fb",
    "#fff9b1",
    "#ffd1b3",
    "#e2c6f2",
  ];

  // Handle input change for task input field
  const handleInputChange = (e) => setTaskInput(e.target.value);

  // Add a new task when Enter key is pressed
  const handleAddTask = (e) => {
    if (e.key === "Enter" && taskInput.trim()) {
      const newTask = {
        text: taskInput,
        color: colors[colorIndex % colors.length],
      };
      setTasks([...tasks, newTask]);
      setStrikeTasks([...strikeTasks, false]);
      setTaskInput(""); // Clear input field
      setColorIndex(colorIndex + 1); // Rotate to the next color
    }
  };

  // Toggle strike-through for completed tasks
  const handleCheckboxChange = (index) => {
    const updatedStrikeTasks = [...strikeTasks];
    updatedStrikeTasks[index] = !updatedStrikeTasks[index];
    setStrikeTasks(updatedStrikeTasks);
  };

  // Remove a task from the list
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setStrikeTasks(strikeTasks.filter((_, i) => i !== index));
  };

  // Handle dragging from Brain Dump (for drag-and-drop)
  const handleDragStart = (e, task) => {
    if ("ontouchstart" in window) e.preventDefault(); // Prevents drag issue on mobile
    e.dataTransfer.setData("text", JSON.stringify(task));
  };

  return (
    <div className="brain-dump">
      <h2>Brain Dump</h2>

      {/* Show instructions if no tasks are present */}
      {tasks.length === 0 && (
        <>
          <h3>Feeling overwhelmed? Just dump your worries here!</h3>
          <h3>Hold to Drag and Drop!</h3>
        </>
      )}

      {/* Input for new tasks */}
      <input
        type="text"
        placeholder="Enter a task and press Enter"
        value={taskInput}
        onChange={handleInputChange}
        onKeyDown={handleAddTask}
      />

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="task-item"
            draggable
            onDragStart={(e) => handleDragStart(e, task)} // Enable dragging of task
            style={{ backgroundColor: task.color }} // Set background color
          >
            {/* Checkbox to strike-through completed tasks */}
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              checked={strikeTasks[index]}
            />
            <span className={strikeTasks[index] ? "task-completed" : ""}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>X</button>{" "}
            {/* Remove task */}
          </li>
        ))}
      </ul>
      {tasks.length >= 10 && <p>Task limit reached (10 tasks max)</p>}
    </div>
  );
};

export default BrainDump;
