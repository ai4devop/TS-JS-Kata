const { chanson_biere } = require("./chanson_biere");

describe("chanson_biere", () => {
  test("should print the correct song for 3 bottles", () => {
    console.log = jest.fn();
    chanson_biere(3);
    expect(console.log).toHaveBeenCalledWith(
      "3 bouteilles de bière au mur, 3 bouteilles de bière!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Enlevez-en une, faites-la circuler, 2 bouteilles de bière au mur!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "2 bouteilles de bière au mur, 2 bouteilles de bière!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Enlevez-en une, faites-la circuler, 1 bouteille de bière au mur!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "1 bouteille de bière au mur, 1 bouteille de bière!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Enlevez-en une, faites-la circuler, fini bouteilles de bière au mur!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Fini les bouteilles de bière au mur, fini les bouteilles de bière !"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Va au magasin en acheter encore, 99 bouteilles de bière au mur!\n"
    );
  });

  test("should print the correct song for 1 bottle", () => {
    console.log = jest.fn();
    chanson_biere(1);
    expect(console.log).toHaveBeenCalledWith(
      "1 bouteille de bière au mur, 1 bouteille de bière!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Enlevez-en une, faites-la circuler, fini bouteilles de bière au mur!\n"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Fini les bouteilles de bière au mur, fini les bouteilles de bière !"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Va au magasin en acheter encore, 99 bouteilles de bière au mur!\n"
    );
  });
});
