import "node-fetch";
import fetchMock from "fetch-mock";
import {expect} from "chai";
import sinon from "sinon";
import {loadTodos} from "../thunks";

describe("The loadTodos thunk", () => {
  it("Dispatches the correct actions in the success scenario", async () => {
    const fakeDispatch = sinon.spy(); //keep track of fake function and their args passed

    const fakeTodos = [{text: "1"}, {text: "2"}];
    fetchMock.get("http://localhost:8080/todos-delay", fakeTodos);

    const expectedFirstAction = {type: "LOAD_TODOS_IN_PROGRESS"};
    const expectedSecondAction = {
      type: "LOAD_TODOS_SUCCESS",
      payload: {
        todos: fakeTodos,
      },
    };

    await loadTodos()(fakeDispatch);
    /* eslint-disable jest/valid-expect */

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    fetchMock.reset();
  });
});
