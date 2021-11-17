import { helloWorld } from ".";
import assert from "assert";

describe("package", () => {
  it("should export hello world", () => {
    assert.strictEqual(helloWorld, "Hello World");
  });
});
