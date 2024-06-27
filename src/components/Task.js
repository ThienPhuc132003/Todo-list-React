import React from "react";
function Task({
  task,
  index,
  handleTaskChange,
  handleTaskNameChange,
  handleSaveTask,
  handleEditTask,
  handleDeleteTask,
}) {
  return (
    <>
      <div className="task">
        <input
          type="checkbox"
          className="task-check"
          checked={task.completed}
          onChange={() => handleTaskChange(index)}
        />
        {task.editing ? (
          <>
            <input
              type="text"
              className="edit-input"
              value={task.editedName}
              onChange={(e) => handleTaskNameChange(index, e.target.value)}
            />
            <button className="save" onClick={() => handleSaveTask(index)}>
              <i className="fa-solid fa-save"></i>
            </button>
          </>
        ) : (
          <>
            <span
              className={task.completed ? "taskname completed" : "taskname"}
            >
              {task.name}
            </span>
            <button className="edit" onClick={() => handleEditTask(index)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </>
        )}
        <button className="delete" onClick={() => handleDeleteTask(index)}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
      </div>
    </>
  );
}
export default React.memo(Task);
