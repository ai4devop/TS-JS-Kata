## Exercise 1 - Beer Song 🍺 ~ 10 minutes

Write a program that returns the lyrics to the song 99 Bottles of Beer.

The program should take the starting number of bottles as an argument, provided via the command line when executing the program. It should behave as shown below.

You need to define your method `beer_song(beer_number_atTheStart)` in the `beer_song.js` file. Then, you should run the program and expect the following output:

```bash
5 bottles of beer on the wall, 5 bottles of beer!
Take one down, pass it around, 4 bottles of beer on the wall!

4 bottles of beer on the wall, 4 bottles of beer!
Take one down, pass it around, 3 bottles of beer on the wall!

3 bottles of beer on the wall, 3 bottles of beer!
Take one down, pass it around, 2 bottles of beer on the wall!

2 bottles of beer on the wall, 2 bottles of beer!
Take one down, pass it around, 1 bottle of beer on the wall!

1 bottle of beer on the wall, 1 bottle of beer!
Take one down, pass it around, no more bottles of beer on the wall!

No more bottles of beer on the wall, no more bottles of beer!
Go to the store and buy some more, 99 bottles of beer on the wall!
```

## 📝 Guidelines

- The `beer_song(beer_number_atTheStart)` method takes parameters greater than 0.
- Once you have generated your code, you can run the test
  ```bash
  mvn test
  ```
- If all tests are successful, you have completed the exercise 🎉
