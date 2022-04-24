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
var SystemDecorator = /** @class */ (function () {
    function SystemDecorator(c1) {
        this.c1 = c1;
    }
    SystemDecorator.prototype.getSystemCost = function () {
        return this.c1.getSystemCost();
    };
    SystemDecorator.prototype.getSystemDetails = function () {
        this.c1.getSystemDetails();
    };
    return SystemDecorator;
}());
var AutoPilot = /** @class */ (function (_super) {
    __extends(AutoPilot, _super);
    function AutoPilot(c1) {
        return _super.call(this, c1) || this;
    }
    AutoPilot.prototype.getSystemCost = function () {
        return 75 + this.c1.getSystemCost();
    };
    AutoPilot.prototype.getSystemDetails = function () {
        this.c1.getSystemDetails();
        console.log("Auto Pilot System");
    };
    return AutoPilot;
}(SystemDecorator));
var BikeSystem = /** @class */ (function () {
    function BikeSystem() {
    }
    BikeSystem.prototype.BikeSystem = function () {
        this.cost = 150;
    };
    BikeSystem.prototype.getSystemCost = function () {
        return this.cost;
    };
    BikeSystem.prototype.getSystemDetails = function () {
        console.log("Basic Default system of the Bike");
    };
    return BikeSystem;
}());
var CarSystem = /** @class */ (function () {
    function CarSystem() {
    }
    CarSystem.prototype.CarSystem = function () {
        this.cost = 250;
    };
    CarSystem.prototype.getSystemCost = function () {
        return this.cost;
    };
    CarSystem.prototype.getSystemDetails = function () {
        console.log("Basic Default system of the Car");
    };
    return CarSystem;
}());
var NitroBoost = /** @class */ (function (_super) {
    __extends(NitroBoost, _super);
    function NitroBoost(c1) {
        return _super.call(this, c1) || this;
    }
    NitroBoost.prototype.getSystemCost = function () {
        return 25 + this.c1.getSystemCost();
    };
    NitroBoost.prototype.getSystemDetails = function () {
        this.c1.getSystemDetails();
        console.log("Nitro Boost System");
    };
    return NitroBoost;
}(SystemDecorator));
var SecuritySystem = /** @class */ (function (_super) {
    __extends(SecuritySystem, _super);
    function SecuritySystem(c1) {
        return _super.call(this, c1) || this;
    }
    SecuritySystem.prototype.getSystemCost = function () {
        return 25 + this.c1.getSystemCost();
    };
    SecuritySystem.prototype.getSystemDetails = function () {
        this.c1.getSystemDetails();
        console.log("Security System");
    };
    return SecuritySystem;
}(SystemDecorator));
function main() {
    try {
        var c1 = new NitroBoost(new SecuritySystem(new AutoPilot(new CarSystem())));
        console.log("Total cost of the system is " + c1.getSystemCost());
        c1.getSystemDetails();
        var b1 = new NitroBoost(new SecuritySystem(new AutoPilot(new BikeSystem())));
        console.log("Total cost of the system is " + b1.getSystemCost());
        b1.getSystemDetails();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
/*This pattern is used when you have a lot of inherited objects of different types; in this example if we had not used decorator, then we will
 have to create 3 separate carsystem e.g nitro system, security seystem etc. if we had bus system and bike system also then there would be
 9 subclasses*/
