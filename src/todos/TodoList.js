import React, { useEffect } from "react";
import "./TodoList.css";
import NewtodoForm from "./NewtodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { markTodos } from "./action";
import { loadTodos, sendCompletedReq, sendDelReq } from "../thunks";

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
  onDeletePressed: (id) => dispatch(sendDelReq(id)),
  onMarkedPressed: (id) => dispatch(sendCompletedReq(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
