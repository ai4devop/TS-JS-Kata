# 🙇 Exercice 6 ~ 10 minutes

## 💪 Challenge

Écrivez deux classes, `Person` et `Student`, pour modéliser les relations simples entre des personnes et leurs cours.

- La classe `Person` doit avoir deux attributs : `firstName` et `lastName`, et une méthode `getFullName()` qui retourne le nom complet.
- La classe `Student` doit hériter de `Person` et ajouter un nouvel attribut `course`. La classe doit aussi implémenter une méthode `getDetails()` qui retourne une chaîne de caractères contenant le nom complet de l'étudiant et le cours auquel il est inscrit.

### Exemple

```javascript
const student = new Student("John", "Doe", "Math");
student.getFullName(); // Retourne "John Doe"
student.getDetails();  // Retourne "John Doe est inscrit en Math"
```

### Input

- Tout d'abord, implémentez la classe `Person`.
- Ensuite, implémentez la classe `Student` qui hérite de `Person`.

### Output

- Pour `Person`, la méthode `getFullName()` doit retourner une chaîne de caractères avec le nom complet.
- Pour `Student`, la méthode `getDetails()` doit retourner une chaîne de caractères avec le nom de l'étudiant et son cours.

### Contraintes

- Les prénoms et noms de famille seront toujours des chaînes non vides.
- Le cours sera toujours une chaîne valide.

```typescript
const student = new Student("Jane", "Smith", "Science");
console.log(student.getFullName()); // Retourne "Jane Smith"
console.log(student.getDetails());  // Retourne "Jane Smith est inscrit en Science"
```