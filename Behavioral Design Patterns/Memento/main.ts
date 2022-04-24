class CarSoftwareStatus {
  newChange: String;
  correction: String;

  constructor(n1: String, n2: String) {
    this.newChange = n1;
    this.correction = n2;
  }

  public setNewChange(chn: String) {
    this.newChange = chn;
  }

  public setCorrection(chn: String) {
    this.correction = chn;
  }

  public getDetails() {
    console.log(
      "Change :" + this.newChange + " ; " + "Correction : " + this.correction
    );
  }

  public createMemento(): CarSoftwareMemento {
    return new CarSoftwareMemento(this);
  }

  public setStatusFromMemento(mem: CarSoftwareMemento) {
    let cssNew: CarSoftwareStatus = mem.getStatus();
    this.setNewChange(cssNew.newChange);
    this.setCorrection(cssNew.correction);
  }
}

class CarSoftwareMemento {
  css: CarSoftwareStatus;

  constructor(css: CarSoftwareStatus) {
    this.css = new CarSoftwareStatus(css.newChange, css.correction);
  }

  public getStatus(): CarSoftwareStatus {
    return this.css;
  }
}

class SoftwareCareTaker {
  mementolist: Array<CarSoftwareMemento>;

  constructor() {
    this.mementolist = new Array<CarSoftwareMemento>();
  }

  public add(c1: CarSoftwareMemento) {
    this.mementolist.push(c1);
  }

  public getMemento(index: number): CarSoftwareMemento {
    return this.mementolist[index];
  }
}

function main() {
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
}

main();

/* OUTPUT - 

Change :change1 ; Correction : correction1  
Change :change1 ;  Correction : correct2 
Change :change2 ;  Correction : correct2 

*/

/* This has 3 parts - memento( that has the state of an object), originator(CarSoftwarestatus - that can create memento and stores the current state of the object) and other is caretaker(that stores the list of memento and return whichever is required); the memento that caretaker provies can be used to set the current status of the software; this pattern can be used just like in git */
