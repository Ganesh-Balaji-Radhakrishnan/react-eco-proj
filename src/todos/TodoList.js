import React from "react";
import "./TodoList.css";
import NewtodoForm from "./NewtodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { deleteTodos } from "./action";

function TodoList({ todos = [], onDeletePressed }) {
  return (
    <div className="list-wrapper">
      <NewtodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} onDeletePressed={onDeletePressed} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onDeletePressed: (text) => dispatch(deleteTodos(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
