## 🍕 Exercice3 ~ 10 minutes

Implémentez une première méthode size_splitter qui prend deux paramètres : un tableau (array), et un entier (integer) (la taille).
Nous supposerons que le tableau ne contient que des mots de type String, et que la règle arbitraire est de former deux groupes : le premier avec les mots de la taille donnée (deuxième paramètre de la méthode), et l'autre groupe avec tous les autres mots.

La méthode size_splitter doit renvoyer un tableau de deux tableaux – les deux groupes définis ci-dessus – avec le contenu trié par ordre alphabétique.

Exemple:

```bash
const maTable = ["dog", "data", "ask", "my", "win", "two", "beer", "as"];
const result = size_splitter(maTable, 3);
console.log(result);
# output: [["ask", "dog", "two", "win"], ["as", "beer", "data", "my"]]
```
