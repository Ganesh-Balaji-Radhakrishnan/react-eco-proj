import { todos } from "../reducer";
import { expect } from "chai";

describe("the todos reducer", () => {
  it("testing CREATE_TODOS action", () => {
    const fakeTodo = { text: "hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODOS",
      payload: {
        todos: fakeTodo,
      },
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it("testing DELETE_TODOS", () => {
    const originalTodos = [
      { id: 1, text: "hello", isCompleted: false },
      { id: 2, text: "hi", isCompleted: false },
    ];
    const originalState = { isLoading: false, data: originalTodos };

    const removedTodo = {
      id: 1,
      text: "hello",
      isCompleted: false,
    };
    const fakeAction = {
      type: "DELETE_TODOS",
      payload: {
        removedTodo,
      },
    };

    const expected = {
      isLoading: false,
      data: [{ id: 2, text: "hi", isCompleted: false }],
    };

    const actual = todos(originalState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
