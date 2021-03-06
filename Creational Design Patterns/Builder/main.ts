class CarPlan {
  public setEngine(engine: CarType) {}
  public setCarBody(carBody: CarType) {}
  public setElectronics(electronics: CarType) {}
  public getDetails() {}
}

enum CarType {
  SEDAN,
  SPORTS,
  LUXURY,
}

class CarParts {
  public getName(): String {
    return "shubham";
  }
}

class CarBody extends CarParts {
  public carBody: String;

  public constructor(car: CarType) {
    super();
    switch (car) {
      case CarType.SEDAN:
        this.carBody = "SedanCarBody";
        break;
      case CarType.SPORTS:
        this.carBody = "SportsCarBody";
        break;
      case CarType.LUXURY:
        this.carBody = "LuxuryCarBody";
        break;
    }
  }
  public getName(): String {
    return this.carBody;
  }
}

class Car extends CarPlan {
  private engine: CarParts;
  private carBody: CarParts;
  private electronics: CarParts;
  public setEngine(car: CarType) {
    this.engine = new Engine(car);
  }
  public setCarBody(car: CarType) {
    this.carBody = new CarBody(car);
  }
  public setElectronics(car: CarType) {
    this.electronics = new Electronics(car);
  }
  public getDetails() {
    console.log(
      this.engine.getName() +
        " " +
        this.carBody.getName() +
        " " +
        this.electronics.getName()
    );
    // console.log("shubham" );
  }
}

class CarBuilderPlan {
  public car: Car;
  public buildCarBody() {}
  public buildEngine() {}
  public buildElectronics() {}
  public getCar(): Car {
    return this.car;
  }
  public getCarDetails() {
    this.car.getDetails();
  }
}

class Engine extends CarParts {
  public engineNo: String;

  public constructor(car: CarType) {
    super();
    switch (car) {
      case CarType.SEDAN:
        this.engineNo = "SedanEngine";
        break;
      case CarType.SPORTS:
        this.engineNo = "SportsEngine";
        break;
      case CarType.LUXURY:
        this.engineNo = "LuxuryEngine";
        break;
    }
  }
  public getName(): String {
    return this.engineNo;
  }
}

class Electronics extends CarParts {
  public electronics: String;

  public constructor(car: CarType) {
    super();
    switch (car) {
      case CarType.SEDAN:
        this.electronics = "SedanElectronics";
        break;
      case CarType.SPORTS:
        this.electronics = "SportsElectronics";
        break;
      case CarType.LUXURY:
        this.electronics = "LuxuryElectronics";
        break;
    }
  }
  public getName(): String {
    return this.electronics;
  }
}

class Engineer {
  carbuilder: CarBuilderPlan;
  public constructor(carbuilder: CarBuilderPlan) {
    this.carbuilder = carbuilder;
  }

  public constructCar() {
    this.carbuilder.buildCarBody();
    this.carbuilder.buildEngine();
    this.carbuilder.buildElectronics();
  }

  public getCar(): Car {
    return this.carbuilder.getCar();
  }

  public getCarDetails() {
    this.carbuilder.getCarDetails();
  }
}

class SedanBuilder extends CarBuilderPlan {
  private cartype: CarType = CarType.SEDAN;
  constructor() {
    super();
    this.car = new Car();
    console.log("sead built");
  }
  public buildCarBody() {
    console.log("whatsup");
    this.car.setCarBody(this.cartype);
  }
  public buildEngine() {
    this.car.setEngine(this.cartype);
  }
  public buildElectronics() {
    this.car.setElectronics(this.cartype);
  }
}

class SportsBuilder extends CarBuilderPlan {
  private cartype: CarType = CarType.SPORTS;
  constructor() {
    super();
    this.car = new Car();
  }
  public buildCarBody() {
    this.car.setCarBody(this.cartype);
  }
  public buildEngine() {
    this.car.setEngine(this.cartype);
  }
  public buildElectronics() {
    this.car.setElectronics(this.cartype);
  }
}

class LuxuryBuilder extends CarBuilderPlan {
  private cartype: CarType = CarType.LUXURY;
  constructor() {
    super();
    this.car = new Car();
  }
  public buildCarBody() {
    this.car.setCarBody(this.cartype);
  }
  public buildEngine() {
    this.car.setEngine(this.cartype);
  }
  public buildElectronics() {
    this.car.setElectronics(this.cartype);
  }
}

function main() {
  try {
    let sedanbuilder1: CarBuilderPlan = new SportsBuilder();
    let E1: Engineer = new Engineer(sedanbuilder1);
    E1.constructCar();
    E1.getCarDetails();
    //  console.log("whatsup");
  } catch (e) {
    console.log("whatsup");
  }
}

main();

/* 
   1.  We have main classes as Car, Carplan, and carParts that are necessary to build cars of type sedan, sports and luxury. Car creation is a complicated process and its done by step by step, by building engine, carbody , electrnoics etc. So, We use a builder and we expose the builder to client so that he doesnt have to deal with the nuances of the complication. Thas where we create the Carbuilderplan and sedanbuilder, luxurybuilder and sportsbuilder. Engineer uses this builder to create cars.
   2. Even if , we want to expose one method inside carBuilderPlan buildWholeCar() that will run all the steps inside constructCar() by engineer, we can do it also. But, its better to expose, each steps as we might not need to run all of them according to requirements.
*/
