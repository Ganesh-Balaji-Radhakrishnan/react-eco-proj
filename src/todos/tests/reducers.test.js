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
});
