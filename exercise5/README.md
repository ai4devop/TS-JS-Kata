# Exercise 5 - Array Element Finder 🔍 ~ 10 minutes

## 💪 Challenge

Write a program that takes an array of integers and a target number. Your goal is to find and return the first pair of numbers whose sum equals the target.
If no pair exists, return an empty array.

Define your method `find_sum_pair(array: number[], target: number)` in the `array_element_finder.ts` file. Once implemented, you should test your solution by running the provided test cases.

### Example

```javascript
find_sum_pair([3, 5, 9, 2, 8, 10, 11], 17); // Returns [9, 8]
find_sum_pair([3, 5, 7, 2, 8, 10, 11], 20); // Returns []
```
## 📝 Guidelines
1. The `find_sum_pair(array: number[], target: number)` method should return the first matching pair found.
2. Make sure to handle cases where no pair exists by returning an empty array [].
3. Run the tests in `array_element_finder.test.ts` to verify your implementation:

    ```bash
    npm test
    ```

4. If all tests pass, you've successfully completed the exercise 🎉
