# 📅 Exercice4 ~ 10 Minutes

## Challenge

Votre tâche est d'implémenter une fonction qui calcule combien de jours restent jusqu'à une date future donnée.

Vous recevrez une seule entrée, qui est une chaîne de caractères représentant une date future au format `AAAA-MM-JJ`.

Si la date est déjà passée, votre fonction doit retourner `0`.

### Exemple

```typescript
days_until("2024-12-25"); // Retourne un nombre positif (en fonction de la date actuelle)
days_until("2023-01-01"); // Retourne 0 (date passée)
```

## Input

Une seule chaîne de caractères future_date au format AAAA-MM-JJ.

## Output

Retournez un entier représentant le nombre de jours restants jusqu'à la date future. Si la date est passée, retournez 0.

## Contraintes

- Vous pouvez supposer que l'entrée sera toujours une chaîne de date valide.
- La date actuelle est le jour où la fonction est exécutée.