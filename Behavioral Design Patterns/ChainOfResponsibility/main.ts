function main() {
  try {
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

    /* Give the virus to the lowest level tester */
    e1.debug(virus);
  } catch (error) {
    console.log(error + " :set the debugger chain correclty");
  }
}

main();

/* There are new viruses being discovered in the system whose severity level can be set ; now there is a debugger chain hierecahy; if an engineer can solve it then it's fine; otherwise he will pass it to team lead; if team lead can't solve it then he will pass it to technical officer;if he can't then he will pass it to the Expert where its solved finally. So a chain abstract class is created and all the debuggers will extend from it amd create a chain */

class CarAiVirus {
  private threatLevel: number;
  constructor(p: number) {
    this.threatLevel = p;
  }

  public getThreat(): number {
    return this.threatLevel;
  }
}

abstract class DebuggerChainPlan {
  next: DebuggerChainPlan;

  public debug(v: CarAiVirus) {}

  public setNextDebugger(d: DebuggerChainPlan) {
    this.next = d;
  }
}

class Engineer extends DebuggerChainPlan {
  public debug(v: CarAiVirus) {
    if (v.getThreat() > 2) {
      this.next.debug(v);
    } else {
      console.log("Virus removed by Engineer");
    }
  }
}

class Expert extends DebuggerChainPlan {
  public debug(v: CarAiVirus) {
    console.log("Virus removed by Expert");
  }
}

class TeamLead extends DebuggerChainPlan {
  public debug(v: CarAiVirus) {
    if (v.getThreat() > 5) {
      this.next.debug(v);
    } else {
      console.log("Virus removed by TeamLead");
    }
  }
}

class TechnicalOfficer extends DebuggerChainPlan {
  public debug(v: CarAiVirus) {
    if (v.getThreat() > 10) {
      this.next.debug(v);
    } else {
      console.log("Virus removed by TechnicalOfficer");
    }
  }
}
