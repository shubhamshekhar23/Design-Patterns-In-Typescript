# Design-Patterns-in-Typescript

## One Mega Problem Statement - "Setting Up of a Car Company"

All 23 Gang of four Design Patterns implemented in Java

### _Whats So SPECIAL_ :

When I was preparing for interview, I could not find a single problem statement that will use all the design patterns. So, To revise all the design patterns in one go, I can just look at that one big problem statement and i'll be good to go.

So, I set out to create that Mega Problem and came up with "Setting Up of a Car Company".

All the patterns are implemented using one Mega problem statement i.e Setting up of a Car Company Which involves creating a Car factory in a city that has different models of cars; have showrooms in different cities; Headquarter somewhere; car manufacturing process and Hierarchy of Employee that has different job within the car company.

Following are the features in our problem statement :

---

### Behavioral Design Patterns -

---

#### 1. CHAIN OF RESPONSIBILITY -

In our new Car Artificial Intelligence software, there is a possibility of virus from other hackers.There are different levels of virus and based on that level, employees can solve or not solve it. So, we have a team of developers and there is a hierarchy of developers. So, when there is a virus found in the system, it is given to the engineer. If he can not solve it, then he will pass it to team lead; if team lead cant then he will pass it to technical officer;etc. .

```
    /* Creating a new virus instance and set the severity level just to test */
    let virus: CarAiVirus = new CarAiVirus(1);

    /* Creating testers instance */
    let e1: Engineer = new Engineer();
    let t1: TeamLead = new TeamLead();
    let ct1: TechnicalOfficer = new TechnicalOfficer();
    let ee: Expert = new Expert();

    /* Set the hierarchy by using ofr each one by passing the instance of upper level tester */
    e1.setNextDebugger(t1);
    t1.setNextDebugger(ct1);
    ct1.setNextDebugger(ee);

```

#### 2. COMMAND -

In our new Car, We want to provide user a remote with only one button ( Just for elegance ) that can be used to perform differnt tasks like lighton , play music and Controlling Air condition etc. All these commands can be performed on a single button press;

```
    /* Setting up of system */
    let r: Remote = new Remote();
    let ms: MusicSystem = new MusicSystem();
    let ac: AirCondition = new AirCondition();
    let lc: LightControl = new LightControl();

    /* setting up instance of all the command that has to perform and pass the system instance */
    let musicplay: CommandPlan = new MusicPlay(ms);
    let lightOn: CommandPlan = new LightOn(lc);
    let lightOff: CommandPlan = new LightOff(lc);
    let acon: CommandPlan = new AcOn(ac);
    let acoff: CommandPlan = new AcOff(ac);

    /* Everytime we want to change the tash that remote has to perform, we use setCommand and pass the commandInstance */
    r.setCommand(musicplay);
    r.buttonPressed();

    r.setCommand(lightOn);
    r.buttonPressed();
    r.setCommand(lightOff);
    r.buttonPressed();

    r.setCommand(acon);
    r.buttonPressed();
    r.setCommand(acoff);
    r.buttonPressed();

```

#### 3. INTERPRETER -

In our car, We want to create a voice command system in which commands can be created and interpreted. e.g startcar, fuelcheck, autodrive etc. for these commands there are AND OR combination of commands like fuelcheck and doorclosed.

```
    // setting up the voice command sysytem
    let v1: VoiceInputPlan = new VoiceInput("drive");
    let v2: VoiceInputPlan = new VoiceInput("startCar");
    let driveCommand: OrVoice = new OrVoice(v1, v2);

    driveCommand.interpret("driveCar");
    driveCommand.interpret("startCar");

    let v3: VoiceInputPlan = new VoiceInput("fuelcheck");
    let v4: VoiceInputPlan = new VoiceInput("doorclosed");
    let securityCommand: AndVoice = new AndVoice(v3, v4);

    securityCommand.interpret("fuelcheck, doorclosed");
    securityCommand.interpret("fuel, door");

```

#### 4. ITERATOR -

In our company, we want to maintain a list of customers and cars and we want to iterate through these lists and get the details.

