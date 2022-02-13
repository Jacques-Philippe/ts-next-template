import { add } from "./add";

describe("add tests", () => {
  it("returns the sum of A and B for A+B", () => {
    const a: number = 1;
    const b: number = 3;
    expect(a + b).toBeCloseTo(add(a, b));
  });
  it("returns twice the number for A + A", () => {
    const a: number = 1;
    expect(add(a, a)).toBeCloseTo(2 * a);
  });
});

export {};
