function main() {
  try {
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
  } catch (e) {
    console.log(e + " :set the debugger chain correclty");
  }
}

main();

/*Here in this example we only have one button in the remote that can be used to perform differnt tasks like lighton,lightoff, play miusic, turn on AC, turnOff ac. This commands use different systems Light, MusicSystem, Aircondition.
All these commands can be performed on a single button press; we just have to setCommand and everytime we want it to do adifferent task, we will pass the instance of the new task. we can do it by creating a class out of thses commands
which uses the original system methods( like Lightcontrol, muysicsystem, aircondition) and then perform on execute method */

interface CommandPlan {
  execute();
}

class AcOff implements CommandPlan {
  ms: AirCondition;
  constructor(ms: AirCondition) {
    this.ms = ms;
  }
  public execute() {
    this.ms.powerOff();
  }
}

class AcOn implements CommandPlan {
  ms: AirCondition;
  constructor(ms: AirCondition) {
    this.ms = ms;
  }
  public execute() {
    this.ms.powerOn();
    this.ms.setTemperature();
    this.ms.start();
  }
}

class AirCondition {
  public powerOn() {
    console.log("AirCondition : Power source connected");
  }

  public setTemperature() {
    console.log("AirCondition : Default Temperature set");
  }

  public start() {
    console.log("Ac is started");
  }

  public powerOff() {
    console.log("Ac is switched off");
  }
}

class LightControl {
  public powerOn() {
    console.log("LightCOntrol : Light is switched on");
  }

  public powerOff() {
    console.log("AirCondition : Light is switched off");
  }
}

class LightOff implements CommandPlan {
  ms: LightControl;
  constructor(ms: LightControl) {
    this.ms = ms;
  }
  public execute() {
    this.ms.powerOff();
  }
}

class LightOn implements CommandPlan {
  ms: LightControl;
  constructor(ms: LightControl) {
    this.ms = ms;
  }
  public execute() {
    this.ms.powerOn();
  }
}

class MusicSystem {
  public powerOn() {
    console.log("MusicSysytem : Power source connected");
  }

  public selectSong() {
    console.log("MusicSysytem : Song is selected");
  }

  public playSong() {
    console.log("MusicSysytem : Song is played");
  }
}

class MusicPlay implements CommandPlan {
  ms: MusicSystem;
  constructor(ms: MusicSystem) {
    this.ms = ms;
  }
  public execute() {
    this.ms.powerOn();
    this.ms.selectSong();
    this.ms.playSong();
  }
}

class Remote {
  cp: CommandPlan;

  public setCommand(cp: CommandPlan) {
    this.cp = cp;
  }

  public buttonPressed() {
    this.cp.execute();
  }
}
