import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.style.css";
import logo from "../assets/images/logoF1.png";
import userLogo from "../assets/images/userIcon.jpg";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageUser, setErrorMessageUser] = useState("");
  const [errorMessagePass, setErrorMessagePass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const users = [
    { username: "1", password: "1" },
    { username: "2", password: "2" },
  ];
  const handleLogin = () => {
    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );
    if (isValidUser) {
      localStorage.setItem("isAuth", "true");
      navigate("/todo");
    } else {
      setErrorMessage("Invalid username or password");
    }
    if (username === "") {
      setErrorMessageUser("Username cannot be empty");
    }
    if (password === "") {
      setErrorMessagePass("Password cannot be empty");
    }
  };

  return (
    <>
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
          <li className="hide">
            <a className="nav-btn" href="todo.html">
              To-do list
            </a>
          </li>
        </ul>
        <ul className="btn-box">
          <li className="off">
            <a className="nav-btn" href="login.html">
              Login
            </a>
          </li>
        </ul>
      </div>
      <h1>Login form</h1>
      <div className="loginFormBox">
        <div id="loginForm" className="loginForm">
          <div className="userImageBox">
            <div>
              <img src={userLogo} alt="User" className="userImage" />
            </div>
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (e.target.value !== "") {
                setErrorMessageUser("");
                setErrorMessage("");
              }
            }}
          />
          <p class="error">{errorMessageUser}</p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value !== "") {
                setErrorMessagePass("");
                setErrorMessage("");
              }
            }}
          />
          <p class="error">{errorMessagePass}</p>
          <p class="error">{errorMessage}</p>
          <button type="submit" className="submit" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
