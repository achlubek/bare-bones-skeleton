import { assert } from "chai";

describe("Hello World test", () => {
  it("Register a handler", () => {
    const helloWorld = "Hello World";
    assert.strictEqual(helloWorld, "Hello World");
  });
});
