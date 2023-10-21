export function main() {
  try {
    let c1: Car = new Car();
    c1.startCar();
    let g1: GasSystemPlan = new GasSystem();
    let pg1: PetrolSystemAdapter = new PetrolSystemAdapter(g1);
    c1.setSystem(pg1);
    c1.startCar();
  } catch (e) {
    console.log("whatsup");
  }
}

main();

/**A car has by default petrol system installed; we can craete new gas system and install in the car; we can setsystem() but it accepts only petrolsystem
 * interface; so we craete an adapter to convert gassystem to petrolsysytem and get the energy from there.
 */

interface GasSystemPlan {
  provideGasEnergy();
}

interface PetrolSystemPlan {
  providePetrolEnergy();
}

class Car {
  p1: PetrolSystemPlan;
  public constructor() {
    this.p1 = new PetrolSystem();
  }

  public setSystem(p1: PetrolSystemPlan) {
    this.p1 = p1;
  }

  public startCar() {
    this.p1.providePetrolEnergy();
    console.log("Car started successfully");
  }
}

class GasSystem implements GasSystemPlan {
  public provideGasEnergy() {
    console.log("Energy provided by Gas");
  }
}

class PetrolSystem implements PetrolSystemPlan {
  public providePetrolEnergy() {
    console.log("Petrol Provided Energy");
  }
}

class PetrolSystemAdapter implements PetrolSystemPlan {
  g1: GasSystemPlan;
  constructor(g1: GasSystemPlan) {
    this.g1 = g1;
  }

  public providePetrolEnergy() {
    this.g1.provideGasEnergy();
  }
}
