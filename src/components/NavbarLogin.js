import React from "react";
import logo from "../assets/images/logoF1.png";

const NavbarLogin = () => {
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
        </ul>
      </div>
    </>
  );
};

export default NavbarLogin;
