function main() {
  try {
    let car1: Mercedesfactory = Mercedesfactory.create(CarType.SEDAN);
    car1.showme();
    let car2: Mercedesfactory = Mercedesfactory.create(CarType.LUXURYCAR);
    car2.showme();
    let car3: Mercedesfactory = Mercedesfactory.create(CarType.SPORTSCAR);
    car3.showme();
    let car4: Mercedesfactory = Mercedesfactory.create(CarType.SEDAN);
    car4.showme();
  } catch (e) {}
}

main();

/**
 * use static method to craete products in a factory, that will handle the switch case statementa ccording to the argument passed
 * all produts will extend from the factory class
 * client code should not be affected when we add a new cartype in our sysytem
 */

enum CarType {
  SEDAN,
  SPORTSCAR,
  LUXURYCAR,
}

class Mercedesfactory {
  static create(car: CarType): Mercedesfactory {
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
  }

  showme() {}
}

class Sedan extends Mercedesfactory {
  static globalid: number = 0;
  carId: number;
  public constructor() {
    super();
    Sedan.globalid++;
    this.carId = Sedan.globalid;
  }

  public showme() {
    console.log("I am Sedan car with id " + this.carId);
  }
}

class Sportscar extends Mercedesfactory {
  static globalid: number = 0;
  carId: number;
  constructor() {
    super();
    Sportscar.globalid++;
    this.carId = Sportscar.globalid;
  }

  showme() {
    console.log("I am sports car with id " + this.carId);
  }
}

class Luxurycar extends Mercedesfactory {
  static globalid: number = 0;
  carId: number;
  constructor() {
    super();
    Luxurycar.globalid++;
    this.carId = Luxurycar.globalid;
  }

  showme() {
    console.log("I am luxury car with id " + this.carId);
  }
}
