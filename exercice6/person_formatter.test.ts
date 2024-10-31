import { Person, Student } from "./person_formatter";

test("Person returns full name", () => {
  const person = new Person("John", "Doe");
  expect(person.getFullName()).toBe("John Doe");
});

test("Student returns full details", () => {
  const student = new Student("John", "Doe", "Math");
  expect(student.getDetails()).toBe("John Doe is enrolled in Math");
});

test("Student inherits from Person", () => {
  const student = new Student("Jane", "Doe", "Science");
  expect(student.getFullName()).toBe("Jane Doe");
});
