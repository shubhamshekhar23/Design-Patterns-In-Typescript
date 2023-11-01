export function main() {
  try {
    let cs1: CarStatusPlan = CarProvider.getCarStatus("sports");
    cs1.setKmCovered(21);
    cs1.setMileage(30);
    cs1.getStatus();
  } catch (e) {
    console.log("whatsup");
  }
}
main();

/* - After a car is purchased by a customer, he can get the details, when should he go for servicing; he can go online to the website of the car
 and get the car object(carstatusobject) by specifying which type of car he has.; then he can set the km covered by the car and how much mileage 
 he is getting; then based on the internal formula of the system; the advide is returned;

- Now , ther are so many request for the same type of car like thousands; and we have to create carstausobject for all of them;
 this is not a good idea; thats why we cache the object created and then return that same object to the next customer if the type matches
 so in this way we only have 3 cars in the cache and there is no memory overload. 
 
- We not considering concurrent request in the case. assumption, at one time only one car status object be used.
 */

interface CarStatusPlan {
  getStatus();
  setKmCovered(p: number);
  setMileage(p: number);
}

interface PlanMap<T, U> {
  T?: U;
}

class CarProvider {
  private static hm: PlanMap<String, CarStatusPlan> = {};

  public static getCarStatus(type: String): CarStatusPlan {
    let c: CarStatusPlan = null;

    if (CarProvider.hm["type"]) {
      c = CarProvider.hm["type"];
    } else {
      switch (type) {
        case "sports":
          c = new SportsCarStatus();
          break;
        case "sedan":
          c = new SedanCarStatus();
          break;
        case "luxury":
          c = new LuxuryCarStatus();
          break;
        default:
          console.log("Unreachable code!");
      }
      CarProvider.hm["type"] = c;
    }
    return c;
  }
}

class LuxuryCarStatus implements CarStatusPlan {
  private type: String = "luxury";
  public kmCovered: number;
  public mileage: number;

  public setKmCovered(kmCovered: number) {
    this.kmCovered = kmCovered;
  }

  public setMileage(mileage: number) {
    this.mileage = mileage;
  }
  public getStatus() {
    if (this.kmCovered / this.mileage > 10) {
      console.log("You should consider servicing your car");
    } else {
      console.log("Everything is fine with your " + this.type + " car");
    }
  }
}

class SedanCarStatus implements CarStatusPlan {
  private type: String = "sedan";
  public kmCovered: number;
  public mileage: number;

  public setKmCovered(kmCovered: number) {
    this.kmCovered = kmCovered;
  }

  public setMileage(mileage: number) {
    this.mileage = mileage;
  }

  public getStatus() {
    if (this.kmCovered / this.mileage > 30) {
      console.log("You should consider servicing your car");
    } else {
      console.log("Everything is fine with your " + this.type + " car");
    }
  }
}

class SportsCarStatus implements CarStatusPlan {
  private type: String = "sports";
  public kmCovered: number;
  public mileage: number;

  public setKmCovered(kmCovered: number) {
    this.kmCovered = kmCovered;
  }

  public setMileage(mileage: number) {
    this.mileage = mileage;
  }

  public getStatus() {
    if (this.kmCovered / this.mileage > 20) {
      console.log("You should consider servicing your car");
    } else {
      console.log("Everything is fine with your " + this.type + " car");
    }
  }
}
