// Importing React and the necessary components
import React from "react";
import "./App.css";
import DateSelector from "./components/DateSelector";
import PriorityList from "./components/PriorityList";
import BrainDump from "./components/BrainDump";
import TimeSlots from "./components/TimeSlots";
import Dump from "./components/Instructions";

function App() {
  return (
    <div className="App">
      {/* Title of the application */}
      <h1>Timebox App</h1>

      {/* DateSelector component allows users to select the day and date */}
      <DateSelector />

      {/* Main container holding the left and right sections */}
      <div className="timebox-container">
        {/* Left section contains PriorityList and BrainDump */}
        <div className="left-section">
          <PriorityList /> {/* Top Priorities */}
          <BrainDump /> {/* Brain Dump for entering tasks */}
          <Dump /> {/* Instructions */}
        </div>

        {/* Right section contains TimeSlots */}
        <div className="right-section">
          <TimeSlots /> {/* Scheduling tasks in time slots */}
        </div>
      </div>
    </div>
  );
}

export default App;
