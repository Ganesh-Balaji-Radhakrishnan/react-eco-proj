export const CREATE_TODOS = "CREATE_TODOS";
export const createTodos = (todos) => {
  return {
    type: CREATE_TODOS,
    payload: { todos },
  };
};

export const DELETE_TODOS = "DELETE_TODOS";
export const deleteTodos = (text) => ({
  type: DELETE_TODOS,
  payload: { text },
});

export const MARK_TODOS = "MARK_TODOS";
export const markTodos = (text) => ({
  type: MARK_TODOS,
  payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_IN_FAILURE = "LOAD_TODOS_IN_FAILURE";
export const loadTodosInFailure = () => ({
  type: LOAD_TODOS_IN_FAILURE,
});
