# 📅 Exercise4 ~ 10 Minutes

## Challenge

Write a program that calculates the number of days remaining until a specified future date.

Your program should accept a single input string representing a future date in the format `YYYY-MM-DD`.

- If the date is in the future, return the number of days remaining.
- If the date has already passed, return `0`.

You need to define the method `daysUntil(future_date: string)` in the `countdown_timer.ts` file. Then, run the program to check your results.

### Exemple

```typescript
days_until("2024-12-25"); // Returns a positive number depending on the current date
days_until("2023-01-01"); // Returns 0 (past date)
```

## 📝 Guidelines

Implement the method `daysUntil(future_date: string)`.
Once you have implemented the function, run the tests in DaysUntilTest.java to validate your solution:

```bash
npm test
```

If all tests pass, congratulations! You've completed the exercise 🎉
