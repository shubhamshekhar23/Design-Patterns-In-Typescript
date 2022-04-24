var GreenFinish = /** @class */ (function () {
    function GreenFinish() {
    }
    GreenFinish.prototype.paint = function () {
        this.chooseColor();
        this.startPaintMachine();
        console.log("Car Painted Successfully");
    };
    GreenFinish.prototype.chooseColor = function () {
        console.log("Green Color Chosen Successfully");
    };
    GreenFinish.prototype.startPaintMachine = function () {
        console.log("Paint Machine Started");
    };
    return GreenFinish;
}());
var LuxuryCar = /** @class */ (function () {
    function LuxuryCar(cf) {
        this.cf = cf;
    }
    LuxuryCar.prototype.paintCar = function () {
        this.cf.paint();
    };
    return LuxuryCar;
}());
var RedFinish = /** @class */ (function () {
    function RedFinish() {
    }
    RedFinish.prototype.paint = function () {
        this.chooseColor();
        this.startPaintMachine();
        console.log("Car Painted Successfully");
    };
    RedFinish.prototype.chooseColor = function () {
        console.log("Red Color Chosen Successfully");
    };
    RedFinish.prototype.startPaintMachine = function () {
        console.log("Paint Machine Started");
    };
    return RedFinish;
}());
var SedanCar = /** @class */ (function () {
    function SedanCar(cf) {
        this.cf = cf;
    }
    SedanCar.prototype.paintCar = function () {
        this.cf.paint();
    };
    return SedanCar;
}());
var SportsCar = /** @class */ (function () {
    function SportsCar(cf) {
        this.cf = cf;
    }
    SportsCar.prototype.paintCar = function () {
        this.cf.paint();
    };
    return SportsCar;
}());
function main() {
    try {
        var sc1 = new SportsCar(new RedFinish());
        sc1.paintCar();
        var lc1 = new LuxuryCar(new GreenFinish());
        lc1.paintCar();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
/**There are 2 abstarction here : colorfinish and car; we want them to vary indepenednly; so that if a differemt machine or some methods added in
 * colorfinish we dont want to change the car class; So we built a bridge between car class and color class by using composition; putting color
 * object inside car object and most importantly calling color objects method inside car; this way we can change colorFInish the way we like
 * and car remains free.
 */
