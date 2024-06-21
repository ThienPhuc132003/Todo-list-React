// src/pages/LoginPage.js
import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.style.css";
import userLogo from "../assets/images/userIcon.jpg";
import logo from "../assets/images/logoF1.png";
import { setAuth } from "../utils/Auth"; // Import the setAuth function

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const users = useMemo(
    () => [
      { username: "1", password: "1" },
      { username: "2", password: "2" },
    ],
    []
  );

  const validateFields = useCallback(() => {
    const errors = {};

    if (username === "") {
      errors.username = "Username cannot be empty";
    }
    if (password === "") {
      errors.password = "Password cannot be empty";
    }

    return errors;
  }, [username, password]);

  const handleLogin = useCallback(() => {
    const errors = validateFields();
    setErrorMessages(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      setAuth(true); // Set auth status using the utility function
      navigate("/todo");
    } else {
      setErrorMessages({ login: "Invalid username or password" });
    }
  }, [navigate, username, password, users, validateFields]);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (errorMessages.username || errorMessages.login) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        username: "",
        login: prevErrors.login ? "" : prevErrors.login,
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (errorMessages.password || errorMessages.login) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: "",
        login: prevErrors.login ? "" : prevErrors.login,
      }));
    }
  };

  const handleUsernameBlur = () => {
    const errors = validateFields();
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      username: errors.username || "",
    }));
  };

  const handlePasswordBlur = () => {
    const errors = validateFields();
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      password: errors.password || "",
    }));
  };

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
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
            className={
              errorMessages.username || errorMessages.login
                ? "error-border"
                : "correct-border"
            }
          />
          <p className="error">{errorMessages.username}</p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            className={
              errorMessages.password || errorMessages.login
                ? "error-border"
                : "correct-border"
            }
          />
          <p className="error">{errorMessages.password}</p>
          <p className="error">{errorMessages.login}</p>
          <button type="submit" className="submit" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LoginPage);
