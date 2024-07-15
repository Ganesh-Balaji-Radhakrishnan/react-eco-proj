import React from "react";
import "./TodoList.css";
import NewtodoForm from "./NewtodoForm";
import TodoListItem from "./TodoListItem";

function TodoList({ todos = [{ text: "Gaba" }] }) {
  return (
    <div className="list-wrapper">
      <NewtodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
