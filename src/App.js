// Importing React and the necessary components.
import React from "react";
import "./App.css"; // Importing the CSS file for styling.
import DateSelector from "./components/DateSelector"; // Importing the DateSelector component.

function App() {
  return (
    <div className="App">
      {/* Title of the application */}
      <h1>Timebox App</h1>

      {/* Rendering the DateSelector component to allow day and date selection */}
      <DateSelector />

      {/* Other components (like Brain Dump, Top Priorities, and Time Slots) will be added here later */}
    </div>
  );
}

export default App;
