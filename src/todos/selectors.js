import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getIsLoading = (state) => state.todos.isLoading;

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
// reselect helps to save computation time since it gets re-calculated only when the inputs are changed, unlike normal functions
// like memo-isation
export const getInCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);
