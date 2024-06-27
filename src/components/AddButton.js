import React from "react";
function AddButton({ addTask }) {
  return (
    <>
      <button id="add-btn" onClick={addTask}>
        Add
      </button>
    </>
  );
}

export default React.memo(AddButton);
