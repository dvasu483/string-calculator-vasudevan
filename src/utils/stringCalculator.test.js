import { add } from "./stringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number for a single number string", () => {
  expect(add("5")).toBe(5);
});

test("returns the sum of two numbers", () => {
  expect(add("5,3")).toBe(8);
});

test("returns the sum of multiple numbers", () => {
  expect(add("5,3,2")).toBe(10);
});
