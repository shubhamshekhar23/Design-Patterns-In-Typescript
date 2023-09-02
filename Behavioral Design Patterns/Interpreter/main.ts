function main() {
  try {
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
  } catch (e) {
    console.log(e + " :set the debugger chain correclty");
  }
}

main();

/*This is interpreter; just like we can define grammar rules; here we define an interpreter called voice input
that has a data based on which the interpretaion will go on; and then there are expressions handler like what combination we
want to handle AND OR and we can create our combinatuion of voice inputs and then interpret */

interface VoiceInputPlan {
  interpret(input: string): Boolean;
}

class AndVoice implements VoiceInputPlan {
  v1: VoiceInputPlan;
  v2: VoiceInputPlan;

  constructor(v1: VoiceInputPlan, v2: VoiceInputPlan) {
    this.v1 = v1;
    this.v2 = v2;
  }

  public interpret(input: string): Boolean {
    if (this.v1.interpret(input) && this.v2.interpret(input)) {
      console.log("Successfully interpreted");
      return true;
    } else {
      console.log("Could not interpret it");
      return false;
    }
  }
}

class OrVoice implements VoiceInputPlan {
  v1: VoiceInputPlan;
  v2: VoiceInputPlan;

  constructor(v1: VoiceInputPlan, v2: VoiceInputPlan) {
    this.v1 = v1;
    this.v2 = v2;
  }

  public interpret(input: string): Boolean {
    if (this.v1.interpret(input) || this.v2.interpret(input)) {
      console.log("Successfully interpreted the OR");
      return true;
    } else {
      console.log("Could not interpret it");
      return false;
    }
  }
}

class VoiceInput implements VoiceInputPlan {
  data: string;
  constructor(data: string) {
    this.data = data;
  }
  public interpret(input: string): Boolean {
    if (input.indexOf(this.data) !== -1) {
      return true;
    }
    return false;
  }
}
