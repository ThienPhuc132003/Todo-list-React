import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.style.css";
import logo from "../assets/images/logoF1.png";
import userLogo from "../assets/images/userIcon.jpg";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = "1";
    const validPassword = "1";
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAuth", "true");
      navigate("/todo");
    } else {
      document.getElementById("error").style.display = "block";
      console.log("Error state set to true");
    }
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Web phuc</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="../assets/css/login.style.css" />
      <link rel="icon" href="../assets/logoF1.png" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
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
          <li className="off">
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="error">Your Username or Password is not correct</p>
          <button type="submit" className="submit" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
