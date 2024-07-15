import React, { useState } from "react";
import "./NewtodoForm.css";

const NewtodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        placeholder="type input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Add todo</button>
    </div>
  );
};

export default NewtodoForm;
