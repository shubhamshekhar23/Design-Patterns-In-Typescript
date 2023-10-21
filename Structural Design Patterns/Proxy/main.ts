export function main() {
  try {
    let d: Driver = new Driver(26, "shubham");
    let c: CarProxy = new CarProxy();
    c.setDriver(d);
    c.driveCar();
  } catch (e) {
    console.log("whatsup");
  }
}
main();

/* proxy means in place of something; so here we using car poroxy in plavce of just car class; we want a check wheter driver is adult to drive, we put this functionality in the proxy class and then client class that proxy insted of calling direntcly the car; all the checks
are done in proxy; */

/*this pattern is the one that is used in proxy internet to ban some sites; instead of diectly connecting to the internet
uts connected to the proxy which checks what site it is tryingt to connect if its not banned then it lets the connection go
otherwise it prevents */

interface CarPlan {
  driveCar();
}

class Car implements CarPlan {
  public driveCar() {
    console.log("The car is Driven");
  }
}

class CarProxy implements CarPlan {
  driver: Driver = null;
  car: Car;

  constructor() {
    this.car = new Car();
  }

  public driveCar() {
    if (this.driver == null) {
      console.log("Error : Car needs a driver");
    } else if (this.driver.age < 18) {
      console.log("Error : Drivers age must be graeter than 18");
    } else {
      this.car.driveCar();
    }
  }

  public setDriver(d: Driver) {
    this.driver = d;
  }
}

class Driver {
  public age: number;
  public name: String;
  constructor(age: number, name: String) {
    this.age = age;
    this.name = name;
  }
}
