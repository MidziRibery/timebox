import React, { useState } from "react";

const BrainDump = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const colors = [
    "#c3e6cb",
    "#a8d5e2",
    "#d4c4fb",
    "#fff9b1",
    "#ffd1b3",
    "#e2c6f2",
  ];
  // pastel colors to rotate
  const [colorIndex, setColorIndex] = useState(0);

  // Track which tasks are struck-through
  const [strikeTasks, setStrikeTasks] = useState([]);

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
      setStrikeTasks([...strikeTasks, false]); // Initialize the strike-through state for this task
      setTaskInput("");
      setColorIndex(colorIndex + 1); // Rotate to next color
    }
  };

  // Toggle strike-through with the checkbox
  const handleCheckboxChange = (index) => {
    const newStrikeTasks = [...strikeTasks];
    newStrikeTasks[index] = !newStrikeTasks[index]; // Toggle strike-through
    setStrikeTasks(newStrikeTasks);
  };

  // Remove task function
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setStrikeTasks(strikeTasks.filter((_, i) => i !== index));
  };

  // Handle dragging from Brain Dump
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text", JSON.stringify(task)); // Pass the entire task object as JSON
  };

  return (
    <div className="brain-dump">
      <h2>Brain Dump</h2>

      {/* Only show instructions when there are no tasks */}
      {tasks.length === 0 && (
        <>
          <h3>Feeling overwhelmed? Just dump your worries here!</h3>
          <h3>Hold to Drag and Drop!</h3>
        </>
      )}

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
            style={{
              backgroundColor: task.color,
              display: "flex",
              alignItems: "center", // Ensures alignment of checkbox and text
            }}
          >
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              checked={strikeTasks[index]} // Bind checkbox to strike state
              style={{ width: "20px", height: "20px", marginRight: "10px" }} // Larger checkbox
            />
            <span
              style={{
                fontSize: "18px",
                textDecoration: strikeTasks[index] ? "line-through" : "none", // Apply strike only to text
                flexGrow: 1,
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: "10px" }}
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
