// Importing React and the necessary components.
import React from "react";
import "./App.css"; // Importing the CSS file for styling.
import DateSelector from "./components/DateSelector"; // Importing the DateSelector component.
import PriorityList from "./components/PriorityList"; // Importing the PriorityList component
import BrainDump from "./components/BrainDump"; // Importing BrainDump component
import TimeSlots from "./components/TimeSlots"; // Importing TimeSlots component
import Dump from "./components/Instructions";

function App() {
  return (
    <div className="App">
      {/* Title of the application */}
      <h1>Timebox App</h1>

      {/* Rendering the DateSelector component to allow day and date selection */}
      <DateSelector />

      {/* Flex container to hold both the left and right sections */}
      <div className="timebox-container">
        {/* Left section for Top Priorities and Brain Dump */}
        <div className="left-section">
          {/* Rendering the PriorityList component */}
          <PriorityList />
          {/* Rendering the PriorityList component */}
          <BrainDump />
          <Dump />
        </div>

        {/* Right section for Time Slots */}
        <div className="right-section">
          <TimeSlots />
        </div>
      </div>
    </div>
  );
}

export default App;
