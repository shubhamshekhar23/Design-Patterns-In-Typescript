export function main() {
  try {
    let S1: SuperAlienCar = new SuperAlienCar();
    S1.getDetails();
    console.log(S1);
    let S2: SuperAlienCar = S1.getClone();
    S2.setDriver("ET");
    S2.getDetails();
    console.log(S2);
  } catch (e) {
    console.log(e);
  }
}

main();

// # its better to clone an object than to create a new object when some opertaions in creating object is very costly like in this example to get the planet name for each alienCar is very costly; so we use the data fetched when creating the first object , we clone it and we can set the new proeprties to it

// # we can also craete a new method craete clone that will use a different constructor and accepot arguments from the already created object properties
// like below( not using cloneable interface) :

/* 
  public SuperAlienCar(String planetdata)
  {
    this.planet = planetdata;
  }

  public createClone()
  {
    return new SuperAlienCar(this.planet);
  }
*/

class DatabasePlanet {
  static getPlanet(): String {
    // a method that is very costly
    console.log("this operation took 1 minute");
    return "Mars";
  }
}

interface Cloneable {
  getClone(): this;
}

abstract class SuperCarPlan implements Cloneable {
  /* override this */
  public getClone() {
    return JSON.parse(JSON.stringify(this));
  }
}

class SuperAlienCar extends SuperCarPlan {
  planet: String;
  private alienDriver: String = "jadoo"; // by default

  /* constructor overloading */
  constructor(planet?: String) {
    super();
    if (planet) {
      this.planet = planet;
    } else {
      this.planet = DatabasePlanet.getPlanet(); // costly operation
    }
  }

  public setDriver(name: String) {
    this.alienDriver = name;
  }

  public getDetails() {
    console.log("driver name is " + this.alienDriver);
  }

  public getClone() {
    let clone = new SuperAlienCar(this.planet);
    return clone;
  }
}
