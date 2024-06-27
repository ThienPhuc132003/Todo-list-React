// src/components/NavbarTodo.js
import React from "react";
import logo from "../assets/images/logoF1.png";

function NavbarTodo({ handleLogout }) {
  return (
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
  );
}

export default React.memo(NavbarTodo);
