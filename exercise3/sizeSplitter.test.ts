import { size_splitter } from "./sizeSplitter";

describe("size_splitter", () => {
  test("splits words based on size and sorts them alphabetically", () => {
    const words = ["apple", "bat", "banana", "car", "dog", "elephant"];
    const size = 3;
    const result = size_splitter(words, size);
    expect(result).toEqual([
      ["bat", "car", "dog"], // words with size 3
      ["apple", "banana", "elephant"], // all other words
    ]);
  });

  test("handles an empty array", () => {
    const words: string[] = [];
    const size = 3;
    const result = size_splitter(words, size);
    expect(result).toEqual([[], []]);
  });

  test("handles no words of the given size", () => {
    const words = ["apple", "banana", "elephant"];
    const size = 3;
    const result = size_splitter(words, size);
    expect(result).toEqual([[], ["apple", "banana", "elephant"]]);
  });

  test("handles all words of the given size", () => {
    const words = ["cat", "dog", "bat"];
    const size = 3;
    const result = size_splitter(words, size);
    expect(result).toEqual([["bat", "cat", "dog"], []]);
  });

  test("sorts words alphabetically within each group", () => {
    const words = ["dog", "bat", "apple", "cat"];
    const size = 3;
    const result = size_splitter(words, size);
    expect(result).toEqual([["bat", "cat", "dog"], ["apple"]]);
  });
});
