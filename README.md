# JavaScript/Typescript Katas augmented by your assistant :robot:

Welcome to the JavaScript/Typescript Katas repository! This project includes several Katas that will help you practice algorithmic skills in JavaScript/Typescript. Each Kata is stored in a dedicated folder `exercise1`, `exercise2`, etc..
Your task is to write the algorithm of a function to solve the tests present in the file ending with `.test.ts` or `.test.js`.

Remember, your generative AI assistant should help you solve these challenges.

## 🖊️ How to use this repository

### 🐾 Step-by-step guide

1. **Clone the repository :**
   Clone this repository to your local machine:

   ```bash
   git clone <final-repo-url>
   cd <repo-name>
   ```

2. **Install dependencies :**
   This project uses `npm` or dependency management. Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Switch to a Kata folder:**
   Each Kata is available in its dedicated folder. To start, switch to the folder corresponding to the Kata you wish to solve. For example:

   ```bash
   git checkout exercise1
   ```

4. **Solve the Kata:**
   Open the corresponding file (e.g., `beer_song.js` for the `exercise1` folder) and implement the required function based on the instructions. You will find the instructions in the `README.md`.

5. **Run the tests:**
   Once you've written your solution, run the test suite to ensure your code works. The tests will guide you step by step. As you progress, more tests will pass. Use the following command to run the tests:

   ```bash
   npm test
   ```

6. **Debug and refine:**
   If tests do not pass, review the test output and adjust your code until all tests pass. Focus on one test at a time and work through them until all are successful.

### Overview of the Katas 👀

Each Kata focuses on a different aspect of JavaScript. Here are the details of each:

#### ** Beer Song 🍺(`exercise1`)**

Write a program that displays the lyrics of the "99 Bottles of Beer" song, starting from a given number of bottles.

- **File to update:** `beer_song.js`
- **Tests:** `beer_song.test.js`
- **Skills :** Loops, string manipulation.

#### ** sumRange ➕ (`exercise2`)**

Write a TypeScript method that calculates the sum of integers between a minimum and maximum value (inclusive) using recursion. If the minimum value is greater than the maximum, the method should return -1.

- **File to update:** `sumRange.ts`
- **Tests :** `sumRange.test.ts`
- **Skills:** Recursion, integer manipulation, logical conditions.

#### ** Splitter by Size 🧩 (`exercise3`)**

Implement a `size_splitter` method that takes an array of words and an integer representing a size. The method should split the array into two groups: the first containing words of the given size and the second containing all other words. Both groups should be sorted alphabetically.

- **File to update:** `sizeSplitter.ts`
- **Tests:** `sizeSplitter.test.ts`
- **Skills:** Array manipulation, sorting, filtering functions.

#### ** Countdown Timer ⏲️(`exercise4`)**

Write a function that calculates the number of days remaining until a given future date. If the date is past, return `0`.

- **File to update:** `countdown_timer.js`
- **Tests:** `countdown_timer.test.js`
- **Skills:** Date and time manipulation.

#### ** Array Element Finder 🔍(`exercise5`)**

Write a function that returns the first pair of numbers in an array whose sum equals a target value. Return an empty array if no pair is found.

- **File to update:** `array_element_finder.js`
- **Tests:** `array_element_finder.test.js`
- **Skills:** Array manipulation, algorithmic thinking.

#### ** Person Formatter Based on Classes 🙋(`exercise6`)**

Write `Person` class hat returns a full name, and a `Student` class that inherits from `Person` to add a course and return student details.

- **File to update:** `person_formatter.js`
- **Tests:** `person_formatter.test.js`
- **Skills:** Object-oriented programming, classes, inheritance.

### ⚗️ Running tests

Each folder contains its own set of tests. After writing your code, you can verify it works by running the tests. Simply execute:

```bash
npm test
```

The tests will provide feedback, showing which tests pass and which fail. Keep refining your solution until all tests pass.

### 👁️ Quick Example: Beer Song Kata

Here's how you would approach the **Beer Song** Kata:

1. Basculez sur le dossier :

   ```bash
   cd exercise1
   ```

2. Open the file `beer_song.js` and write your solution.

3. Run tests :

   ```bash
   npm test
   ```

4. Modify your solution based on test feedback until all tests pass.

---
