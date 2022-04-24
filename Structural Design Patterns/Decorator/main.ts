interface SystemPlan {
  getSystemDetails();
  getSystemCost(): number;
}

abstract class SystemDecorator implements SystemPlan {
  c1: SystemPlan;

  constructor(c1: SystemPlan) {
    this.c1 = c1;
  }

  public getSystemCost(): number {
    return this.c1.getSystemCost();
  }
  public getSystemDetails() {
    this.c1.getSystemDetails();
  }
}

class AutoPilot extends SystemDecorator {
  constructor(c1: SystemPlan) {
    super(c1);
  }

  public getSystemCost(): number {
    return 75 + this.c1.getSystemCost();
  }
  public getSystemDetails() {
    this.c1.getSystemDetails();
    console.log("Auto Pilot System");
  }
}

class BikeSystem implements SystemPlan {
  cost: number;
  BikeSystem() {
    this.cost = 150;
  }
  public getSystemCost(): number {
    return this.cost;
  }

  public getSystemDetails() {
    console.log("Basic Default system of the Bike");
  }
}

class CarSystem implements SystemPlan {
  cost: number;
  CarSystem() {
    this.cost = 250;
  }
  public getSystemCost(): number {
    return this.cost;
  }

  public getSystemDetails() {
    console.log("Basic Default system of the Car");
  }
}

class NitroBoost extends SystemDecorator {
  constructor(c1: SystemPlan) {
    super(c1);
  }

  public getSystemCost(): number {
    return 25 + this.c1.getSystemCost();
  }
  public getSystemDetails() {
    this.c1.getSystemDetails();
    console.log("Nitro Boost System");
  }
}

class SecuritySystem extends SystemDecorator {
  constructor(c1: SystemPlan) {
    super(c1);
  }

  public getSystemCost(): number {
    return 25 + this.c1.getSystemCost();
  }
  public getSystemDetails() {
    this.c1.getSystemDetails();
    console.log("Security System");
  }
}

function main() {
  try {
    let c1: SystemPlan = new NitroBoost(
      new SecuritySystem(new AutoPilot(new CarSystem()))
    );
    console.log("Total cost of the system is " + c1.getSystemCost());
    c1.getSystemDetails();
    let b1: SystemPlan = new NitroBoost(
      new SecuritySystem(new AutoPilot(new BikeSystem()))
    );
    console.log("Total cost of the system is " + b1.getSystemCost());
    b1.getSystemDetails();
  } catch (e) {
    console.log("whatsup");
  }
}
main();

/*This pattern is used when you have a lot of inherited objects of different types; in this example if we had not used decorator, then we will 
 have to create 3 separate carsystem e.g nitro system, security seystem etc. if we had bus system and bike system also then there would be 
 9 subclasses*/
