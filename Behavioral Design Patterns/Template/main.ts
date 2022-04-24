abstract class CarPlan {
  public abstract assembleCarBody();
  public abstract assembleEngine();
  public abstract assembleCarElectronics();
  public abstract paintingCar();
  public abstract finishCar();

  public constructCar() {
    this.assembleCarBody();
    this.assembleEngine();
    this.assembleCarElectronics();
    this.paintingCar();
    this.finishCar();
  }
}

class LuxuryCar extends CarPlan {
  color: String;

  constructor(l: String) {
    super();
    this.color = l;
  }

  public assembleCarBody() {
    console.log("luxury carbody assembled ");
  }
  public assembleEngine() {
    console.log("luxury carengine attached ");
  }
  public assembleCarElectronics() {
    console.log("luxury electronics assembled ");
  }
  public paintingCar() {
    console.log("Luxury car is painted in " + this.color);
  }
  public finishCar() {
    console.log(this.color + " Luxury car is finished");
  }
}

class SedanCar extends CarPlan {
  color: String;

  constructor(l: String) {
    super();
    this.color = l;
  }

  public assembleCarBody() {
    console.log("Sedan carbody assembled ");
  }
  public assembleEngine() {
    console.log("Sedan carengine attached ");
  }
  public assembleCarElectronics() {
    console.log("Sedan electronics assembled ");
  }
  public paintingCar() {
    console.log("Sedan car is painted in " + this.color);
  }
  public finishCar() {
    console.log(this.color + " Sedan car is finished");
  }
}

class SportsCar extends CarPlan {
  color: String;

  constructor(l: String) {
    super();
    this.color = l;
  }

  public assembleCarBody() {
    console.log("Sports carbody assembled ");
  }
  public assembleEngine() {
    console.log("Sports carengine attached ");
  }
  public assembleCarElectronics() {
    console.log("Sports electronics assembled ");
  }
  public paintingCar() {
    console.log("Sports car is painted in " + this.color);
  }
  public finishCar() {
    console.log(this.color + " Sports car is finished");
  }
}

function main() {
  let l1: SportsCar = new SportsCar("red");
  l1.constructCar();
}

main();

/*This example implements template method which says that implement a family of algorithm( or a set of functions) that will be implemented
in the abstract superclass i.e CarPlan that is constructing car which has separate steps like carbodyassemble, assembleengine etc.
and there are 3 different types of car luxury , sedan etc. all of these 3 will have different ways of constructing car steps; so they will implement methods differently but constructing car always use those methods. so Use final keyword inside abstract superclass*/
