class Car {
  gear: GearState = null;

  constructor() {
    this.gear = new NeutralGear();
  }

  public start(gs: GearState) {
    this.gear = gs;
  }

  public changeGear(gs: GearState) {
    this.gear = gs;
  }

  public accelerate(speed: number) {
    this.gear.setSpeed(speed);
  }
}

class FirstGear implements GearState {
  public setSpeed(speed: number) {
    if (speed > 50) {
      console.log("Can not go Beyond 50Km/h; Change gear");
    } else {
      console.log("car is at Speed :" + speed);
    }
  }
}

interface GearState {
  setSpeed(speed: number);
}

class NeutralGear implements GearState {
  public setSpeed(speed: number) {
    if (speed > 0) {
      console.log("The Car is in neutral state; Try changing gear");
    }
  }
}

class SecondGear implements GearState {
  public setSpeed(speed: number) {
    if (speed > 200) {
      console.log("Car not go Beyond 200Km/h; Try Nitro Boost to go superfast");
    } else {
      console.log("car is at Speed :" + speed);
    }
  }
}
class SuperNitroGear implements GearState {
  public setSpeed(speed: number) {
    if (speed > 500) {
      console.log("Car not go Beyond 500Km/h; This is not JetPlane man!!");
    } else {
      console.log("car is at Speed :" + speed);
    }
  }
}

function main() {
  let g0: GearState = new NeutralGear();
  let g1: GearState = new FirstGear();
  let g2: GearState = new SecondGear();
  let g3: GearState = new SuperNitroGear();

  let c: Car = new Car();

  c.start(g0);
  c.accelerate(20);
  c.changeGear(g1);
  c.accelerate(20);
  c.changeGear(g2);
  c.accelerate(250);
  c.changeGear(g3);
  c.accelerate(501);
}

main();

/* OUTPUT - 

The Car is in neutral state; Try changing gear                                                                                               
car is at Speed :20                                                                                                                          
Car not go Beyond 200Km/h; Try Nitro Boost to go superfast                                                                                   
Car not go Beyond 500Km/h; This is not JetPlane man!! 

*/

/* This example has a car that can be started with any gear; you have to provide a gear as an argument; then changegear can be called; when accelerate to some speed be called, then gear checks the speed limit of which it can afford, then it displays that message */
