class Car {
  protected location: String;
  protected id: number;
  protected type: String;
  car() {}
  getDetails() {
    console.log(
      "I am a " +
        this.type +
        " with id " +
        this.id +
        ", manufactured in " +
        this.location
    );
  }
  getLocation() {
    console.log("I was manufactured in " + this.location);
  }
}

enum CarType {
  SEDAN_USA,
  SPORTSCAR_USA,
  LUXURYCAR_USA,
  SEDAN_INDIA,
  SPORTSCAR_INDIA,
  LUXURYCAR_INDIA,
  SEDAN_CHINA,
  SPORTSCAR_CHINA,
  LUXURYCAR_CHINA,
}

class Myabstractfactory {
  static createCar(car: CarType): Car {
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
  }
}

class Sedan extends Car {
  static globalId: number = 0;
  constructor(location: String) {
    super();
    Sedan.globalId++;
    this.id = Sedan.globalId;
    this.location = location;
    this.type = "sedan";
  }
}

class Sportscar extends Car {
  static globalId: number = 0;
  constructor(location: String) {
    super();
    Sportscar.globalId++;
    this.id = Sportscar.globalId;
    this.location = location;
    this.type = "sports car";
  }
}

class Luxurycar extends Car {
  static globalId: number = 0;
  constructor(location: String) {
    super();
    Luxurycar.globalId++;
    this.id = Luxurycar.globalId;
    this.location = location;
    this.type = "luxury car";
  }
}

class Usafactory extends Myabstractfactory {
  static createCarIn(cart: CarType): Car {
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
  }
}

class Indiafactory extends Myabstractfactory {
  static createCarIn(cart: CarType): Car {
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
  }
}

class Chinafactory extends Myabstractfactory {
  static createCarIn(cart: CarType): Car {
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
  }
}

function main() {
  try {
    let car1: Car = Myabstractfactory.createCar(CarType.SEDAN_USA);
    car1.getDetails();
    let car2: Car = Myabstractfactory.createCar(CarType.SEDAN_USA);
    car2.getDetails();
    let car3: Car = Myabstractfactory.createCar(CarType.SPORTSCAR_CHINA);
    car3.getDetails();
    let car4: Car = Myabstractfactory.createCar(CarType.LUXURYCAR_INDIA);
    car4.getDetails();
    let car5: Car = Myabstractfactory.createCar(CarType.LUXURYCAR_USA);
    car5.getDetails();
  } catch (e) {
    console.log("whatsup");
  }
}

main();

// what we want is the client to call only a single method and create car according to the modelid( say luxurycar_usa), which will have the information
// from where it will be manufactured; so the client doesnt have to worry about giving the location as a paramaeter; based on the model no. given we will
// identify wheree do we want this car to be manufauctured; so there is one single abstract factory which uses switch case statements and determine
// which factory will create which car