```
  let c1: Car = new Car("sedan");
  let c2: Car = new Car("sports");
  let c3: Car = new Car("luxury");
  let c4: Car = new Car("super");
  let c5: Car = new Car("alien");
  let c6: Car = new Car("intelligent");

  let cl: CarList = new CarList(13);
  cl.add(c1);
  cl.add(c2);
  cl.add(c3);
  cl.add(c4);
  cl.add(c5);
  cl.add(c6);

  let p1: Customer = new Customer("skhbd", c1);
  let p2: Customer = new Customer("skjd", c2);
  let p3: Customer = new Customer("weqt", c3);
  let p4: Customer = new Customer("vbnvbn", c4);
  let p5: Customer = new Customer("ukk", c5);
  let p6: Customer = new Customer("eryreye", c6);

  let pl: CustomerList = new CustomerList(12);
  pl.add(p1);
  pl.add(p2);
  pl.add(p3);
  pl.add(p4);
  pl.add(p5);
  pl.add(p6);

  // Above code is only data population

  let custit: IteratorPlan<Customer> = pl.getIterator();
  while (custit.hasNext()) {
    let c: Customer = custit.next();
    c.getDetails();
  }

  let carit: IteratorPlan<Car> = cl.getIterator();
  while (carit.hasNext()) {
    let c: Car = carit.next();
    c.getDetails();
  }

```

#### 5. MEDIATOR -

We have 3 car plants, one for each cartype(luxury, sedan and sports)that has their own condition of booking cars based on how many cars are in the stock; we have a mediator that is showroom that take the customer's request for booking and then requests the carplant based on the type of car requested; In this way showroom acts as a mediator and customer doesn't have to deal with the carplant directly

```
  let c1: CarPlantPlan = new CarPlant1("sportscar", 10);
  let c2: CarPlantPlan = new CarPlant2("sedancar", 9);
  let c3: CarPlantPlan = new CarPlant3("luxurycar", 6);

  let mdtr: ShowRoomMediator = new ShowRoomMediator();
  mdtr.addPlant(c1);
  mdtr.addPlant(c2);
  mdtr.addPlant(c3);

  let john: Customer = new Customer("John", mdtr);

  john.requestBooking("luxurycar");

```

#### 6. MEMENTO -

We have created a software for our car, and we want to track different status of the software while it is undergoing changes, so that it can safely be restored to the previous version. (Just like GIT)

```
  let css1: CarSoftwareStatus = new CarSoftwareStatus("change1", "correction1");

  let sct: SoftwareCareTaker = new SoftwareCareTaker();

  sct.add(css1.createMemento());
  css1.setCorrection("correct2");
  sct.add(css1.createMemento());
  css1.setNewChange("change2");
  sct.add(css1.createMemento());

  css1.setStatusFromMemento(sct.getMemento(0));
  css1.getDetails();

  css1.setStatusFromMemento(sct.getMemento(1));
  css1.getDetails();

  css1.setStatusFromMemento(sct.getMemento(2));
  css1.getDetails();

```

#### 7. OBSERVER -

we have a Car headquarter and some showrooms. New showrooms can be created independently in different cities, and they can request the headquarter to add them as a franchise; as soon as they are added, they get all the info of the cartypes that are avaiable at that time in the headquarter; once a new cartype is added in the headquarter; all the added showrooms are notified

```
  let ch: CarHeadquarter = new CarHeadquarter("sedan");
  let cp1: ShowRoomPlan = new ShowRoom("Delhi");
  let cp2: ShowRoomPlan = new ShowRoom("Bangalore");
  let cp3: ShowRoomPlan = new ShowRoom("kolkata");
  let cp4: ShowRoomPlan = new ShowRoom("Mumbai");

  ch.addShowRoom(cp1);
  ch.addShowRoom(cp2);
  ch.addShowRoom(cp3);
  ch.addShowRoom(cp4);

  ch.addCarType("sports");

```

#### 8. STATE -

We have a car that can be started with any gear.When we accelerate to some speed, then gear checks the speed limit of which it can afford, then it displays the corresponding success or failure message

```

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

```

#### 9. STRATEGY -

We have a special transofrmer Car that can perform 3 actions kick,jump and roll; each action has 2 types basic and super; We should be able to change the behavior of the actions at runTime for the transofrmer and accordingly its performAction should be run.

