export function main() {
  let c1: CarPlantPlan = new CarPlant1("sportscar", 10);
  let c2: CarPlantPlan = new CarPlant2("sedancar", 9);
  let c3: CarPlantPlan = new CarPlant3("luxurycar", 6);

  let mdtr: ShowRoomMediator = new ShowRoomMediator();
  mdtr.addPlant(c1);
  mdtr.addPlant(c2);
  mdtr.addPlant(c3);

  let john: Customer = new Customer("John", mdtr);

  john.requestBooking("luxurycar");
}

main();
/* We have 3 car plants, one for each cartype(luxury, sedan and sports)that has their own condition of booking cars based on how many cars are in the stock; we have a mediator that is showroom that take the customer's request for booking and then requests the carplant based on the type of car requested; In this way showroom acts as a mediator and customer doesn't have to deal with the carplant directly */

interface CarPlantPlan {
  bookCar(): Boolean;
  getType(): String;
}

class CarPlant1 implements CarPlantPlan {
  private cartype: String;
  private numOfCars: number;
  constructor(cartype: String, numOfCars: number) {
    this.cartype = cartype;
    this.numOfCars = numOfCars;
  }
  public getType(): String {
    return this.cartype;
  }
  public bookCar(): Boolean {
    if (this.numOfCars > 0) {
      this.numOfCars--;
      console.log("One car booked");
      return true;
    } else {
      console.log("Sorry, Car out of Stock");
      return false;
    }
  }
}

class CarPlant2 implements CarPlantPlan {
  private cartype: String;
  private numOfCars: number;
  constructor(cartype: String, numOfCars: number) {
    this.cartype = cartype;
    this.numOfCars = numOfCars;
  }
  public getType(): String {
    return this.cartype;
  }
  public bookCar(): Boolean {
    if (this.numOfCars > 5) {
      // this plant ensures he has atleast 5 cars for emergency
      this.numOfCars--;
      console.log("One " + this.cartype + " car booked");
      return true;
    } else {
      console.log("Sorry, Car out of Stock");
      return false;
    }
  }
}

class CarPlant3 implements CarPlantPlan {
  private cartype: String;
  private numOfCars: number;
  constructor(cartype: String, numOfCars: number) {
    this.cartype = cartype;
    this.numOfCars = numOfCars;
  }
  public getType(): String {
    return this.cartype;
  }
  public bookCar(): Boolean {
    if (this.numOfCars > 8) {
      // this plant ensures he has atleast 8 cars for emergency
      this.numOfCars--;
      console.log("One " + this.cartype + " car booked");
      return true;
    } else {
      console.log("Sorry, Car out of Stock");
      return false;
    }
  }
}

class ShowRoomMediator {
  carPlantList: Array<CarPlantPlan>;

  constructor() {
    this.carPlantList = new Array<CarPlantPlan>();
  }

  public addPlant(cp: CarPlantPlan) {
    this.carPlantList.push(cp);
  }

  public request(cartype: String) {
    this.carPlantList.forEach((plant) => {
      if (plant.getType() == cartype) {
        plant.bookCar();
      }
    });
  }
}

class Customer {
  name: String;
  mdtr: ShowRoomMediator;
  constructor(name: String, mdtr: ShowRoomMediator) {
    this.name = name;
    this.mdtr = mdtr;
  }
  public requestBooking(cartype: String) {
    this.mdtr.request(cartype);
  }
}
