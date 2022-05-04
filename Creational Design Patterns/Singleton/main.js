var HeadquarterCreation = /** @class */ (function () {
    function HeadquarterCreation(name) {
        this.name = name;
    }
    HeadquarterCreation.createMyHeadquarter = function (name) {
        if (HeadquarterCreation.Headquarter == null) {
            /* only can be done from inside class */
            HeadquarterCreation.Headquarter = new HeadquarterCreation(name);
        }
        return HeadquarterCreation.Headquarter;
    };
    HeadquarterCreation.prototype.getName = function () {
        return this.name;
    };
    HeadquarterCreation.Headquarter = null;
    return HeadquarterCreation;
}());
function main() {
    var myHeadquarter = HeadquarterCreation.createMyHeadquarter("Berlin");
    console.log(myHeadquarter.name);
    var myHeadquarter2 = HeadquarterCreation.createMyHeadquarter("Munich");
    console.log(myHeadquarter2.name);
}
main();
// class GodCreation {
//   private static God: GodCreation = null;
//   name: String;
//   private constructor(name: String) {
//     this.name = name;
//   }
//   static createMyGod(name: String): GodCreation {
//     if (GodCreation.God == null) {
//       /* only can be done from inside class */
//       GodCreation.God = new GodCreation(name);
//     }
//     return GodCreation.God;
//   }
//   getName(): String {
//     return this.name;
//   }
// }
// function main() {
//   let myGod: GodCreation = GodCreation.createMyGod("Jesus");
//   console.log(myGod);
//   let myGod2: GodCreation = GodCreation.createMyGod("Indra");
//   console.log(myGod2);
// }
// main();
// Both mygod and mygod2 have same reference, same pointer value;
