var CarPriceVisitor = /** @class */ (function () {
    function CarPriceVisitor() {
    }
    CarPriceVisitor.prototype.visitLuxury = function (c) {
        var p;
        var extra_luxury_cost = 100;
        p =
            c.carBodyPrice +
                c.carEnginePrice +
                c.carElectronicsPrice +
                c.carPaintPrice;
        return p + extra_luxury_cost;
    };
    CarPriceVisitor.prototype.visitSedan = function (c) {
        var p;
        var extra_sedan_cost = 50;
        p =
            c.carBodyPrice +
                c.carEnginePrice +
                c.carElectronicsPrice +
                c.carPaintPrice;
        return p + extra_sedan_cost;
    };
    CarPriceVisitor.prototype.visitSports = function (c) {
        var p;
        var extra_sports_cost = 30;
        p =
            c.carBodyPrice +
                c.carEnginePrice +
                c.carElectronicsPrice +
                c.carPaintPrice;
        return p + extra_sports_cost;
    };
    return CarPriceVisitor;
}());
var LuxuryCar = /** @class */ (function () {
    function LuxuryCar(name) {
        this.carBodyPrice = 500;
        this.carEnginePrice = 200;
        this.carElectronicsPrice = 300;
        this.carPaintPrice = 100;
        this.owner = name;
    }
    LuxuryCar.prototype.setBodyPrice = function (p) {
        this.carBodyPrice = p;
    };
    LuxuryCar.prototype.setEnginePrice = function (p) {
        this.carBodyPrice = p;
    };
    LuxuryCar.prototype.setElectronicsPrice = function (p) {
        this.carBodyPrice = p;
    };
    LuxuryCar.prototype.setPaintPrice = function (p) {
        this.carBodyPrice = p;
    };
    LuxuryCar.prototype.getPrice = function (cp) {
        var p = cp.visitLuxury(this);
        console.log("Mr. " + this.owner + " please pay " + p + " dollars for the LuxuryCar");
    };
    return LuxuryCar;
}());
var SedanCar = /** @class */ (function () {
    function SedanCar(name) {
        this.carBodyPrice = 300;
        this.carEnginePrice = 100;
        this.carElectronicsPrice = 30;
        this.carPaintPrice = 10;
        this.owner = name;
    }
    SedanCar.prototype.setBodyPrice = function (p) {
        this.carBodyPrice = p;
    };
    SedanCar.prototype.setEnginePrice = function (p) {
        this.carBodyPrice = p;
    };
    SedanCar.prototype.setElectronicsPrice = function (p) {
        this.carBodyPrice = p;
    };
    SedanCar.prototype.setPaintPrice = function (p) {
        this.carBodyPrice = p;
    };
    SedanCar.prototype.getPrice = function (cp) {
        var p = cp.visitSedan(this);
        console.log("Mr. " + this.owner + " please pay " + p + " dollars for the SedanCar");
    };
    return SedanCar;
}());
var SportsCar = /** @class */ (function () {
    function SportsCar(name) {
        this.carBodyPrice = 300;
        this.carEnginePrice = 100;
        this.carElectronicsPrice = 30;
        this.carPaintPrice = 10;
        this.owner = name;
    }
    SportsCar.prototype.setBodyPrice = function (p) {
        this.carBodyPrice = p;
    };
    SportsCar.prototype.setEnginePrice = function (p) {
        this.carBodyPrice = p;
    };
    SportsCar.prototype.setElectronicsPrice = function (p) {
        this.carBodyPrice = p;
    };
    SportsCar.prototype.setPaintPrice = function (p) {
        this.carBodyPrice = p;
    };
    SportsCar.prototype.getPrice = function (cp) {
        var p = cp.visitSports(this);
        console.log("Mr. " + this.owner + " please pay " + p + " dollars for the SportsCar");
    };
    return SportsCar;
}());
function main() {
    var c = new LuxuryCar("shubham");
    var cv = new CarPriceVisitor();
    c.getPrice(cv);
    var j = new SedanCar("Shekhar Suman");
    j.getPrice(cv);
}
main();
/* This example has defined classes for sedan, sports and luxury car; these are supposed to be already finished; now we want to add a new method to these class ,we dont have any choice but to make modification inside the class; but due to open closed principle, we will create a new class visitor that will implement the method required by these classes that is getprice() which  calls the metod of the visitor that will implement method for different cars based on the input this. */
