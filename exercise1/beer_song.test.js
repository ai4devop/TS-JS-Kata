const { beer_song } = require("./beer_song");

describe("beer_song", () => {
  test("should print the correct song for 3 bottles", () => {
    console.log = jest.fn();
    beer_song(3);
    expect(console.log).toHaveBeenCalledWith(
      "3 bottles of beer on the wall, 3 bottles of beer!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Take one down, pass it around, 2 bottles of beer on the wall!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "2 bottles of beer on the wall, 2 bottles of beer!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Take one down, pass it around, 1 bottle of beer on the wall!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "1 bottle of beer on the wall, 1 bottle of beer!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Take one down, pass it around, no more bottles of beer on the wall!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "No more bottles of beer on the wall, no more bottles of beer!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Go to the store and buy some more, 99 bottles of beer on the wall!\n"
    );
  });

  test("should print the correct song for 1 bottle", () => {
    console.log = jest.fn();
    beer_song(1);
    expect(console.log).toHaveBeenCalledWith(
      "1 bottle of beer on the wall, 1 bottle of beer!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Take one down, pass it around, no more bottles of beer on the wall!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "No more bottles of beer on the wall, no more bottles of beer!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Go to the store and buy some more, 99 bottles of beer on the wall!\n"
    );
  });
});
