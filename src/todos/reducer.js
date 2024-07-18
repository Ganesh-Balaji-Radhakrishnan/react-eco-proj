import {
  CREATE_TODOS,
  DELETE_TODOS,
  LOAD_TODOS_IN_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  MARK_TODOS,
} from "./action";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS: {
      return true;
    }
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_IN_FAILURE: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODOS: {
      const { text } = payload;
      const task = {
        text: text,
        isCompleted: false,
      };
      return state.concat(task);
      /* return [...state, task]; */
    }
    case DELETE_TODOS: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODOS: {
      const { text } = payload;
      return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_IN_PROGRESS:
    default: {
      return state;
    }
  }
};
