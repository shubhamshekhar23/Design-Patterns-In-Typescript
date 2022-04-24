interface CarPlan {
  paintCar();
}

interface ColorFinishPlan {
  paint();
  chooseColor();
  startPaintMachine();
}

class GreenFinish implements ColorFinishPlan {
  public paint() {
    this.chooseColor();
    this.startPaintMachine();
    console.log("Car Painted Successfully");
  }
  public chooseColor() {
    console.log("Green Color Chosen Successfully");
  }
  public startPaintMachine() {
    console.log("Paint Machine Started");
  }
}

class LuxuryCar implements CarPlan {
  cf: ColorFinishPlan;

  constructor(cf: ColorFinishPlan) {
    this.cf = cf;
  }

  public paintCar() {
    this.cf.paint();
  }
}

class RedFinish implements ColorFinishPlan {
  public paint() {
    this.chooseColor();
    this.startPaintMachine();
    console.log("Car Painted Successfully");
  }
  public chooseColor() {
    console.log("Red Color Chosen Successfully");
  }
  public startPaintMachine() {
    console.log("Paint Machine Started");
  }
}

class SedanCar implements CarPlan {
  cf: ColorFinishPlan;

  constructor(cf: ColorFinishPlan) {
    this.cf = cf;
  }

  public paintCar() {
    this.cf.paint();
  }
}

class SportsCar implements CarPlan {
  cf: ColorFinishPlan;

  constructor(cf: ColorFinishPlan) {
    this.cf = cf;
  }

  public paintCar() {
    this.cf.paint();
  }
}

function main() {
  try {
    let sc1: CarPlan = new SportsCar(new RedFinish());
    sc1.paintCar();
    let lc1: CarPlan = new LuxuryCar(new GreenFinish());
    lc1.paintCar();
  } catch (e) {
    console.log("whatsup");
  }
}

main();

/**There are 2 abstarction here : colorfinish and car; we want them to vary indepenednly; so that if a differemt machine or some methods added in
 * colorfinish we dont want to change the car class; So we built a bridge between car class and color class by using composition; putting color
 * object inside car object and most importantly calling color objects method inside car; this way we can change colorFInish the way we like
 * and car remains free.
 */
