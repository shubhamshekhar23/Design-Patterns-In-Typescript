# Design-Patterns-in-Typescript

## One Mega Problem Statement - "Setting Up of a Car Company"

All 23 Gang of four Design Patterns implemented in Java

### _Whats So SPECIAL_ :

When I was preparing for interview, I could not find a single problem statement that will use all the design patterns. So, To revise all the design patterns in one go, I can just look at that one big problem statement and i'll be good to go.

So, I set out to create that Mega Problem and came up with "Setting Up of a Car Company".

All the patterns are implemented using one Mega problem statement i.e Setting up of a Car Company Which involves creating a Car factory in a city that has different models of cars; have showrooms in different cities; Headquarter somewhere; car manufacturing process and Hierarchy of Employee that has different job within the car company.

Following are the features in our problem statement :

### Behavioral Design Patterns -

#### 1. CHAIN OF RESPONSIBILITY -

In our new Car Artificial Intelligence software, there is a possibility of virus from other hackers.There are different levels of virus and based on that level, employees can solve or not solve it. So, we have a team of developers and there is a hierarchy of developers. So, when there is a virus found in the system, it is given to the engineer. If he can not solve it, then he will pass it to team lead; if team lead cant then he will pass it to technical officer;etc. .

#### 2. COMMAND -

In our new Car, We want to provide user a remote with only one button ( Just for elegance ) that can be used to perform differnt tasks like lighton , play music and Controlling Air condition etc. All these commands can be performed on a single button press;

#### 3. INTERPRETER -

In our car, We want to create a voice command system in which commands can be created and interpreted. e.g startcar, fuelcheck, autodrive etc. for these commands there are AND OR combination of commands like fuelcheck and doorclosed.

#### 4. ITERATOR -

In our company, we want to maintain a list of customers and cars and we want to iterate through these lists and get the details.

#### 5. MEDIATOR -

We have 3 car plants, one for each cartype(luxury, sedan and sports)that has their own condition of booking cars based on how many cars are in the stock; we have a mediator that is showroom that take the customer's request for booking and then requests the carplant based on the type of car requested; In this way showroom acts as a mediator and customer doesn't have to deal with the carplant directly

#### 6. MEMENTO -

We have created a software for our car, and we want to track different status of the software while it is undergoing changes, so that it can safely be restored to the previous version. (Just like GIT)

#### 7. OBSERVER -

we have a Car headquarter and some showrooms. New showrooms can be created independently in different cities, and they can request the headquarter to add them as a franchise; as soon as they are added, they get all the info of the cartypes that are avaiable at that time in the headquarter; once a new cartype is added in the headquarter; all the added showrooms are notified

#### 8. STATE -

We have a car that can be started with any gear.When we accelerate to some speed, then gear checks the speed limit of which it can afford, then it displays the corresponding success or failure message

#### 9. STRATEGY -

Description Coming Soon..

#### 10. TEMPLATE -

Constructing car has separate steps like carbodyassemble, assembleengine etc.
and there are 3 different types of car luxury , sedan etc. All of these 3 will have different ways of constructing car steps; so they will implement methods differently but constructing car always use the basic methods

#### 11. VISITOR -

We have 3 cars sedan, luxury and sportsCar. Each one has proper defined getPrice functions. Now, we have to make changes in that function(addding some extra broker fee), Following open-closed principle, we dont want to make changes in each classes. So, we craete a visitor class.

#### 12. others(coming soon) -

Blackboard, Null object, Servant, Specification

### Creational Design Patterns -

#### 1. ABSTRACT FACTORY -

We want to expose only one simple functionality to manufacture a Car to the client and don't want client to worry abut how and where (USA, China, India) that Car is manufactured. Based on the Car Type, A Class (That is abstract factory), will internally decide how and which class too call.

#### 2. BUILDER -

We have 3 cars type - Luxury, Sedan and Sports. They all have different process of building cars(e.g building engine, carbody , electrnoics etc). Car creation is a complicated process and its done by step by step. So, We use a builder and we expose the builder to client so that he doesnt have to deal with the nuances of the complication. Engineer uses this builder to create cars.

#### 3. FACTORY -

We have 3 main car types- Luxury, sedan and sports car. To Manufacture these cars, one factory is provided and CLient can provide the car type and Factory takes care of manufacturing Car.

#### 4. PROTOTYPE -

We have a superAlienCar that is manufactured on the Mars.(Yes we have colonised Mars !). Now just to manufacture a Car, we need to get the planetName from a Datbase, That is an expensive operation. So, We want to manufacture a Car and then want to clone that car, so that expensive operation doesn't run again. Here, we use prototype pattern.

#### 5. SINGLETON -

Our company will have a single headquarter that is only once created. After that we can only get access to that headquarter and can not be changed.

#### 6. others(coming soon) -

Dependency Injection, Lazy initialization, Multiton, Object pool, Resource acquisition is initialization (RAII)

### Structural Design Patterns -

#### 1. ADAPTER -

Our car has by default petrol system installed. Now, after launching our car in the market, a significant number of users are requesting to install a Gas system as well. So, to achieve this in existing system, we create a PetrolSystemAdapter and set this to the Car.

#### 2. BRIDGE -

Description Coming Soon..

#### 3. COMPOSITE -

Description Coming Soon..

#### 4. DECORATOR -

Description Coming Soon..

#### 5. FACADE -

Description Coming Soon..

#### 6. FLYWEIGHT -

Description Coming Soon..

#### 7. PROXY -

Description Coming Soon..

#### 8. others(coming soon) -

Extension object, Front controller, Marker, Module, Twin
