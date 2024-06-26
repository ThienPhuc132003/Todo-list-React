// src/components/PasswordInput.js
import React from "react";

const PasswordInput = ({ password, errorMessage, onChange, onBlur }) => (
  <div>
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      value={password}
      onChange={onChange}
      onBlur={onBlur}
      className={errorMessage ? "error-border" : "correct-border"}
    />
    <p className="error">{errorMessage}</p>
  </div>
);

export default React.memo(PasswordInput);
