import { add } from './stringCalculator';

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test ("returns the number for a single number string", () => {
    expect(add("5")).toBe(5);
});