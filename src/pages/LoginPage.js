import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.style.css";
import userLogo from "../assets/images/userIcon.jpg";
import logo from "../assets/images/logoF1.png";

function LoginPage() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
  const users = [
    { username: "1", password: "1" },
    { username: "2", password: "2" },
  ];

  const handleLogin = useCallback(() => {
    const errors = {};
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "") {
      errors.username = "Username cannot be empty";
    }
    if (password === "") {
      errors.password = "Password cannot be empty";
    }
    setErrorMessages(errors);

    console.log("Errors after validation:", errors);

    if (Object.keys(errors).length > 0) {
      console.log("Form errors:", errors);
      return;
    }

    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );

    console.log("Is valid user:", isValidUser);

    if (isValidUser) {
      localStorage.setItem("isAuth", "true");
      navigate("/todo");
    } else {
      setErrorMessages({ login: "Invalid username or password" });
    }
  }, [navigate, users]);

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
            ref={usernameRef}
            onChange={() => {
              console.log("Username input changed:", usernameRef.current.value);
              if (usernameRef.current.value !== "") {
                setErrorMessages((prev) => ({ ...prev, username: "" }));
              }
            }}
          />
          <p className="error">{errorMessages.username}</p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            onChange={() => {
              console.log("Password input changed:", passwordRef.current.value);
              if (passwordRef.current.value !== "") {
                setErrorMessages((prev) => ({ ...prev, password: "" }));
              }
            }}
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
