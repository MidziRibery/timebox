import React from "react";

const Instructions = () => {
  return (
    <div className="dump-container">
      <h2>Instructions</h2>
      <h3 className="instructions-text">
        1. Fill up Brain Dump with tasks.
        <br />
        2. Drag top 3 priority task to Top Priorities.
        <br />
        3. Plan and drag tasks accordingly to the time slots on the right. You
        can move more than once.
        <br />
        4. Once task is completed, tick the checkbox in the Brain Dump to strike
        it off.
        <br />
        5. To delete tasks, press the red 'X' button.
        <br />
        6. To delete tasks on Time Slots, simply drag it outside the box.
      </h3>
    </div>
  );
};

export default Instructions;
