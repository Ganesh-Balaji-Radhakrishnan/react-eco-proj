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
      const { todos } = payload;
      /* const task = {
        text: text,
        isCompleted: false,
      }; */
      return state.concat(todos);
      /* return [...state, task]; */
    }
    case DELETE_TODOS: {
      const { removedTodo } = payload;
      return state.filter((todo) => todo.id !== removedTodo.id);
    }
    case MARK_TODOS: {
      const { todos: markedTodos } = payload;
      /*  return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ); */
      return state.map((todo) => {
        if (todo.id === markedTodos.id) {
          console.log(markedTodos);
          return markedTodos;
        }
        return todo;
      });
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
