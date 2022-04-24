var ArtificialIntelligence = /** @class */ (function () {
    function ArtificialIntelligence() {
    }
    ArtificialIntelligence.prototype.turnOn = function () {
        console.log("AI of the car started");
    };
    ArtificialIntelligence.prototype.turnOff = function () {
        console.log("AI is turned off");
    };
    return ArtificialIntelligence;
}());
var AutoPilot = /** @class */ (function () {
    function AutoPilot() {
        this.map = new GoogleMap();
        this.engine = new Engine();
        this.ai = new ArtificialIntelligence();
        this.guidingvoice = new GuidingVoice();
    }
    AutoPilot.prototype.start = function () {
        this.map.turnOn();
        this.engine.turnOn();
        this.ai.turnOn();
        this.guidingvoice.turnOn();
        console.log("You can relax now. The car is in autopilot mode");
    };
    AutoPilot.prototype.end = function () {
        this.map.turnOff();
        this.engine.turnOff();
        this.ai.turnOff();
        this.guidingvoice.turnOff();
    };
    return AutoPilot;
}());
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.turnOn = function () {
        console.log("Engine started");
    };
    Engine.prototype.turnOff = function () {
        console.log("Engine is turned off");
    };
    return Engine;
}());
var GoogleMap = /** @class */ (function () {
    function GoogleMap() {
    }
    GoogleMap.prototype.turnOn = function () {
        console.log("Google map started");
    };
    GoogleMap.prototype.turnOff = function () {
        console.log("Google map is turned off");
    };
    return GoogleMap;
}());
var GuidingVoice = /** @class */ (function () {
    function GuidingVoice() {
    }
    GuidingVoice.prototype.turnOn = function () {
        console.log("Guiding voice of the car started");
    };
    GuidingVoice.prototype.turnOff = function () {
        console.log("Guiding voice is turned off");
    };
    return GuidingVoice;
}());
function main() {
    try {
        var ap = new AutoPilot();
        ap.start();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
/**
 * Facade means hiding all the compexities from the client. In this example all the compelexity like switching on different system
 * for the auto pilot to work has been done by the auto pilot class whcih is a facade; if it hadnot been there to make it work
 * client had to start all the system components himself.
 */
