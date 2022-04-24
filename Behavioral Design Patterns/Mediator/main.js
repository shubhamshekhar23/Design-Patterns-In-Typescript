var CarPlant1 = /** @class */ (function () {
    function CarPlant1(cartype, numOfCars) {
        this.cartype = cartype;
        this.numOfCars = numOfCars;
    }
    CarPlant1.prototype.getType = function () {
        return this.cartype;
    };
    CarPlant1.prototype.bookCar = function () {
        if (this.numOfCars > 0) {
            this.numOfCars--;
            console.log("One car booked");
            return true;
        }
        else {
            console.log("Sorry, Car out of Stock");
            return false;
        }
    };
    return CarPlant1;
}());
var CarPlant2 = /** @class */ (function () {
    function CarPlant2(cartype, numOfCars) {
        this.cartype = cartype;
        this.numOfCars = numOfCars;
    }
    CarPlant2.prototype.getType = function () {
        return this.cartype;
    };
    CarPlant2.prototype.bookCar = function () {
        if (this.numOfCars > 5) {
            // this plant ensures he has atleast 5 cars for emergency
            this.numOfCars--;
            console.log("One " + this.cartype + " car booked");
            return true;
        }
        else {
            console.log("Sorry, Car out of Stock");
            return false;
        }
    };
    return CarPlant2;
}());
var CarPlant3 = /** @class */ (function () {
    function CarPlant3(cartype, numOfCars) {
        this.cartype = cartype;
        this.numOfCars = numOfCars;
    }
    CarPlant3.prototype.getType = function () {
        return this.cartype;
    };
    CarPlant3.prototype.bookCar = function () {
        if (this.numOfCars > 8) {
            // this plant ensures he has atleast 3 cars for emergency
            this.numOfCars--;
            console.log("One " + this.cartype + " car booked");
            return true;
        }
        else {
            console.log("Sorry, Car out of Stock");
            return false;
        }
    };
    return CarPlant3;
}());
var ShowRoomMediator = /** @class */ (function () {
    function ShowRoomMediator() {
        this.carPlantList = new Array();
    }
    ShowRoomMediator.prototype.addPlant = function (cp) {
        this.carPlantList.push(cp);
    };
    ShowRoomMediator.prototype.request = function (cartype) {
        this.carPlantList.forEach(function (plant) {
            if (plant.getType() == cartype) {
                plant.bookCar();
            }
        });
    };
    return ShowRoomMediator;
}());
var Customer = /** @class */ (function () {
    function Customer(name, mdtr) {
        this.name = name;
        this.mdtr = mdtr;
    }
    Customer.prototype.requestBooking = function (cartype) {
        this.mdtr.request(cartype);
    };
    return Customer;
}());
function main() {
    var c1 = new CarPlant1("sportscar", 10);
    var c2 = new CarPlant2("sedancar", 9);
    var c3 = new CarPlant3("luxurycar", 6);
    var mdtr = new ShowRoomMediator();
    mdtr.addPlant(c1);
    mdtr.addPlant(c2);
    mdtr.addPlant(c3);
    var john = new Customer("John", mdtr);
    john.requestBooking("luxurycar");
}
main();
/* We have 3 car plants, one for each cartype(luxury, sedan and sports)that has their own condition of booking cars based on how many cars are in the stock; we have a mediator that is showroom that take the customer's request for booking and then requests the carplant based on the type of car requested; In this way showroom acts as a mediator and customer doesn't have to deal with the carplant directly */
