var AcOff = /** @class */ (function () {
    function AcOff(ms) {
        this.ms = ms;
    }
    AcOff.prototype.execute = function () {
        this.ms.powerOff();
    };
    return AcOff;
}());
var AcOn = /** @class */ (function () {
    function AcOn(ms) {
        this.ms = ms;
    }
    AcOn.prototype.execute = function () {
        this.ms.powerOn();
        this.ms.setTemperature();
        this.ms.start();
    };
    return AcOn;
}());
var AirCondition = /** @class */ (function () {
    function AirCondition() {
    }
    AirCondition.prototype.powerOn = function () {
        console.log("AirCondition : Power source connected");
    };
    AirCondition.prototype.setTemperature = function () {
        console.log("AirCondition : Default Temperature set");
    };
    AirCondition.prototype.start = function () {
        console.log("Ac is started");
    };
    AirCondition.prototype.powerOff = function () {
        console.log("Ac is switched off");
    };
    return AirCondition;
}());
var LightControl = /** @class */ (function () {
    function LightControl() {
    }
    LightControl.prototype.powerOn = function () {
        console.log("LightCOntrol : Light is switched on");
    };
    LightControl.prototype.powerOff = function () {
        console.log("AirCondition : Light is switched off");
    };
    return LightControl;
}());
var LightOff = /** @class */ (function () {
    function LightOff(ms) {
        this.ms = ms;
    }
    LightOff.prototype.execute = function () {
        this.ms.powerOff();
    };
    return LightOff;
}());
var LightOn = /** @class */ (function () {
    function LightOn(ms) {
        this.ms = ms;
    }
    LightOn.prototype.execute = function () {
        this.ms.powerOn();
    };
    return LightOn;
}());
var MusicSystem = /** @class */ (function () {
    function MusicSystem() {
    }
    MusicSystem.prototype.powerOn = function () {
        console.log("MusicSysytem : Power source connected");
    };
    MusicSystem.prototype.selectSong = function () {
        console.log("MusicSysytem : Song is selected");
    };
    MusicSystem.prototype.playSong = function () {
        console.log("MusicSysytem : Song is played");
    };
    return MusicSystem;
}());
var MusicPlay = /** @class */ (function () {
    function MusicPlay(ms) {
        this.ms = ms;
    }
    MusicPlay.prototype.execute = function () {
        this.ms.powerOn();
        this.ms.selectSong();
        this.ms.playSong();
    };
    return MusicPlay;
}());
var Remote = /** @class */ (function () {
    function Remote() {
    }
    Remote.prototype.setCommand = function (cp) {
        this.cp = cp;
    };
    Remote.prototype.buttonPressed = function () {
        this.cp.execute();
    };
    return Remote;
}());
function main() {
    try {
        /* Setting up of system */
        var r = new Remote();
        var ms = new MusicSystem();
        var ac = new AirCondition();
        var lc = new LightControl();
        /* setting up instance of all the command that has to perform and pass the system instance */
        var musicplay = new MusicPlay(ms);
        var lightOn = new LightOn(lc);
        var lightOff = new LightOff(lc);
        var acon = new AcOn(ac);
        var acoff = new AcOff(ac);
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
    }
    catch (e) {
        console.log(e + " :set the debugger chain correclty");
    }
}
main();
/*Here in this example we only have one button in the remote that can be used to perform differnt tasks like lighton,lightoff, play miusic, turn on AC, turnOff ac. This commands use different systems Light, MusicSystem, Aircondition.
All these commands can be performed on a single button press; we just have to setCommand and everytime we want it to do adifferent task, we will pass the instance of the new task. we can do it by creating a class out of thses commands
which uses the original system methods( like Lightcontrol, muysicsystem, aircondition) and then perform on execute method */
