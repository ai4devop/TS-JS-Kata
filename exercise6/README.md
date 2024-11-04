# 🙇 Exercise 6 ~ 10 minutes

## 💪 Challenge

Create two classes, `Person` and `Student`, to model basic relationships between individuals and their enrolled courses.

## Challenge

- The person `Person` class should have two attributes: `firstName` and `lastName`, and a method `getFullName()` that returns the full name.
- The `Student` class should inherit from `Person` and add a new attribute `course`. The class should also implement a method `getDetails()`  that returns a string containing the student's full name and the course they are enrolled in.

### Example

```javascript
const student = new Student("John", "Doe", "Math");
student.getFullName(); // Returns "John Doe"
student.getDetails();  // Returns "John Doe is enrolled in Math"
```

### Input

- First implement `Person` class.
- Then implement `Student` class that inherits from `Person`.

### Output

- For `Person`, the `getFullName()` method should return a string with the full name.
- For `Student`, The `getDetails()` method should return a string with the student's name and their course.

### Constraints

- First names and last names will always be non-empty strings.
- The course will always be a valid string.

```typescript
const student = new Student("Jane", "Smith", "Science");
console.log(student.getFullName()); // Returns "Jane Smith"
console.log(student.getDetails());  // Returns "Jane Smith is enrolled in Science"
```

---

Once you've completed the exercise, run the following command to test your solution:

```bash
npm test
```
If all tests are successful, you have completed the exercise 🎉