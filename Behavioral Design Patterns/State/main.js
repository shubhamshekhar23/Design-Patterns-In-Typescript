var Car = /** @class */ (function () {
    function Car() {
        this.gear = null;
        this.gear = new NeutralGear();
    }
    Car.prototype.start = function (gs) {
        this.gear = gs;
    };
    Car.prototype.changeGear = function (gs) {
        this.gear = gs;
    };
    Car.prototype.accelerate = function (speed) {
        this.gear.setSpeed(speed);
    };
    return Car;
}());
var FirstGear = /** @class */ (function () {
    function FirstGear() {
    }
    FirstGear.prototype.setSpeed = function (speed) {
        if (speed > 50) {
            console.log("Can not go Beyond 50Km/h; Change gear");
        }
        else {
            console.log("car is at Speed :" + speed);
        }
    };
    return FirstGear;
}());
var NeutralGear = /** @class */ (function () {
    function NeutralGear() {
    }
    NeutralGear.prototype.setSpeed = function (speed) {
        if (speed > 0) {
            console.log("The Car is in neutral state; Try changing gear");
        }
    };
    return NeutralGear;
}());
var SecondGear = /** @class */ (function () {
    function SecondGear() {
    }
    SecondGear.prototype.setSpeed = function (speed) {
        if (speed > 200) {
            console.log("Car not go Beyond 200Km/h; Try Nitro Boost to go superfast");
        }
        else {
            console.log("car is at Speed :" + speed);
        }
    };
    return SecondGear;
}());
var SuperNitroGear = /** @class */ (function () {
    function SuperNitroGear() {
    }
    SuperNitroGear.prototype.setSpeed = function (speed) {
        if (speed > 500) {
            console.log("Car not go Beyond 500Km/h; This is not JetPlane man!!");
        }
        else {
            console.log("car is at Speed :" + speed);
        }
    };
    return SuperNitroGear;
}());
function main() {
    var g0 = new NeutralGear();
    var g1 = new FirstGear();
    var g2 = new SecondGear();
    var g3 = new SuperNitroGear();
    var c = new Car();
    c.start(g0);
    c.accelerate(20);
    c.changeGear(g1);
    c.accelerate(20);
    c.changeGear(g2);
    c.accelerate(250);
    c.changeGear(g3);
    c.accelerate(501);
}
main();
/* OUTPUT -

The Car is in neutral state; Try changing gear
car is at Speed :20
Car not go Beyond 200Km/h; Try Nitro Boost to go superfast
Car not go Beyond 500Km/h; This is not JetPlane man!!

*/
/* This example has a car that can be started with any gear; you have to provide a gear as an argument; then changegear can be called; when accelerate to some speed be called, then gear checks the speed limit of which it can afford, then it displays that message */
