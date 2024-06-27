// src/components/PasswordInput.js
import React from "react";

function PasswordInput({
  password,
  errorMessages,
  handlePasswordChange,
  handlePasswordBlur,
  handlePasswordFocus,
}) {
  return (
    <>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        onFocus={handlePasswordFocus}
        className={
          errorMessages.password || errorMessages.login
            ? "error-border"
            : "correct-border"
        }
      />
      <p className="error">{errorMessages.password}</p>
    </>
  );
}

export default React.memo(PasswordInput);
