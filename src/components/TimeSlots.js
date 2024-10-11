import React, { useState } from "react";

const TimeSlots = () => {
  const hours = [
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
  ];

  const [tasksInSlots00, setTasksInSlots00] = useState(
    Array(hours.length).fill(null)
  );
  const [tasksInSlots30, setTasksInSlots30] = useState(
    Array(hours.length).fill(null)
  );

  // Handle drop into time slots, store task object with text and color
  const handleDrop = (e, slotType, index) => {
    const taskData = JSON.parse(e.dataTransfer.getData("text"));

    if (slotType === ":00") {
      const newTasksInSlots00 = [...tasksInSlots00];
      newTasksInSlots00[index] = taskData; // Store task object with text and color
      setTasksInSlots00(newTasksInSlots00);
    } else if (slotType === ":30") {
      const newTasksInSlots30 = [...tasksInSlots30];
      newTasksInSlots30[index] = taskData; // Store task object with text and color
      setTasksInSlots30(newTasksInSlots30);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Handle dragging, include both text and color in the data transfer
  const handleDragStart = (e, task, slotType, index) => {
    e.dataTransfer.setData("text", JSON.stringify(task)); // Stringify the task object to include text and color

    if (slotType === ":00") {
      const newTasksInSlots00 = [...tasksInSlots00];
      newTasksInSlots00[index] = null;
      setTasksInSlots00(newTasksInSlots00);
    } else if (slotType === ":30") {
      const newTasksInSlots30 = [...tasksInSlots30];
      newTasksInSlots30[index] = null;
      setTasksInSlots30(newTasksInSlots30);
    }
  };

  return (
    <div className="time-slots-container">
      <h2>Time Slots</h2> {/* New header for Time Slots */}
      {/* Header row for :00 and :30 */}
      <div className="time-slots-header">
        <div className="hour-column-header"></div> {/* Empty for alignment */}
        <div className="time-slot-header">:00</div>
        <div className="time-slot-header">:30</div>
      </div>
      {/* Time slots rendered side by side with hour column */}
      {hours.map((hour, index) => (
        <div className="time-slot-row" key={index}>
          <div className="hour-column">
            <strong>{hour}</strong> {/* Only display the hour here */}
          </div>
          <div
            className="time-slot"
            onDrop={(e) => handleDrop(e, ":00", index)}
            onDragOver={allowDrop}
          >
            <div
              className="task-slot"
              draggable={tasksInSlots00[index] ? true : false}
              onDragStart={(e) =>
                tasksInSlots00[index] &&
                handleDragStart(e, tasksInSlots00[index], ":00", index)
              }
              style={{
                backgroundColor: tasksInSlots00[index]
                  ? tasksInSlots00[index].color
                  : "#f9f9f9", // Use task color if present
              }}
            >
              {tasksInSlots00[index] ? tasksInSlots00[index].text : "No task"}
            </div>
          </div>
          <div
            className="time-slot"
            onDrop={(e) => handleDrop(e, ":30", index)}
            onDragOver={allowDrop}
          >
            <div
              className="task-slot"
              draggable={tasksInSlots30[index] ? true : false}
              onDragStart={(e) =>
                tasksInSlots30[index] &&
                handleDragStart(e, tasksInSlots30[index], ":30", index)
              }
              style={{
                backgroundColor: tasksInSlots30[index]
                  ? tasksInSlots30[index].color
                  : "#f9f9f9", // Use task color if present
              }}
            >
              {tasksInSlots30[index] ? tasksInSlots30[index].text : "No task"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
