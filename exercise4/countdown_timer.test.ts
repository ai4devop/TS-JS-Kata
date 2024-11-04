import { days_until } from "./countdown_timer";

test("Calculates days until a future date", () => {
  expect(days_until("2024-12-25")).toBeGreaterThan(0);
});

test("Returns 0 for past dates", () => {
  expect(days_until("2023-01-01")).toBe(0);
});

test("Handles today's date correctly", () => {
  const today = new Date().toISOString().split("T")[0];
  expect(days_until(today)).toBe(0);
});
