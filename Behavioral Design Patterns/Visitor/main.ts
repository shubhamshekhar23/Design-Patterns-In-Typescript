export function main() {
  let c: CarPlan = new LuxuryCar("shubham");
  let cv: CarPriceVisitor = new CarPriceVisitor();
  c.getPrice(cv);

  let j: CarPlan = new SedanCar("Shekhar Suman");
  j.getPrice(cv);
}

main();

/* This example has defined classes for sedan, sports and luxury car; these are supposed to be already finished; now we want to add a new method to these class ,we dont have any choice but to make modification inside the class; but due to open closed principle, we will create a new class visitor that will implement the method required by these classes that is getprice() which  calls the metod of the visitor that will implement method for different cars based on the input this. */

interface CarPlan {
  getPrice(cp: CarPriceVisitor);
}

class CarPriceVisitor {
  public visitLuxury(c: LuxuryCar): number {
    let p: number;
    let extra_luxury_cost: number = 100;
    p =
      c.carBodyPrice +
      c.carEnginePrice +
      c.carElectronicsPrice +
      c.carPaintPrice;
    return p + extra_luxury_cost;
  }

  public visitSedan(c: SedanCar): number {
    let p: number;
    let extra_sedan_cost: number = 50;
    p =
      c.carBodyPrice +
      c.carEnginePrice +
      c.carElectronicsPrice +
      c.carPaintPrice;
    return p + extra_sedan_cost;
  }

  public visitSports(c: SportsCar): number {
    let p: number;
    let extra_sports_cost: number = 30;
    p =
      c.carBodyPrice +
      c.carEnginePrice +
      c.carElectronicsPrice +
      c.carPaintPrice;
    return p + extra_sports_cost;
  }
}

class LuxuryCar implements CarPlan {
  owner: String;
  carBodyPrice: number = 500;
  carEnginePrice: number = 200;
  carElectronicsPrice: number = 300;
  carPaintPrice: number = 100;

  constructor(name: String) {
    this.owner = name;
  }

  public setBodyPrice(p: number) {
    this.carBodyPrice = p;
  }

  public setEnginePrice(p: number) {
    this.carEnginePrice = p;
  }

  public setElectronicsPrice(p: number) {
    this.carElectronicsPrice = p;
  }

  public setPaintPrice(p: number) {
    this.carPaintPrice = p;
  }

  public getPrice(cp: CarPriceVisitor) {
    let p: number = cp.visitLuxury(this);
    console.log(
      "Mr. " + this.owner + " please pay " + p + " dollars for the LuxuryCar"
    );
  }
}

class SedanCar implements CarPlan {
  owner: String;
  carBodyPrice: number = 300;
  carEnginePrice: number = 100;
  carElectronicsPrice: number = 30;
  carPaintPrice: number = 10;

  constructor(name: String) {
    this.owner = name;
  }

  public setBodyPrice(p: number) {
    this.carBodyPrice = p;
  }

  public setEnginePrice(p: number) {
    this.carEnginePrice = p;
  }

  public setElectronicsPrice(p: number) {
    this.carElectronicsPrice = p;
  }

  public setPaintPrice(p: number) {
    this.carPaintPrice = p;
  }

  public getPrice(cp: CarPriceVisitor) {
    let p: number = cp.visitSedan(this);
    console.log(
      "Mr. " + this.owner + " please pay " + p + " dollars for the SedanCar"
    );
  }
}

class SportsCar implements CarPlan {
  owner: String;
  carBodyPrice: number = 300;
  carEnginePrice: number = 100;
  carElectronicsPrice: number = 30;
  carPaintPrice: number = 10;

  constructor(name: String) {
    this.owner = name;
  }

  public setBodyPrice(p: number) {
    this.carBodyPrice = p;
  }

  public setEnginePrice(p: number) {
    this.carEnginePrice = p;
  }

  public setElectronicsPrice(p: number) {
    this.carElectronicsPrice = p;
  }

  public setPaintPrice(p: number) {
    this.carPaintPrice = p;
  }

  public getPrice(cp: CarPriceVisitor) {
    let p: number = cp.visitSports(this);
    console.log(
      "Mr. " + this.owner + " please pay " + p + " dollars for the SportsCar"
    );
  }
}
