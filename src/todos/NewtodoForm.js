import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createTodos, deleteTodos } from "./action";
import { sendnewTodoReq } from "../thunks";
import { getTodos } from "./selectors";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewtodoForm = ({ todos, onCreatePressed, onCreateTodosInServer }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <FormContainer>
      <NewTodoInput
        className="new-todo-input"
        type="text"
        value={inputValue}
        placeholder="type input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <NewTodoButton
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
      </NewTodoButton>
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodos(text)),
  onCreateTodosInServer: (text) => dispatch(sendnewTodoReq(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewtodoForm);
