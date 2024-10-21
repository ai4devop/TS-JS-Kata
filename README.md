# JavaScript/Typescript Katas augmented by your AI assistant :robot:

Bienvenue dans le repository JavaScript/Typescript Katas ! Ce projet comprend plusieurs Katas qui vous aideront à pratiquer des compétences algorithmiques en JavaScript/Typescript. Chaque Kata est stocké dans une branche dédiée `exercice1`, `exercice2`, etc..
Votre tâche est d'écrire l'algorithme d'une fonction résolvant les test présent dans ce fichier se terminant par `.test.ts` ou `.test.js`. 

N'oubliez pas votre assistant d'IA générative doit vous aider à résoudre ces challenges

## Comment utiliser ce repository

### Guide étape par étape

1. **Cloner le dépôt :**
   Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone <url-du-dépôt>
   cd <nom-du-dépôt>
   ```

2. **Installer les dépendances :**
   Ce projet utilise `npm` pour la gestion des dépendances. Exécutez la commande suivante pour installer les packages nécessaires :
   ```bash
   npm install
   ```

3. **Changer de branche pour un Kata :**
   Chaque Kata est disponible sur une branche dédiée. Pour commencer, passez à la branche correspondant au Kata que vous souhaitez résoudre. Par exemple :
   ```bash
   git checkout exercice1
   ```

4. **Résoudre le Kata :**
   Ouvrez le fichier correspondant (par ex., `chanson_biere.js` pour la branche `exercice1`) et implémentez la fonction demandée en vous basant sur les instructions. Vous trouverez les instructions dans le README.md.

5. **Exécuter les tests :**
   Une fois que vous avez écrit votre solution, exécutez la suite de tests pour vérifier que votre code fonctionne. Les tests vous guideront étape par étape. À mesure que vous progressez, de plus en plus de tests réussiront. Utilisez la commande suivante pour exécuter les tests :
   ```bash
   npm test
   ```

6. **Déboguer et affiner :**
   Si les tests ne passent pas, examinez la sortie des tests et ajustez votre code jusqu'à ce que tous les tests passent. Concentrez-vous sur un test à la fois, et travaillez jusqu'à ce que tous les tests soient réussis.

### Aperçu des Katas
Chaque Kata se concentre sur un aspect différent de JavaScript. Voici les détails de chacun :

#### **1. Chanson Bière (Branche : `exercice1`)**
Écrivez un programme qui affiche les paroles de la chanson "99 Bottles of Beer", en partant d'un nombre de bouteilles donné.
- **Fichier à mettre à jour :** `chanson_biere.js`
- **Tests :** `chanson_biere.test.js`
- **Compétences :** Boucles, manipulation de chaînes de caractères

#### **2.  (Branche : `exercice2`)**
Écrivez une méthode TypeScript qui calcule la somme des entiers entre une valeur minimale et une valeur maximale (min et max inclus) en utilisant la récursion. Si la valeur minimale est supérieure à la valeur maximale, la méthode doit renvoyer -1.
- **Fichier à mettre à jour :** `sumRange.ts`
- **Tests :** `sumRange.test.ts`
- **Compétences :** Récursion, manipulation des entiers, conditions logiques.  

#### **3. Splitter par taille (Branche : `exercice3`)**
Implémentez une méthode size_splitter qui prend un tableau de mots et un entier représentant une taille. La méthode doit diviser le tableau en deux groupes : le premier contenant les mots de la taille donnée et le second contenant tous les autres mots. Les deux groupes doivent être triés par ordre alphabétique.
- **Fichier à mettre à jour :** `sizeSplitter.ts`
- **Tests :** `sizeSplitter.test.ts`
- **Compétences :** Manipulation des tableaux, tri, fonctions de filtrage 

#### **4. Countdown Timer (Branche : `exercice4`)**
Écrivez une fonction qui calcule le nombre de jours restants jusqu'à une date future donnée. Si la date est passée, renvoyez `0`.
- **Fichier à mettre à jour :** `countdown_timer.js`
- **Tests :** `countdown_timer.test.js`
- **Compétences :** Manipulation des dates et du temps

#### **5. Array Element Finder (Branche : `exercice5`)**
Écrivez une fonction qui renvoie la première paire de nombres dans un tableau dont la somme est égale à une valeur cible. Renvoyez un tableau vide si aucune paire n'est trouvée.
- **Fichier à mettre à jour :** `array_element_finder.js`
- **Tests :** `array_element_finder.test.js`
- **Compétences :** Manipulation des tableaux, réflexion algorithmique

#### **6. Person Formatter basé sur les classes (Branche : `exercice6`)**
Écrivez une classe `Person` qui renvoie un nom complet, et une classe `Student` qui hérite de `Person` pour ajouter un cours et renvoyer les détails de l'étudiant.
- **Fichier à mettre à jour :** `person_formatter.js`
- **Tests :** `person_formatter.test.js`
- **Compétences :** Programmation orientée objet, classes, héritage

### Exécution des tests
Chaque branche contient son propre ensemble de tests. Après avoir écrit votre code, vous pouvez vérifier s'il fonctionne en exécutant les tests. Exécutez simplement :
```bash
npm test
```
Les tests vous donneront des retours, montrant quels tests passent et quels tests échouent. Continuez à affiner votre solution jusqu'à ce que tous les tests passent.

### Exemple rapide : Kata Chanson Bière
Voici comment vous aborderiez le Kata **Chanson Bière** :

1. Basculez sur la branche :
   ```bash
   git checkout exercice1
   ```

2. Ouvrez le fichier `chanson_biere.js` et écrivez votre solution.

3. Exécutez les tests :
   ```bash
   npm test
   ```

4. Modifiez votre solution en fonction des retours des tests jusqu'à ce que tous les tests passent.
---
