import commonState from "./commonState";

describe("commonState", () => {
  it("Should return the state", () => {
    expect(commonState).toEqual({
      questions: [],
      counter: 1
    });
  });
});
