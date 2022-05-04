class HeadquarterCreation {
  private static Headquarter: HeadquarterCreation = null;
  name: String;
  private constructor(name: String) {
    this.name = name;
  }
  static createMyHeadquarter(name: String): HeadquarterCreation {
    if (HeadquarterCreation.Headquarter == null) {
      /* only can be done from inside class */
      HeadquarterCreation.Headquarter = new HeadquarterCreation(name);
    }
    return HeadquarterCreation.Headquarter;
  }
  getName(): String {
    return this.name;
  }
}

function main() {
  let myHeadquarter: HeadquarterCreation =
    HeadquarterCreation.createMyHeadquarter("Berlin");
  console.log(myHeadquarter.name);
  let myHeadquarter2: HeadquarterCreation =
    HeadquarterCreation.createMyHeadquarter("Munich");
  console.log(myHeadquarter2.name);
}
main();

// Both myHeadquarter and myHeadquarter2 have same reference, same pointer value;
