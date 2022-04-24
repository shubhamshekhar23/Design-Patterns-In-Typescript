var GodCreation = /** @class */ (function () {
    function GodCreation(name) {
        this.name = name;
    }
    GodCreation.createMyGod = function (name) {
        if (GodCreation.God == null) {
            /* only can be done from inside class */
            GodCreation.God = new GodCreation(name);
        }
        return GodCreation.God;
    };
    GodCreation.prototype.getName = function () {
        return this.name;
    };
    GodCreation.God = null;
    return GodCreation;
}());
function main() {
    var myGod = GodCreation.createMyGod("Jesus");
    console.log(myGod);
    var myGod2 = GodCreation.createMyGod("Indra");
    console.log(myGod2);
}
main();
// Both mygod and mygod2 have same reference, same pointer value;
