import React, { useState } from "react";

const TimeSlots = () => {
  const hours = [
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  const [tasksInSlots00, setTasksInSlots00] = useState(
    Array(hours.length).fill(null)
  );
  const [tasksInSlots30, setTasksInSlots30] = useState(
    Array(hours.length).fill(null)
  );

  // Handle drop into time slots
  const handleDrop = (e, slotType, index) => {
    const task = e.dataTransfer.getData("text");

    if (slotType === ":00") {
      const newTasksInSlots00 = [...tasksInSlots00];
      newTasksInSlots00[index] = task;
      setTasksInSlots00(newTasksInSlots00);
    } else if (slotType === ":30") {
      const newTasksInSlots30 = [...tasksInSlots30];
      newTasksInSlots30[index] = task;
      setTasksInSlots30(newTasksInSlots30);
    }
  };

  // Allow drop action
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Handle dragging out of a time slot (cut)
  const handleDragStart = (e, task, slotType, index) => {
    e.dataTransfer.setData("text", task);

    // Remove task from current slot
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
            >
              {tasksInSlots00[index] ? tasksInSlots00[index] : "No task"}
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
            >
              {tasksInSlots30[index] ? tasksInSlots30[index] : "No task"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
