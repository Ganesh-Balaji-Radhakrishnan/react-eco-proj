import {
  createTodos,
  loadTodosInFailure,
  loadTodosInProgress,
  loadTodosSuccess,
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

export const displayAlert = (error) => () => {
  alert(error);
};
