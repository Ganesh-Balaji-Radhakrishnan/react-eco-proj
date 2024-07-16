import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onDeletePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button
          className="remove-button"
          onClick={() => onDeletePressed(todo.text)}
        >
          Remove
        </button>
        <button className="completed-button">Mark as Completed</button>
      </div>
    </div>
  );
};

export default TodoListItem;
