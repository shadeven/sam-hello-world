const lambda = require("../../../src/handlers/get-quiz.js");

describe("Test for get-quiz", function () {
  it("Verifies successful response", async () => {
    const event = { pathParameters: { id: 32 } };
    const context = {};
    const mockCallback = jest.fn();
    const result = await lambda.getQuizHandler(event, context, mockCallback);
    expect(result).toEqual(32);
  });
});
