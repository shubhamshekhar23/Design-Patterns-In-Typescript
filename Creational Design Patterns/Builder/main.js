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
    CarPlan.prototype.setEngine = function (engine) { };
    CarPlan.prototype.setCarBody = function (carBody) { };
    CarPlan.prototype.setElectronics = function (electronics) { };
    CarPlan.prototype.getDetails = function () { };
    return CarPlan;
}());
var CarType;
(function (CarType) {
    CarType[CarType["SEDAN"] = 0] = "SEDAN";
    CarType[CarType["SPORTS"] = 1] = "SPORTS";
    CarType[CarType["LUXURY"] = 2] = "LUXURY";
})(CarType || (CarType = {}));
var CarParts = /** @class */ (function () {
    function CarParts() {
    }
    CarParts.prototype.getName = function () {
        return "shubham";
    };
    return CarParts;
}());
var CarBody = /** @class */ (function (_super) {
    __extends(CarBody, _super);
    function CarBody(car) {
        var _this = _super.call(this) || this;
        switch (car) {
            case CarType.SEDAN:
                _this.carBody = "SedanCarBody";
                break;
            case CarType.SPORTS:
                _this.carBody = "SportsCarBody";
                break;
            case CarType.LUXURY:
                _this.carBody = "LuxuryCarBody";
                break;
        }
        return _this;
    }
    CarBody.prototype.getName = function () {
        return this.carBody;
    };
    return CarBody;
}(CarParts));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.setEngine = function (car) {
        this.engine = new Engine(car);
    };
    Car.prototype.setCarBody = function (car) {
        this.carBody = new CarBody(car);
    };
    Car.prototype.setElectronics = function (car) {
        this.electronics = new Electronics(car);
    };
    Car.prototype.getDetails = function () {
        console.log(this.engine.getName() +
            " " +
            this.carBody.getName() +
            " " +
            this.electronics.getName());
        // console.log("shubham" );
    };
    return Car;
}(CarPlan));
var CarBuilderPlan = /** @class */ (function () {
    function CarBuilderPlan() {
    }
    CarBuilderPlan.prototype.buildCarBody = function () { };
    CarBuilderPlan.prototype.buildEngine = function () { };
    CarBuilderPlan.prototype.buildElectronics = function () { };
    CarBuilderPlan.prototype.getCar = function () {
        return this.car;
    };
    CarBuilderPlan.prototype.getCarDetails = function () {
        this.car.getDetails();
    };
    return CarBuilderPlan;
}());
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(car) {
        var _this = _super.call(this) || this;
        switch (car) {
            case CarType.SEDAN:
                _this.engineNo = "SedanEngine";
                break;
            case CarType.SPORTS:
                _this.engineNo = "SportsEngine";
                break;
            case CarType.LUXURY:
                _this.engineNo = "LuxuryEngine";
                break;
        }
        return _this;
    }
    Engine.prototype.getName = function () {
        return this.engineNo;
    };
    return Engine;
}(CarParts));
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(car) {
        var _this = _super.call(this) || this;
        switch (car) {
            case CarType.SEDAN:
                _this.electronics = "SedanElectronics";
                break;
            case CarType.SPORTS:
                _this.electronics = "SportsElectronics";
                break;
            case CarType.LUXURY:
                _this.electronics = "LuxuryElectronics";
                break;
        }
        return _this;
    }
    Electronics.prototype.getName = function () {
        return this.electronics;
    };
    return Electronics;
}(CarParts));
var Engineer = /** @class */ (function () {
    function Engineer(carbuilder) {
        this.carbuilder = carbuilder;
    }
    Engineer.prototype.constructCar = function () {
        this.carbuilder.buildCarBody();
        this.carbuilder.buildEngine();
        this.carbuilder.buildElectronics();
    };
    Engineer.prototype.getCar = function () {
        return this.carbuilder.getCar();
    };
    Engineer.prototype.getCarDetails = function () {
        this.carbuilder.getCarDetails();
    };
    return Engineer;
}());
var SedanBuilder = /** @class */ (function (_super) {
    __extends(SedanBuilder, _super);
    function SedanBuilder() {
        var _this = _super.call(this) || this;
        _this.cartype = CarType.SEDAN;
        _this.car = new Car();
        console.log("sead built");
        return _this;
    }
    SedanBuilder.prototype.buildCarBody = function () {
        console.log("whatsup");
        this.car.setCarBody(this.cartype);
    };
    SedanBuilder.prototype.buildEngine = function () {
        this.car.setEngine(this.cartype);
    };
    SedanBuilder.prototype.buildElectronics = function () {
        this.car.setElectronics(this.cartype);
    };
    return SedanBuilder;
}(CarBuilderPlan));
var SportsBuilder = /** @class */ (function (_super) {
    __extends(SportsBuilder, _super);
    function SportsBuilder() {
        var _this = _super.call(this) || this;
        _this.cartype = CarType.SPORTS;
        _this.car = new Car();
        return _this;
    }
    SportsBuilder.prototype.buildCarBody = function () {
        this.car.setCarBody(this.cartype);
    };
    SportsBuilder.prototype.buildEngine = function () {
        this.car.setEngine(this.cartype);
    };
    SportsBuilder.prototype.buildElectronics = function () {
        this.car.setElectronics(this.cartype);
    };
    return SportsBuilder;
}(CarBuilderPlan));
var LuxuryBuilder = /** @class */ (function (_super) {
    __extends(LuxuryBuilder, _super);
    function LuxuryBuilder() {
        var _this = _super.call(this) || this;
        _this.cartype = CarType.LUXURY;
        _this.car = new Car();
        return _this;
    }
    LuxuryBuilder.prototype.buildCarBody = function () {
        this.car.setCarBody(this.cartype);
    };
    LuxuryBuilder.prototype.buildEngine = function () {
        this.car.setEngine(this.cartype);
    };
    LuxuryBuilder.prototype.buildElectronics = function () {
        this.car.setElectronics(this.cartype);
    };
    return LuxuryBuilder;
}(CarBuilderPlan));
function main() {
    try {
        var sedanbuilder1 = new SportsBuilder();
        var E1 = new Engineer(sedanbuilder1);
        E1.constructCar();
        E1.getCarDetails();
        //  console.log("whatsup");
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
