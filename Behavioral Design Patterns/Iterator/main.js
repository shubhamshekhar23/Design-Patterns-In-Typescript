var Car = /** @class */ (function () {
    function Car(type) {
        this.type = type;
        this.carId = Car.id;
        Car.id++;
    }
    Car.prototype.getDetails = function () {
        console.log("Car type : " + this.type + " having id: " + this.carId);
    };
    Car.id = 1;
    return Car;
}());
var CarIterator = /** @class */ (function () {
    function CarIterator(cl) {
        this.curr_index = 0;
        this.cl = cl;
        this.size = this.cl.length;
    }
    CarIterator.prototype.hasNext = function () {
        if (this.size > this.curr_index && this.cl[this.curr_index] != null) {
            return true;
        }
        return false;
    };
    CarIterator.prototype.next = function () {
        this.curr_index++;
        return this.cl[this.curr_index - 1];
    };
    return CarIterator;
}());
var CarList = /** @class */ (function () {
    function CarList(size) {
        this.numberOfCars = 0;
        this.carlist = new Array(size);
        this.size = size;
    }
    CarList.prototype.add = function (c) {
        if (this.numberOfCars < this.size) {
            this.carlist[this.numberOfCars] = c;
            this.numberOfCars++;
        }
        else {
            console.log("Array is full");
        }
    };
    CarList.prototype.getIterator = function () {
        return new CarIterator(this.carlist);
    };
    return CarList;
}());
var Customer = /** @class */ (function () {
    function Customer(name, car) {
        this.name = name;
        this.custId = Customer.id;
        Customer.id++;
        this.car = car;
    }
    Customer.prototype.getDetails = function () {
        console.log(this.name +
            " with id " +
            this.custId +
            " is interested in car - " +
            this.car.type);
    };
    Customer.id = 1;
    return Customer;
}());
var CustomerIterator = /** @class */ (function () {
    function CustomerIterator(cl) {
        this.curr_index = 0;
        this.cl = cl;
        this.size = this.cl.length;
    }
    CustomerIterator.prototype.hasNext = function () {
        if (this.size > this.curr_index && this.cl[this.curr_index] != null) {
            return true;
        }
        return false;
    };
    CustomerIterator.prototype.next = function () {
        this.curr_index++;
        return this.cl[this.curr_index - 1];
    };
    return CustomerIterator;
}());
var CustomerList = /** @class */ (function () {
    function CustomerList(size) {
        this.numberOfCusts = 0;
        this.customerlist = new Array(size);
        this.size = size;
    }
    CustomerList.prototype.add = function (c) {
        if (this.numberOfCusts < this.size) {
            this.customerlist[this.numberOfCusts] = c;
            this.numberOfCusts++;
        }
        else {
            console.log("Array is full");
        }
    };
    CustomerList.prototype.getIterator = function () {
        return new CustomerIterator(this.customerlist);
    };
    return CustomerList;
}());
function main() {
    var c1 = new Car("sedan");
    var c2 = new Car("sports");
    var c3 = new Car("luxury");
    var c4 = new Car("super");
    var c5 = new Car("alien");
    var c6 = new Car("intelligent");
    var cl = new CarList(13);
    cl.add(c1);
    cl.add(c2);
    cl.add(c3);
    cl.add(c4);
    cl.add(c5);
    cl.add(c6);
    var p1 = new Customer("skhbd", c1);
    var p2 = new Customer("skjd", c2);
    var p3 = new Customer("weqt", c3);
    var p4 = new Customer("vbnvbn", c4);
    var p5 = new Customer("ukk", c5);
    var p6 = new Customer("eryreye", c6);
    var pl = new CustomerList(12);
    pl.add(p1);
    pl.add(p2);
    pl.add(p3);
    pl.add(p4);
    pl.add(p5);
    pl.add(p6);
    // Above code is only data population
    var custit = pl.getIterator();
    while (custit.hasNext()) {
        var c = custit.next();
        c.getDetails();
    }
    var carit = cl.getIterator();
    while (carit.hasNext()) {
        var c = carit.next();
        c.getDetails();
    }
}
main();
/* Iterator pattern is used when we have a list of a particular object like an array of same type of objects and we want to give a functionality of iterating through the objects in a similar way; so we implement a iteratorplan and collectionplan that provides an iterator that has similar functionality for every list of objects and have list class implement collectionplan which provides ietartor via one method (that implements iterator plan) */
