import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onDeletePressed, onMarkedPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button
          className="remove-button"
          onClick={() => onDeletePressed(todo.id)}
        >
          Remove
        </button>
        {todo.isCompleted ? null : (
          <button
            className="completed-button"
            onClick={() => onMarkedPressed(todo.id)}
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoListItem;
