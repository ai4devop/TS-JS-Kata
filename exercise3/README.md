## 🍕 Exercise3 ~ 10 minutes

Implement a method `size_splitter` in Typescript that takes two parameters: an array of words (array), and an integer (the size).

- **First Group:** Words that match the given size.
- **Second Group:** All other words.

Both groups should be sorted alphabetically.

Example:

```bash
const maTable = ["dog", "data", "ask", "my", "win", "two", "beer", "as"];
const result = size_splitter(maTable, 3);
console.log(result);
# output: [["ask", "dog", "two", "win"], ["as", "beer", "data", "my"]]
```