```
  let t: Transformer = new Transformer();
  t.setJump(new SuperJump());
  t.setKick(new SuperKick());
  t.performAction();

```

#### 10. TEMPLATE -

Constructing car has separate steps like carbodyassemble, assembleengine etc.
and there are 3 different types of car luxury , sedan etc. All of these 3 will have different ways of constructing car steps; so they will implement methods differently but constructing car always use the basic methods

```
  let l1: SportsCar = new SportsCar("red");
  l1.constructCar();

```

#### 11. VISITOR -

We have 3 cars sedan, luxury and sportsCar. Each one has proper defined getPrice functions. Now, we have to make changes in that function(addding some extra broker fee), Following open-closed principle, we dont want to make changes in each classes. So, we craete a visitor class.

```
  let c: CarPlan = new LuxuryCar("shubham");
  let cv: CarPriceVisitor = new CarPriceVisitor();
  c.getPrice(cv);

  let j: CarPlan = new SedanCar("Shekhar Suman");
  j.getPrice(cv);

```

#### 12. others(coming soon) -

Blackboard, Null object, Servant, Specification

---

### Creational Design Patterns -

---

#### 1. ABSTRACT FACTORY -

We want to expose only one simple functionality to manufacture a Car to the client and don't want client to worry abut how and where (USA, China, India) that Car is manufactured. Based on the Car Type, A Class (That is abstract factory), will internally decide how and which class too call.

```
  let car1: Car = Myabstractfactory.createCar(CarType.SEDAN_USA);
  car1.getDetails();
  let car2: Car = Myabstractfactory.createCar(CarType.SEDAN_USA);
  car2.getDetails();
  let car3: Car = Myabstractfactory.createCar(CarType.SPORTSCAR_CHINA);
  car3.getDetails();
  let car4: Car = Myabstractfactory.createCar(CarType.LUXURYCAR_INDIA);
  car4.getDetails();
  let car5: Car = Myabstractfactory.createCar(CarType.LUXURYCAR_USA);
  car5.getDetails();

```

#### 2. BUILDER -

We have 3 cars type - Luxury, Sedan and Sports. They all have different process of building cars(e.g building engine, carbody , electrnoics etc). Car creation is a complicated process and its done by step by step. So, We use a builder and we expose the builder to client so that he doesnt have to deal with the nuances of the complication. Engineer uses this builder to create cars.

```
  let sedanbuilder1: CarBuilderPlan = new SportsBuilder();
  let E1: Engineer = new Engineer(sedanbuilder1);
  E1.constructCar();
  E1.getCarDetails();

```

#### 3. FACTORY -

We have 3 main car types- Luxury, sedan and sports car. To Manufacture these cars, one factory is provided and CLient can provide the car type and Factory takes care of manufacturing Car.

```
  let car1: Mercedesfactory = Mercedesfactory.create(CarType.SEDAN);
  car1.showme();
  let car2: Mercedesfactory = Mercedesfactory.create(CarType.LUXURYCAR);
  car2.showme();
  let car3: Mercedesfactory = Mercedesfactory.create(CarType.SPORTSCAR);
  car3.showme();
  let car4: Mercedesfactory = Mercedesfactory.create(CarType.SEDAN);
  car4.showme();

```

#### 4. PROTOTYPE -

We have a superAlienCar that is manufactured on the Mars.(Yes we have colonised Mars !). Now just to manufacture a Car, we need to get the planetName from a Datbase, That is an expensive operation. So, We want to manufacture a Car and then want to clone that car, so that expensive operation doesn't run again. Here, we use prototype pattern.

```
  let S1: SuperAlienCar = new SuperAlienCar();
  S1.getDetails();
  console.log(S1);
  let S2: SuperAlienCar = S1.getClone();
  S2.setDriver("ET");
  S2.getDetails();
  console.log(S2);

```

#### 5. SINGLETON -

Our company will have a single headquarter that is only once created. After that we can only get access to that headquarter and can not be changed.

```
  let myHeadquarter: HeadquarterCreation =
    HeadquarterCreation.createMyHeadquarter("Berlin");
  console.log(myHeadquarter.name);
  let myHeadquarter2: HeadquarterCreation =
    HeadquarterCreation.createMyHeadquarter("Munich");
  console.log(myHeadquarter2.name);

```

