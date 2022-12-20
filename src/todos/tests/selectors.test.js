import {expect} from "chai";
import {getCompletedTodos} from "../selectors";

describe("the getCompletedTodos selector", () => {
  it("Returns only completed Todos", () => {
    const fakeTodos = [
      {
        text: "Say Hi",
        isCompleted: true,
      },
      {
        text: "Say Bye",
        isCompleted: false,
      },
      {
        text: "Climb Mount Everest",
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: "Say Hi",
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    /* eslint-disable jest/valid-expect */

    expect(actual).to.deep.equal(expected);
  });
});
