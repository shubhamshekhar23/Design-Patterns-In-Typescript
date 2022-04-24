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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.car = function () { };
    Car.prototype.getDetails = function () {
        console.log("I am a " +
            this.type +
            " with id " +
            this.id +
            ", manufactured in " +
            this.location);
    };
    Car.prototype.getLocation = function () {
        console.log("I was manufactured in " + this.location);
    };
    return Car;
}());
var CarType;
(function (CarType) {
    CarType[CarType["SEDAN_USA"] = 0] = "SEDAN_USA";
    CarType[CarType["SPORTSCAR_USA"] = 1] = "SPORTSCAR_USA";
    CarType[CarType["LUXURYCAR_USA"] = 2] = "LUXURYCAR_USA";
    CarType[CarType["SEDAN_INDIA"] = 3] = "SEDAN_INDIA";
    CarType[CarType["SPORTSCAR_INDIA"] = 4] = "SPORTSCAR_INDIA";
    CarType[CarType["LUXURYCAR_INDIA"] = 5] = "LUXURYCAR_INDIA";
    CarType[CarType["SEDAN_CHINA"] = 6] = "SEDAN_CHINA";
    CarType[CarType["SPORTSCAR_CHINA"] = 7] = "SPORTSCAR_CHINA";
    CarType[CarType["LUXURYCAR_CHINA"] = 8] = "LUXURYCAR_CHINA";
})(CarType || (CarType = {}));
var Myabstractfactory = /** @class */ (function () {
    function Myabstractfactory() {
    }
    Myabstractfactory.createCar = function (car) {
        switch (car) {
            case CarType.SEDAN_USA:
                return Usafactory.createCarIn(car);
            case CarType.SPORTSCAR_USA:
                return Usafactory.createCarIn(car);
            case CarType.SEDAN_INDIA:
                return Indiafactory.createCarIn(car);
            case CarType.SPORTSCAR_CHINA:
                return Chinafactory.createCarIn(car);
            case CarType.LUXURYCAR_INDIA:
                return Indiafactory.createCarIn(car);
            default:
                return Indiafactory.createCarIn(CarType.SEDAN_INDIA);
        }
    };
    return Myabstractfactory;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(location) {
        var _this = _super.call(this) || this;
        Sedan.globalId++;
        _this.id = Sedan.globalId;
        _this.location = location;
        _this.type = "sedan";
        return _this;
    }
    Sedan.globalId = 0;
    return Sedan;
}(Car));
var Sportscar = /** @class */ (function (_super) {
    __extends(Sportscar, _super);
    function Sportscar(location) {
        var _this = _super.call(this) || this;
        Sportscar.globalId++;
        _this.id = Sportscar.globalId;
        _this.location = location;
        _this.type = "sports car";
        return _this;
    }
    Sportscar.globalId = 0;
    return Sportscar;
}(Car));
var Luxurycar = /** @class */ (function (_super) {
    __extends(Luxurycar, _super);
    function Luxurycar(location) {
        var _this = _super.call(this) || this;
        Luxurycar.globalId++;
        _this.id = Luxurycar.globalId;
        _this.location = location;
        _this.type = "luxury car";
        return _this;
    }
    Luxurycar.globalId = 0;
    return Luxurycar;
}(Car));
var Usafactory = /** @class */ (function (_super) {
    __extends(Usafactory, _super);
    function Usafactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Usafactory.createCarIn = function (cart) {
        switch (cart) {
            case CarType.SEDAN_USA:
                return new Sedan("USA");
            case CarType.LUXURYCAR_USA:
                return new Luxurycar("USA");
            case CarType.SPORTSCAR_USA:
                return new Sportscar("USA");
            default:
                return new Sedan("USA");
        }
    };
    return Usafactory;
}(Myabstractfactory));
var Indiafactory = /** @class */ (function (_super) {
    __extends(Indiafactory, _super);
    function Indiafactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Indiafactory.createCarIn = function (cart) {
        switch (cart) {
            case CarType.SEDAN_INDIA:
                return new Sedan("INDIA");
            case CarType.LUXURYCAR_INDIA:
                return new Luxurycar("INDIA");
            case CarType.SPORTSCAR_INDIA:
                return new Sportscar("INDIA");
            default:
                return new Sedan("USA");
        }
    };
    return Indiafactory;
}(Myabstractfactory));
var Chinafactory = /** @class */ (function (_super) {
    __extends(Chinafactory, _super);
    function Chinafactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chinafactory.createCarIn = function (cart) {
        switch (cart) {
            case CarType.SEDAN_CHINA:
                return new Sedan("CHINA");
            case CarType.LUXURYCAR_CHINA:
                return new Luxurycar("CHINA");
            case CarType.SPORTSCAR_CHINA:
                return new Sportscar("CHINA");
            default:
                return new Sedan("USA");
        }
    };
    return Chinafactory;
}(Myabstractfactory));
function main() {
    try {
        var car1 = Myabstractfactory.createCar(CarType.SEDAN_USA);
        car1.getDetails();
        var car2 = Myabstractfactory.createCar(CarType.SEDAN_USA);
        car2.getDetails();
        var car3 = Myabstractfactory.createCar(CarType.SPORTSCAR_CHINA);
        car3.getDetails();
        var car4 = Myabstractfactory.createCar(CarType.LUXURYCAR_INDIA);
        car4.getDetails();
        var car5 = Myabstractfactory.createCar(CarType.LUXURYCAR_USA);
        car5.getDetails();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
// what we want is the client to call only a single method and create car according to the modelid( say luxurycar_usa), which will have the information
// from where it will be manufactured; so the client doesnt have to worry about giving the location as a paramaeter; based on the model no. given we will
// identify wheree do we want this car to be manufauctured; so there is one single abstract factory which uses switch case statements and determine
// which factory will create which car
