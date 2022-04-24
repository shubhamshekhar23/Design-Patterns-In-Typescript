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
var CarPlan = /** @class */ (function () {
    function CarPlan() {
    }
    CarPlan.prototype.constructCar = function () {
        this.assembleCarBody();
        this.assembleEngine();
        this.assembleCarElectronics();
        this.paintingCar();
        this.finishCar();
    };
    return CarPlan;
}());
var LuxuryCar = /** @class */ (function (_super) {
    __extends(LuxuryCar, _super);
    function LuxuryCar(l) {
        var _this = _super.call(this) || this;
        _this.color = l;
        return _this;
    }
    LuxuryCar.prototype.assembleCarBody = function () {
        console.log("luxury carbody assembled ");
    };
    LuxuryCar.prototype.assembleEngine = function () {
        console.log("luxury carengine attached ");
    };
    LuxuryCar.prototype.assembleCarElectronics = function () {
        console.log("luxury electronics assembled ");
    };
    LuxuryCar.prototype.paintingCar = function () {
        console.log("Luxury car is painted in " + this.color);
    };
    LuxuryCar.prototype.finishCar = function () {
        console.log(this.color + " Luxury car is finished");
    };
    return LuxuryCar;
}(CarPlan));
var SedanCar = /** @class */ (function (_super) {
    __extends(SedanCar, _super);
    function SedanCar(l) {
        var _this = _super.call(this) || this;
        _this.color = l;
        return _this;
    }
    SedanCar.prototype.assembleCarBody = function () {
        console.log("Sedan carbody assembled ");
    };
    SedanCar.prototype.assembleEngine = function () {
        console.log("Sedan carengine attached ");
    };
    SedanCar.prototype.assembleCarElectronics = function () {
        console.log("Sedan electronics assembled ");
    };
    SedanCar.prototype.paintingCar = function () {
        console.log("Sedan car is painted in " + this.color);
    };
    SedanCar.prototype.finishCar = function () {
        console.log(this.color + " Sedan car is finished");
    };
    return SedanCar;
}(CarPlan));
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(l) {
        var _this = _super.call(this) || this;
        _this.color = l;
        return _this;
    }
    SportsCar.prototype.assembleCarBody = function () {
        console.log("Sports carbody assembled ");
    };
    SportsCar.prototype.assembleEngine = function () {
        console.log("Sports carengine attached ");
    };
    SportsCar.prototype.assembleCarElectronics = function () {
        console.log("Sports electronics assembled ");
    };
    SportsCar.prototype.paintingCar = function () {
        console.log("Sports car is painted in " + this.color);
    };
    SportsCar.prototype.finishCar = function () {
        console.log(this.color + " Sports car is finished");
    };
    return SportsCar;
}(CarPlan));
function main() {
    var l1 = new SportsCar("red");
    l1.constructCar();
}
main();
/*This example implements template method which says that implement a family of algorithm( or a set of functions) that will be implemented
in the abstract superclass i.e CarPlan that is constructing car which has separate steps like carbodyassemble, assembleengine etc.
and there are 3 different types of car luxury , sedan etc. all of these 3 will have different ways of constructing car steps; so they will implement methods differently but constructing car always use those methods. so Use final keyword inside abstract superclass*/
