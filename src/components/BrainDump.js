// Importing React and the useState hook
import React, { useState } from "react";

const BrainDump = () => {
  // State to manage the list of tasks and the input value
  const [tasks, setTasks] = useState([]); // Array of tasks
  const [taskInput, setTaskInput] = useState(""); // Current input value

  // Function to handle input changes (updates the taskInput state as user types)
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Function to handle adding a task to the list when the user hits "Enter"
  const handleAddTask = (e) => {
    // Check if the "Enter" key is pressed and if the input is not empty
    if (e.key === "Enter" && taskInput.trim()) {
      // Add the new task to the tasks array
      setTasks([...tasks, taskInput]);

      // Clear the input field after adding the task
      setTaskInput("");
    }
  };

  // Function to handle removing a task from the list
  const handleRemoveTask = (index) => {
    // Create a new array with the task at the specified index removed
    const updatedTasks = tasks.filter((_, i) => i !== index);

    // Update the tasks state with the new array
    setTasks(updatedTasks);
  };

  return (
    // Main container for the Brain Dump section
    <div className="brain-dump">
      {/* Heading for the brain dump */}
      <h2>Brain Dump</h2>

      {/* Input field for typing tasks */}
      <input
        type="text"
        placeholder="Enter a task and press Enter"
        value={taskInput} // Binds the input value to the state
        onChange={handleInputChange} // Updates the state on typing
        onKeyDown={handleAddTask} // Adds the task when Enter is pressed
      />

      {/* List of tasks entered */}
      <ul>
        {/* Mapping over the tasks array to display each task */}
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {/* Displaying the task */}
            {task}

            {/* Button to remove the task */}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Message when the task limit of 10 is reached */}
      {tasks.length >= 10 && <p>Task limit reached (10 tasks max)</p>}
    </div>
  );
};

export default BrainDump;
