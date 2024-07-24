import {
  CREATE_TODOS,
  DELETE_TODOS,
  LOAD_TODOS_IN_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  MARK_TODOS,
} from "./action";

const initialState = {
  isLoading: false,
  data: [],
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODOS: {
      const { todos } = payload;
      /* const task = {
        text: text,
        isCompleted: false,
      }; */
      return { ...state, data: state.data.concat(todos) };
      /* return [...state, task]; */
    }
    case DELETE_TODOS: {
      const { removedTodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removedTodo.id),
      };
    }
    case MARK_TODOS: {
      const { todos: markedTodos } = payload;
      /*  return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ); */
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === markedTodos.id) {
            console.log(markedTodos);
            return markedTodos;
          }
          return todo;
        }),
      };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_TODOS_IN_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

/* export const isLoading = (state = false, action) => {
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
 */
