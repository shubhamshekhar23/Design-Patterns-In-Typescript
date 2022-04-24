interface CarSystemPlan {
  turnOn();
  turnOff();
}

class ArtificialIntelligence implements CarSystemPlan {
  public turnOn() {
    console.log("AI of the car started");
  }
  public turnOff() {
    console.log("AI is turned off");
  }
}

class AutoPilot {
  map: CarSystemPlan;
  engine: CarSystemPlan;
  ai: CarSystemPlan;
  guidingvoice: CarSystemPlan;

  constructor() {
    this.map = new GoogleMap();
    this.engine = new Engine();
    this.ai = new ArtificialIntelligence();
    this.guidingvoice = new GuidingVoice();
  }

  public start() {
    this.map.turnOn();
    this.engine.turnOn();
    this.ai.turnOn();
    this.guidingvoice.turnOn();
    console.log("You can relax now. The car is in autopilot mode");
  }

  public end() {
    this.map.turnOff();
    this.engine.turnOff();
    this.ai.turnOff();
    this.guidingvoice.turnOff();
  }
}

class Engine implements CarSystemPlan {
  public turnOn() {
    console.log("Engine started");
  }
  public turnOff() {
    console.log("Engine is turned off");
  }
}

class GoogleMap implements CarSystemPlan {
  public turnOn() {
    console.log("Google map started");
  }
  public turnOff() {
    console.log("Google map is turned off");
  }
}

class GuidingVoice implements CarSystemPlan {
  public turnOn() {
    console.log("Guiding voice of the car started");
  }
  public turnOff() {
    console.log("Guiding voice is turned off");
  }
}

function main() {
  try {
    let ap: AutoPilot = new AutoPilot();
    ap.start();
  } catch (e) {
    console.log("whatsup");
  }
}
main();

/**
 * Facade means hiding all the compexities from the client. In this example all the compelexity like switching on different system
 * for the auto pilot to work has been done by the auto pilot class whcih is a facade; if it hadnot been there to make it work
 * client had to start all the system components himself.
 */
