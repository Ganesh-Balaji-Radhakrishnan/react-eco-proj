import { CREATE_TODOS, DELETE_TODOS } from "./action";

export const todos = (state = [], action) => {
  const { type, payload: text } = action;
  switch (type) {
    case CREATE_TODOS: {
      console.log(text);
      const task = {
        text: text,
        isCompleted: false,
      };
      return state.concat(task);
      /* return [...state, task]; */
    }
    case DELETE_TODOS: {
      return state.filter((todo) => todo.text !== text);
    }
    default: {
      return state;
    }
  }
};
