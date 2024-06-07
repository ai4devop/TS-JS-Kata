export function sumRange(min: number, max: number): number {
  if (min > max) {
    return -1;
  }
  if (min === max) {
    return min;
  }
  return min + sumRange(min + 1, max);
}
