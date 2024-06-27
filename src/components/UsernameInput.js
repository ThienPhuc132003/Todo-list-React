// src/components/UsernameInput.js
import React from "react";

function UsernameInput({
  username,
  errorMessages,
  handleUsernameChange,
  handleUsernameBlur,
  handleUsernameFocus
}) {
  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        onBlur={handleUsernameBlur}
        onFocus={handleUsernameFocus}
        className={
          errorMessages.username || errorMessages.login
            ? "error-border"
            : "correct-border"
        }
      />
      <p className="error">{errorMessages.username}</p>
    </>
  );
}

export default React.memo(UsernameInput);
