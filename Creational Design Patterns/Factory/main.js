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
var CarType;
(function (CarType) {
    CarType[CarType["SEDAN"] = 0] = "SEDAN";
    CarType[CarType["SPORTSCAR"] = 1] = "SPORTSCAR";
    CarType[CarType["LUXURYCAR"] = 2] = "LUXURYCAR";
})(CarType || (CarType = {}));
var Mercedesfactory = /** @class */ (function () {
    function Mercedesfactory() {
    }
    Mercedesfactory.create = function (car) {
        switch (car) {
            case CarType.SEDAN:
                return new Sedan();
            case CarType.SPORTSCAR:
                return new Sportscar();
            case CarType.LUXURYCAR:
                return new Luxurycar();
            default:
                throw new Error(" This Car type is not supported now");
        }
    };
    Mercedesfactory.prototype.showme = function () { };
    return Mercedesfactory;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan() {
        var _this = _super.call(this) || this;
        Sedan.globalid++;
        _this.carId = Sedan.globalid;
        return _this;
    }
    Sedan.prototype.showme = function () {
        console.log("I am Sedan car with id " + this.carId);
    };
    Sedan.globalid = 0;
    return Sedan;
}(Mercedesfactory));
var Sportscar = /** @class */ (function (_super) {
    __extends(Sportscar, _super);
    function Sportscar() {
        var _this = _super.call(this) || this;
        Sportscar.globalid++;
        _this.carId = Sportscar.globalid;
        return _this;
    }
    Sportscar.prototype.showme = function () {
        console.log("I am sports car with id " + this.carId);
    };
    Sportscar.globalid = 0;
    return Sportscar;
}(Mercedesfactory));
var Luxurycar = /** @class */ (function (_super) {
    __extends(Luxurycar, _super);
    function Luxurycar() {
        var _this = _super.call(this) || this;
        Luxurycar.globalid++;
        _this.carId = Luxurycar.globalid;
        return _this;
    }
    Luxurycar.prototype.showme = function () {
        console.log("I am luxury car with id " + this.carId);
    };
    Luxurycar.globalid = 0;
    return Luxurycar;
}(Mercedesfactory));
function main() {
    try {
        var car1 = Mercedesfactory.create(CarType.SEDAN);
        car1.showme();
        var car2 = Mercedesfactory.create(CarType.LUXURYCAR);
        car2.showme();
        var car3 = Mercedesfactory.create(CarType.SPORTSCAR);
        car3.showme();
        var car4 = Mercedesfactory.create(CarType.SEDAN);
        car4.showme();
    }
    catch (e) { }
}
main();
// use static method to craete products in a factory, that will handle the switch case statementa ccording to the argument passed
// all produts will extend from the factory class
// client code should not be affected when we add a new cartype in our sysytem
