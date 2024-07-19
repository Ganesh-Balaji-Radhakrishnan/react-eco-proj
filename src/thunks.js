import {
  createTodos,
  deleteTodos,
  loadTodosInFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  markTodos,
} from "./todos/action";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());

    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosInFailure());
    dispatch(displayAlert(e));
  }
};

export const sendnewTodoReq = (text) => async (dispatch) => {
  try {
    const body = { text };
    const response = await fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const todos = await response.json();

    dispatch(createTodos(todos));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const sendDelReq = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    });

    const removedTodo = await response.json();
    dispatch(deleteTodos(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const sendCompletedReq = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const todos = await response.json();
    dispatch(markTodos(todos));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (error) => () => {
  alert(error);
};
