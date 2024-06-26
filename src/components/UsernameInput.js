// src/components/UserInput.js
import React from "react";

const UserInput = ({
  username,
  handleUsernameChange,
  handleUsernameBlur,
  handleUsernameFocus,
  errorMessages,
}) => {
  return (
    <>
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
    </>
  );
};

export default UserInput;
