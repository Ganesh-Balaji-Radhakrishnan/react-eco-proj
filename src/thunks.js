import {
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

export const displayAlert = (error) => () => {
  alert(error);
};
