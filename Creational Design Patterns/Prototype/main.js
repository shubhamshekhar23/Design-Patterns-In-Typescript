var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DatabasePlanet = /** @class */ (function () {
    function DatabasePlanet() {
    }
    DatabasePlanet.getPlanet = function () {
        // a method that is very costly
        console.log("this operation took 1 minute");
        return "Mars";
    };
    return DatabasePlanet;
}());
var SuperCarPlan = /** @class */ (function () {
    function SuperCarPlan() {
    }
    /* override this */
    SuperCarPlan.prototype.getClone = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return SuperCarPlan;
}());
var SuperAlienCar = /** @class */ (function (_super) {
    __extends(SuperAlienCar, _super);
    // constructor();
    function SuperAlienCar(planet) {
        var _this = _super.call(this) || this;
        _this.alienDriver = "jadoo"; // by default
        if (planet) {
            _this.planet = planet;
        }
        else {
            _this.planet = DatabasePlanet.getPlanet(); // costly operation
        }
        return _this;
    }
    SuperAlienCar.prototype.setDriver = function (name) {
        this.alienDriver = name;
    };
    SuperAlienCar.prototype.getDetails = function () {
        console.log("driver name is " + this.alienDriver);
    };
    SuperAlienCar.prototype.getClone = function () {
        var clone = new SuperAlienCar(this.planet);
        return clone;
    };
    return SuperAlienCar;
}(SuperCarPlan));
function main() {
    try {
        var S1 = new SuperAlienCar();
        S1.getDetails();
        console.log(S1);
        var S2 = S1.getClone();
        S2.setDriver("ET");
        S2.getDetails();
        console.log(S2);
    }
    catch (e) {
        console.log(e);
    }
}
main();
// # its better to clone an object than to create a new object when some sopertaions in creating object is very costly like in this example to get the planet name for each alienCar is very costly; so we use the data fetched when creating the first object , we clone it and we can set the new proeprties to it
// # we can also craete a new method craete clone that will use a different constructor and accepot arguments from the already created object properties
// like below( not using cloneable interface) :
/* public SuperAlienCar(String planetdata)
{
this.planet = planetdata;
}

public createClone()
{
return new SuperAlienCar(this.planet);
}*/
