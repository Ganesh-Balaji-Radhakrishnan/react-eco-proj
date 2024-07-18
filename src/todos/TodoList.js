import React, { useEffect } from "react";
import "./TodoList.css";
import NewtodoForm from "./NewtodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { deleteTodos, markTodos } from "./action";
import { loadTodos } from "../thunks";

function TodoList({
  todos = [],
  onDeletePressed,
  onMarkedPressed,
  isLoading,
  onLoadingTodos,
}) {
  useEffect(() => {
    onLoadingTodos();
  }, []);
  const loadingComponent = <div>is Loading....</div>;

  return isLoading ? (
    loadingComponent
  ) : (
    <div className="list-wrapper">
      <NewtodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onDeletePressed={onDeletePressed}
          onMarkedPressed={onMarkedPressed}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadingTodos: () => dispatch(loadTodos()),
  onDeletePressed: (text) => dispatch(deleteTodos(text)),
  onMarkedPressed: (text) => dispatch(markTodos(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
