// src/components/SubmitButton.js
import React from "react";

function SubmitLogin({ handleLogin }) {
  return (
    <button type="submit" className="submit" onClick={handleLogin}>
      Submit
    </button>
  );
}

export default React.memo(SubmitLogin);
