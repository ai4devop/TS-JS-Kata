import { sumRange } from "./sumRange";

describe("sumRange", () => {
  test("returns the correct sum for a valid range", () => {
    expect(sumRange(1, 5)).toBe(15); // 1+2+3+4+5=15
    expect(sumRange(3, 7)).toBe(25); // 3+4+5+6+7=25
    expect(sumRange(5, 5)).toBe(5); // 5
  });

  test("returns -1 when min is greater than max", () => {
    expect(sumRange(5, 1)).toBe(-1);
    expect(sumRange(10, 5)).toBe(-1);
  });

  test("returns the correct sum for negative ranges", () => {
    expect(sumRange(-3, 3)).toBe(0); // -3+-2+-1+0+1+2+3=0
    expect(sumRange(-5, -1)).toBe(-15); // -5+-4+-3+-2+-1=-15
  });

  test("returns the correct sum when range includes zero", () => {
    expect(sumRange(0, 3)).toBe(6); // 0+1+2+3=6
    expect(sumRange(-3, 0)).toBe(-6); // -3+-2+-1+0=-6
  });
});
