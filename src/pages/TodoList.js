import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logoF1.png";
import "../assets/css/todo.style.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskCount, setTaskCount] = useState(0);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const addTask = useCallback(() => {
    const taskName = newTask.trim();
    if (!taskName) {
      setError(true);
      console.log("Error: Task name cannot be empty");
      return;
    }
    setError(false);
    const updatedTasks = [
      ...tasks,
      { name: taskName, completed: false, editing: false },
    ];
    setTasks(updatedTasks);
    setTaskCount(taskCount + 1);
    setNewTask("");
    console.log("Task added:", taskName);
    console.log("Updated tasks:", updatedTasks);
  }, [newTask, tasks, taskCount]);

  const handleTaskChange = useCallback(
    (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTasks(updatedTasks);
      setTaskCount(taskCount + (updatedTasks[index].completed ? -1 : 1));
      console.log("Task status changed:", updatedTasks[index]);
      console.log("Updated tasks:", updatedTasks);
    },
    [tasks, taskCount]
  );

  const handleDeleteTask = useCallback(
    (index) => {
      const taskToDelete = tasks[index];
      const updatedTasks = tasks.filter((_, i) => i !== index);
      if (!taskToDelete.completed) {
        setTaskCount(taskCount - 1);
      }
      setTasks(updatedTasks);
      console.log("Task deleted:", taskToDelete);
      console.log("Updated tasks:", updatedTasks);
    },
    [tasks, taskCount]
  );

  const handleEditTask = useCallback(
    (index, newName) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = newName;
      updatedTasks[index].editing = false;
      setTasks(updatedTasks);
      console.log("Task edited:", updatedTasks[index]);
      console.log("Updated tasks:", updatedTasks);
    },
    [tasks]
  );

  const toggleEditing = useCallback(
    (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].editing = !updatedTasks[index].editing;
      setTasks(updatedTasks);
      console.log("Task editing toggled:", updatedTasks[index]);
      console.log("Updated tasks:", updatedTasks);
    },
    [tasks]
  );

  const saveTask = useCallback(
    (index, newName) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = newName;
      updatedTasks[index].editing = false;
      setTasks(updatedTasks);
      console.log("Task saved:", updatedTasks[index]);
      console.log("Updated tasks:", updatedTasks);
    },
    [tasks]
  );

  const handleLogout = useCallback(() => {
    localStorage.setItem("isAuth", "false");
    navigate("/login");
    console.log("User logged out");
  }, [navigate]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    },
    [addTask]
  );

  return (
    <div className="App">
      <div className="nav-box" />
      <div className="navigation">
        <ul className="btn-box">
          <div className="brand">
            <img src={logo} alt="logo" className="logo" />
            <p className="label">
              Phuc <br />
              Furniture
            </p>
          </div>
          <li>
            <button className="nav-btn active">To-do list</button>
          </li>
        </ul>
        <ul className="btn-box">
          <li id="logout-btn">
            <button className="nav-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="todobody">
        <div className="todo">
          <h1 style={{ color: "white" }}>To-do list</h1>
          <div className="container">
            <div id="wrapper">
              <div id="task-place">
                <input
                  type="text"
                  placeholder="Write your task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <button id="add-btn" onClick={addTask}>
                Add
              </button>
            </div>
            <div id="tasks">
              <p id="pending-tTasks">
                <b>
                  <span className="count-value">{taskCount}</span> task need to
                  do
                </b>
              </p>
              {tasks.map((task, index) => (
                <div key={index} className="task">
                  <input
                    type="checkbox"
                    className="task-check"
                    checked={task.completed}
                    onChange={() => handleTaskChange(index)}
                  />
                  {task.editing ? (
                    <input
                      type="text"
                      className="edit-input"
                      defaultValue={task.name}
                      onBlur={(e) => saveTask(index, e.target.value)}
                    />
                  ) : (
                    <span
                      className={
                        task.completed ? "taskname completed" : "taskname"
                      }
                    >
                      {task.name}
                    </span>
                  )}
                  <button
                    className={`edit ${task.editing ? "save" : ""}`}
                    onClick={() => toggleEditing(index)}
                  >
                    <i
                      className={`fa-solid ${
                        task.editing ? "fa-save" : "fa-pen-to-square"
                      }`}
                    ></i>
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <i className="fa-solid fa-square-minus"></i>
                  </button>
                </div>
              ))}
            </div>
            {error && <p id="error">Can't leave the space empty</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TodoList);
