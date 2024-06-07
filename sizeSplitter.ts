export function size_splitter(
  words: string[],
  size: number
): [string[], string[]] {
  const matchSize: string[] = [];
  const otherSize: string[] = [];

  for (const word of words) {
    if (word.length === size) {
      matchSize.push(word);
    } else {
      otherSize.push(word);
    }
  }

  matchSize.sort();
  otherSize.sort();

  return [matchSize, otherSize];
}
