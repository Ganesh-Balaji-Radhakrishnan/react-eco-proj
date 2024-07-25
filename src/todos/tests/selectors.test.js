import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompetedTodos selector", () => {
  it("Returns compltedTodos", () => {
    const fakeTodos = [
      {
        text: "hello",
        isCompleted: true,
      },
      {
        text: "hi",
        isCompleted: false,
      },
      {
        text: "namaste",
        isCompleted: false,
      },
      {
        text: "vanakkam",
        isCompleted: false,
      },
    ];
    const expected = [{ text: "hello", isCompleted: true }];
    const actual = getCompletedTodos.resultFunc(fakeTodos); //default method with reselect (resultFunc) to test the selctors
    expect(actual).to.deep.equal(expected);
  });
});
