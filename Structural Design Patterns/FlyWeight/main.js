var CarProvider = /** @class */ (function () {
    function CarProvider() {
    }
    CarProvider.getCarStatus = function (type) {
        var c = null;
        if (CarProvider.hm["type"])
            c = CarProvider.hm["type"];
        else {
            switch (type) {
                case "sports":
                    c = new SportsCarStatus();
                    break;
                case "sedan":
                    c = new SedanCarStatus();
                    break;
                case "luxury":
                    c = new LuxuryCarStatus();
                    break;
                default:
                    console.log("Unreachable code!");
            }
            CarProvider.hm["type"] = c;
        }
        return c;
    };
    CarProvider.hm = {};
    return CarProvider;
}());
var LuxuryCarStatus = /** @class */ (function () {
    function LuxuryCarStatus() {
        this.type = "luxury";
    }
    LuxuryCarStatus.prototype.setKmCovered = function (kmCovered) {
        this.kmCovered = kmCovered;
    };
    LuxuryCarStatus.prototype.setMileage = function (mileage) {
        this.mileage = mileage;
    };
    LuxuryCarStatus.prototype.getStatus = function () {
        if (this.kmCovered / this.mileage > 10) {
            console.log("You should consider servicing your car");
        }
        else {
            console.log("Everything is fine with your " + this.type + " car");
        }
    };
    return LuxuryCarStatus;
}());
var SedanCarStatus = /** @class */ (function () {
    function SedanCarStatus() {
        this.type = "sedan";
    }
    SedanCarStatus.prototype.setKmCovered = function (kmCovered) {
        this.kmCovered = kmCovered;
    };
    SedanCarStatus.prototype.setMileage = function (mileage) {
        this.mileage = mileage;
    };
    SedanCarStatus.prototype.getStatus = function () {
        if (this.kmCovered / this.mileage > 30) {
            console.log("You should consider servicing your car");
        }
        else {
            console.log("Everything is fine with your " + this.type + " car");
        }
    };
    return SedanCarStatus;
}());
var SportsCarStatus = /** @class */ (function () {
    function SportsCarStatus() {
        this.type = "sports";
    }
    SportsCarStatus.prototype.setKmCovered = function (kmCovered) {
        this.kmCovered = kmCovered;
    };
    SportsCarStatus.prototype.setMileage = function (mileage) {
        this.mileage = mileage;
    };
    SportsCarStatus.prototype.getStatus = function () {
        if (this.kmCovered / this.mileage > 20) {
            console.log("You should consider servicing your car");
        }
        else {
            console.log("Everything is fine with your " + this.type + " car");
        }
    };
    return SportsCarStatus;
}());
function main() {
    try {
        var cs1 = CarProvider.getCarStatus("sports");
        cs1.setKmCovered(21);
        cs1.setMileage(30);
        cs1.getStatus();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
/* After a car is purchased by a customer, he can get the details wghen shoudl he go for servicing; he can go online to teh website of the car
 and get the car object(carstatusobject) by specifying which type of car he has.; then he can set the kmcovered by the car and how much mileage
 he is getting; then based on the internal formula of the system; tghe advide is returned;*/
/*Now , ther are so many request for the same type of car like thousands; and we have to create carstausobject for all of them;
 this is not a good idea; thats why we cache the object created and then return that same object to the next customer if the type matches
 so in this way we only have 3 cars in the cache and there is nnno memory overload. */
