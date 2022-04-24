var Car = /** @class */ (function () {
    function Car() {
        this.p1 = new PetrolSystem();
    }
    Car.prototype.setSystem = function (p1) {
        this.p1 = p1;
    };
    Car.prototype.startCar = function () {
        this.p1.providePetrolEnergy();
        console.log("Car started successfully");
    };
    return Car;
}());
var GasSystem = /** @class */ (function () {
    function GasSystem() {
    }
    GasSystem.prototype.provideGasEnergy = function () {
        console.log("Energy provided by Gas");
    };
    return GasSystem;
}());
var PetrolSystem = /** @class */ (function () {
    function PetrolSystem() {
    }
    PetrolSystem.prototype.providePetrolEnergy = function () {
        console.log("Petrol Provided Energy");
    };
    return PetrolSystem;
}());
var PetrolSystemAdapter = /** @class */ (function () {
    function PetrolSystemAdapter(g1) {
        this.g1 = g1;
    }
    PetrolSystemAdapter.prototype.providePetrolEnergy = function () {
        this.g1.provideGasEnergy();
    };
    return PetrolSystemAdapter;
}());
function main() {
    try {
        var c1 = new Car();
        c1.startCar();
        var g1 = new GasSystem();
        var pg1 = new PetrolSystemAdapter(g1);
        c1.setSystem(pg1);
        c1.startCar();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
/**A car has by default petrol system installed; we can craete new gas system and install in the car; we can setsystem() but it accepts only petrolsystem
 * interface; so we craete an adapter to convert gassystem to petrolsysytem and get the energy from there.
 */
