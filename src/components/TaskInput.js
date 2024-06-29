import React from "react";
function TaskInput({ newTask, setNewTask, handleKeyPress }) {
  return (
    <>
      <div id="task-place">
        <input
          type="text"
          placeholder="Write your task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
}
export default React.memo(TaskInput);
