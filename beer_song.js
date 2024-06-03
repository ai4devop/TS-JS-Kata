#!/usr/bin/env node

function beer_song(beer_start_count) {
  let bottles = parseInt(beer_start_count, 10);

  while (bottles > 0) {
    console.log(
      `${bottles} ${
        bottles === 1 ? "bottle" : "bottles"
      } of beer on the wall, ${bottles} ${
        bottles === 1 ? "bottle" : "bottles"
      } of beer!`
    );
    bottles--;
    console.log(
      `Take one down, pass it around, ${bottles > 0 ? bottles : "no more"} ${
        bottles === 1 ? "bottle" : "bottles"
      } of beer on the wall!\n`
    );
  }

  console.log(`No more bottles of beer on the wall, no more bottles of beer!`);
  console.log(
    `Go to the store and buy some more, 99 bottles of beer on the wall!\n`
  );
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 1 || isNaN(args[0]) || args[0] <= 0) {
    console.error("Usage: node beer_song.js <positive number>");
    process.exit(1);
  }
  beer_song(args[0]);
}

module.exports = { beer_song };
