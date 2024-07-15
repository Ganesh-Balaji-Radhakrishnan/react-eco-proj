import { CREATE_TODOS, DELETE_TODOS } from "./action";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODOS: {
      const { text } = payload;
      const task = {
        text,
        isCompleted: false,
      };
      return state.concat(task);
    }
    case DELETE_TODOS: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default: {
      return state;
    }
  }
};
