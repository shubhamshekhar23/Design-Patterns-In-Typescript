function main() {
  let myHeadquarter: Headquarter = Headquarter.createHeadquarter("Tesla");
  console.log(myHeadquarter);

  let myHeadquarter2: Headquarter = Headquarter.createHeadquarter("Tesla2");
  console.log(myHeadquarter2);
}

main();

/* 
  Makeing the constructor private so that it can not be invoked from outside and using static variable inside class to mark the reference of the single objcet.
*/

// Both myHeadquarter and myHeadquarter2 have same reference, same pointer value;

class Headquarter {
  private static headquarter: Headquarter = null;
  name: String;

  private constructor(name: String) {
    this.name = name;
  }

  static createHeadquarter(name: String): Headquarter {
    if (Headquarter.headquarter == null) {
      /* only can be done from inside class */
      Headquarter.headquarter = new Headquarter(name);
    }
    return Headquarter.headquarter;
  }

  getName(): String {
    return this.name;
  }
}
