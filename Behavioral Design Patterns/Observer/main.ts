interface ShowRoomPlan {
  receive(ct: String);
}

class ShowRoom implements ShowRoomPlan {
  cartypes: Array<String>;
  name: String;

  constructor(name: String) {
    this.name = name;
    this.cartypes = new Array<String>();
  }

  public receive(ct: String) {
    this.cartypes.push(ct);
    console.log(this.name + " have been notified with " + ct);
  }
}

class CarHeadquarter {
  cartypes: Array<String>;
  showrooms: Array<ShowRoomPlan>;

  constructor(ct: String) {
    this.cartypes = new Array<String>();
    this.showrooms = new Array<ShowRoomPlan>();
    this.cartypes.push(ct);
  }

  public addCarType(ct: String) {
    this.cartypes.push(ct);
    this.sendMessageToAll(ct);
  }

  public sendMessageToAll(ct: String) {
    this.showrooms.forEach((show) => {
      show.receive(ct);
    });
  }

  public addShowRoom(sp: ShowRoomPlan) {
    this.showrooms.push(sp);
    this.cartypes.forEach((st) => {
      sp.receive(st);
    });
  }
}

function main() {
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
}

main();

/* OUTPUT -

Delhi have been notified with sedan                                                                                                           
Bangalore have been notified with sedan                                                                                                       
kolkata have been notified with sedan                                                                                                         
Mumbai have been notified with sedan                                                                                                          
Delhi have been notified with sports                                                                                                          
Bangalore have been notified with sports                                                                                                      
kolkata have been notified with sports                                                                                                        
Mumbai have been notified with sports 

*/

/* This example has the functionality that at first we create a headquarter with atleast one cartype; then showroom can be created independently, then they can request the headquarter to add them; as soon as they are added, they are populated with all the cartypes that are avaiable at that time in the headquarter; once a new cartype is added in the headquarter; all the added showrooms are notified */
