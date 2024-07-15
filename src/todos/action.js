export const CREATE_TODOS = "CREATE_TODOS";
export const createTodos = (text) => ({
  type: CREATE_TODOS,
  payload: text,
});

export const DELETE_TODOS = "DELETE_TODOS";
export const deleteTodos = (text) => ({
  type: DELETE_TODOS,
  payload: text,
});
