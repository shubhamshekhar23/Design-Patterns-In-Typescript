interface BehaviourPlan {
  getDetails();
  action();
}

abstract class JumpBehaviour implements BehaviourPlan {
  public getDetails() {
    console.log("Jump Action");
  }

  public action() {
    console.log("Jumping");
  }
}

abstract class KickBehaviour implements BehaviourPlan {
  public getDetails() {
    console.log("Kick Action");
  }

  public action() {
    console.log("Kicking");
  }
}

abstract class RollBehaviour implements BehaviourPlan {
  public getDetails() {
    console.log("Roll Action");
  }

  public action() {
    console.log("Rolling");
  }
}

class BasicJump extends JumpBehaviour {
  public action() {
    console.log("performing basic Jump");
  }
}

class BasicKick extends KickBehaviour {
  public action() {
    console.log("performing basic Kick");
  }
}

class BasicRoll extends RollBehaviour {
  public action() {
    console.log("performing basic roll");
  }
}

class SuperJump extends JumpBehaviour {
  public action() {
    console.log("performing super Jump");
  }
}

class SuperKick extends KickBehaviour {
  public action() {
    console.log("performing super Kick");
  }
}

class SuperRoll extends RollBehaviour {
  public action() {
    console.log("performing Super roll");
  }
}

class Transformer {
  rb: RollBehaviour;
  jb: JumpBehaviour;
  kb: KickBehaviour;

  constructor() {
    this.rb = new BasicRoll();
    this.jb = new BasicJump();
    this.kb = new BasicKick();
  }

  public setRoll(rb: RollBehaviour) {
    this.rb = rb;
  }

  public setJump(jb: JumpBehaviour) {
    this.jb = jb;
  }

  public setKick(kb: KickBehaviour) {
    this.kb = kb;
  }

  public performAction() {
    this.rb.action();
    this.jb.action();
    this.kb.action();
  }
}

function main() {
  let t: Transformer = new Transformer();
  t.setJump(new SuperJump());
  t.setKick(new SuperKick());
  t.performAction();
}

main();

/* This example has a transformer that can perform 3 actions kick,jump and roll; each action has 2 types basic and super; so created a class
separated for each behaviour and then setting the transformer properties with these objects at runtime; and then letting it perfrom action */
