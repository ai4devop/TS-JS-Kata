import { find_sum_pair } from "./array_element_finder";

test("Finds a pair that sums to the target", () => {
  expect(find_sum_pair([3, 5, 9, 2, 8, 10, 11], 19)).toEqual(
    expect.arrayContaining([9, 10])
  );
});

test("Returns empty array when no pair sums to target", () => {
  expect(find_sum_pair([3, 5, 7, 2, 8, 10, 11], 20)).toEqual([]);
});

test("Works with negative numbers", () => {
  expect(find_sum_pair([-3, 4, 1, 2], -1)).toEqual(
    expect.arrayContaining([-3, 2])
  );
});

test("Finds the correct pair with mixed numbers", () => {
  expect(find_sum_pair([1, 2, 3, -2, -1, -4], -1)).toEqual(
    expect.arrayContaining([-2, 1])
  );
});

test("Returns empty array for empty input", () => {
  expect(find_sum_pair([], 5)).toEqual([]);
});
