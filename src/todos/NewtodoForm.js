import React, { useState } from "react";
import "./NewtodoForm.css";
import { connect } from "react-redux";
import { createTodos, deleteTodos } from "./action";
import { sendnewTodoReq } from "../thunks";

const NewtodoForm = ({ todos, onCreatePressed, onCreateTodosInServer }) => {
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
      <button
        className="new-todo-button"
        onClick={() => {
          const duplicatedValue = todos.some(
            (todo) => todo.text === inputValue
          );

          if (!duplicatedValue) {
            onCreateTodosInServer(inputValue);
            setInputValue("");
          }
        }}
      >
        Add todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodos(text)),
  onCreateTodosInServer: (text) => dispatch(sendnewTodoReq(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewtodoForm);
