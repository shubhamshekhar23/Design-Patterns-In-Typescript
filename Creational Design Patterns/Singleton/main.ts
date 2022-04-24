class GodCreation {
  private static God: GodCreation = null;
  name: String;
  private constructor(name: String) {
    this.name = name;
  }
  static createMyGod(name: String): GodCreation {
    if (GodCreation.God == null) {
      /* only can be done from inside class */
      GodCreation.God = new GodCreation(name);
    }
    return GodCreation.God;
  }
  getName(): String {
    return this.name;
  }
}

function main() {
  let myGod: GodCreation = GodCreation.createMyGod("Jesus");
  console.log(myGod);
  let myGod2: GodCreation = GodCreation.createMyGod("Indra");
  console.log(myGod2);
}
main();

// Both mygod and mygod2 have same reference, same pointer value;
