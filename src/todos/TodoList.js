import React, { useEffect } from "react";
import "./TodoList.css";
import NewtodoForm from "./NewtodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { markTodos } from "./action";
import { loadTodos, sendCompletedReq, sendDelReq } from "../thunks";
import {
  getCompletedTodos,
  getInCompleteTodos,
  getIsLoading,
  getTodos,
} from "./selectors";

function TodoList({
  completedTodos,
  inCompleteTodos,
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
      <h3>InComplete Todos: </h3>
      {inCompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onDeletePressed={onDeletePressed}
          onMarkedPressed={onMarkedPressed}
        />
      ))}
      <h3>Complete Todos: </h3>
      {completedTodos.map((todo) => (
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
  todos: getTodos(state),
  completedTodos: getCompletedTodos(state),
  inCompleteTodos: getInCompleteTodos(state),
  isLoading: getIsLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  onLoadingTodos: () => dispatch(loadTodos()),
  onDeletePressed: (id) => dispatch(sendDelReq(id)),
  onMarkedPressed: (id) => dispatch(sendCompletedReq(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