#### 6. others(coming soon) -

Dependency Injection, Lazy initialization, Multiton, Object pool, Resource acquisition is initialization (RAII)

---

### Structural Design Patterns -

---

#### 1. ADAPTER -

Our car has by default petrol system installed. Now, after launching our car in the market, a significant number of users are requesting to install a Gas system as well. So, to achieve this in existing system, we create a PetrolSystemAdapter and set this to the Car.

```
  let c1: Car = new Car();
  c1.startCar();
  let g1: GasSystemPlan = new GasSystem();
  let pg1: PetrolSystemAdapter = new PetrolSystemAdapter(g1);
  c1.setSystem(pg1);
  c1.startCar();

```

#### 2. BRIDGE -

We have different car types and we want provide a functionality of painting cars in different color schemes. We want color schemes to vary independently of the cars so that they are not dependent on each other.

```
  let sc1: CarPlan = new SportsCar(new RedFinish());
  sc1.paintCar();
  let lc1: CarPlan = new LuxuryCar(new GreenFinish());
  lc1.paintCar();

```

#### 3. COMPOSITE -

We have different employees in our car company that can have subordinates( which are other employees). e.g director has subordinates leadManager. LeadManager can have sedanManager, SportsManager, luxuryManager etc.

```
  let director: Employee = new Employee("john", "Director", 1200);
  let leadmanager: Employee = new Employee("Kate", "Manager", 1000);
  let sportsmanager: Employee = new Employee("robert", "Sports Manager", 900);
  let sedanmanager: Employee = new Employee("ludo", "Sedan Manager", 900);
  let luxurymanager: Employee = new Employee("kevin", "Luxury Manager", 900);
  let engineer1: Employee = new Employee("tom", "car Engineer", 700);
  let engineer2: Employee = new Employee("leonard", "car engineer", 700);
  let worker1: Employee = new Employee("mike", "worker", 500);
  let worker2: Employee = new Employee("steve", "worker", 500);

  director.add(leadmanager);

  leadmanager.add(sportsmanager);
  leadmanager.add(sedanmanager);
  leadmanager.add(luxurymanager);

  sportsmanager.add(engineer1);
  sedanmanager.add(engineer2);

  engineer1.add(worker1);
  engineer2.add(worker2);

  sportsmanager.showSubordinatesDetails();

```

#### 4. DECORATOR -

We have a Car and while manufacturing it , we want to add different functionality to it like NitroSystem, Security System, Auto Pilot system etc.Order of the addition of functionality doesnt matter.

```
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

```

#### 5. FACADE -

We want to expose a functionality of putting Car on autoPilot. But for autoPilot to work, there are some steps that has to be done like mapOn, EngineOn, AI on, guiding Voice on etc. All these steps are done by Facade and is hidden from client.

```
  let ap: AutoPilot = new AutoPilot();
  ap.start();
```

#### 6. FLYWEIGHT -

After a car is purchased by a customer, he can get the details when shoudl he go for servicing; he can go to website of the company
and specify which type of car he has; then he can set the kmcovered by the car and how much mileage
he is getting; then based on the internal formula of the system; the advice is returned;

Now , ther are so many request for the same type of car like thousands; and we have to create carstausobject for all of them;
this is not a good idea; thats why we cache the object created and then return that same object to the next customer if the type matches
so in this way we only have 3 cars in the cache and there is no memory overload.

```
  let cs1: CarStatusPlan = CarProvider.getCarStatus("sports");
  cs1.setKmCovered(21);
  cs1.setMileage(30);
  cs1.getStatus();
```

#### 7. PROXY -

We have a car system class that has a method driveCar. But, If the driver is age below 18, then car should not drive. We dont want to put this check on theis car Class. Instead, we will create a CarProxy class that is exposed to the client , that will do the check and take decision.

```
    let d: Driver = new Driver(26, "shubham");
    let c: CarProxy = new CarProxy();
    c.setDriver(d);
    c.driveCar();

```

#### 8. others(coming soon) -

Extension object, Front controller, Marker, Module, Twin
