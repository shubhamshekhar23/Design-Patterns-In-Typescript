function main() {
  let c1: Car = new Car("sedan");
  let c2: Car = new Car("sports");
  let c3: Car = new Car("luxury");
  let c4: Car = new Car("super");
  let c5: Car = new Car("alien");
  let c6: Car = new Car("intelligent");

  let cl: CarList = new CarList(13);
  cl.add(c1);
  cl.add(c2);
  cl.add(c3);
  cl.add(c4);
  cl.add(c5);
  cl.add(c6);

  let p1: Customer = new Customer("skhbd", c1);
  let p2: Customer = new Customer("skjd", c2);
  let p3: Customer = new Customer("weqt", c3);
  let p4: Customer = new Customer("vbnvbn", c4);
  let p5: Customer = new Customer("ukk", c5);
  let p6: Customer = new Customer("eryreye", c6);

  let pl: CustomerList = new CustomerList(12);
  pl.add(p1);
  pl.add(p2);
  pl.add(p3);
  pl.add(p4);
  pl.add(p5);
  pl.add(p6);

  // Above code is only data population

  let custit: IteratorPlan<Customer> = pl.getIterator();
  while (custit.hasNext()) {
    let c: Customer = custit.next();
    c.getDetails();
  }

  let carit: IteratorPlan<Car> = cl.getIterator();
  while (carit.hasNext()) {
    let c: Car = carit.next();
    c.getDetails();
  }
}

main();

/* Iterator pattern is used when we have a list of a particular object like an array of same type of objects and we want to give a functionality of iterating through the objects in a similar way; so we implement a iteratorplan and collectionplan that provides an iterator that has similar functionality for every list of objects and have list class implement collectionplan which provides ietartor via one method (that implements iterator plan) */

interface IteratorPlan<T> {
  hasNext(): Boolean;
  next(): T;
}

interface CollectionPlan<T> {
  getIterator(): IteratorPlan<T>;
}

class Car {
  public type: String;
  static id: number = 1;
  public carId: number;

  constructor(type: String) {
    this.type = type;
    this.carId = Car.id;
    Car.id++;
  }

  public getDetails() {
    console.log("Car type : " + this.type + " having id: " + this.carId);
  }
}

class CarIterator implements IteratorPlan<Car> {
  cl: Car[];
  size: number;
  curr_index: number = 0;
  constructor(cl: Car[]) {
    this.cl = cl;
    this.size = this.cl.length;
  }

  public hasNext(): Boolean {
    if (this.size > this.curr_index && this.cl[this.curr_index] != null) {
      return true;
    }
    return false;
  }

  public next(): Car {
    this.curr_index++;
    return this.cl[this.curr_index - 1];
  }
}

class CarList implements CollectionPlan<Car> {
  it: IteratorPlan<Car>;
  carlist: Car[];
  size: number;
  numberOfCars: number = 0;

  constructor(size: number) {
    this.carlist = new Array<Car>(size);
    this.size = size;
  }

  public add(c: Car) {
    if (this.numberOfCars < this.size) {
      this.carlist[this.numberOfCars] = c;
      this.numberOfCars++;
    } else {
      console.log("Array is full");
    }
  }

  public getIterator(): IteratorPlan<Car> {
    return new CarIterator(this.carlist);
  }
}

class Customer {
  static id: number = 1;
  name: string;
  car: Car;
  custId: number;

  constructor(name: string, car: Car) {
    this.name = name;
    this.custId = Customer.id;
    Customer.id++;
    this.car = car;
  }

  public getDetails() {
    console.log(
      this.name +
        " with id " +
        this.custId +
        " is interested in car - " +
        this.car.type
    );
  }
}

class CustomerIterator implements IteratorPlan<Customer> {
  cl: Customer[];
  size: number;
  curr_index: number = 0;
  constructor(cl: Customer[]) {
    this.cl = cl;
    this.size = this.cl.length;
  }

  public hasNext(): boolean {
    if (this.size > this.curr_index && this.cl[this.curr_index] != null) {
      return true;
    }
    return false;
  }

  public next(): Customer {
    this.curr_index++;
    return this.cl[this.curr_index - 1];
  }
}

class CustomerList implements CollectionPlan<Customer> {
  it: IteratorPlan<Customer>;
  customerlist: Customer[];
  size: number;
  numberOfCusts: number = 0;

  constructor(size: number) {
    this.customerlist = new Array<Customer>(size);
    this.size = size;
  }

  public add(c: Customer) {
    if (this.numberOfCusts < this.size) {
      this.customerlist[this.numberOfCusts] = c;
      this.numberOfCusts++;
    } else {
      console.log("Array is full");
    }
  }

  public getIterator(): IteratorPlan<Customer> {
    return new CustomerIterator(this.customerlist);
  }
}
