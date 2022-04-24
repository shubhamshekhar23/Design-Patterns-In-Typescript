var AndVoice = /** @class */ (function () {
    function AndVoice(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }
    AndVoice.prototype.interpret = function (input) {
        if (this.v1.interpret(input) && this.v2.interpret(input)) {
            console.log("Successfully interpreted");
            return true;
        }
        else {
            console.log("Could not interpret it");
            return false;
        }
    };
    return AndVoice;
}());
var OrVoice = /** @class */ (function () {
    function OrVoice(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }
    OrVoice.prototype.interpret = function (input) {
        if (this.v1.interpret(input) || this.v2.interpret(input)) {
            console.log("Successfully interpreted the OR");
            return true;
        }
        else {
            console.log("Could not interpret it");
            return false;
        }
    };
    return OrVoice;
}());
var VoiceInput = /** @class */ (function () {
    function VoiceInput(data) {
        this.data = data;
    }
    VoiceInput.prototype.interpret = function (input) {
        if (input.indexOf(this.data) !== -1) {
            return true;
        }
        return false;
    };
    return VoiceInput;
}());
function main() {
    try {
        // setting up the voice command sysytem
        var v1 = new VoiceInput("drive");
        var v2 = new VoiceInput("startCar");
        var driveCommand = new OrVoice(v1, v2);
        driveCommand.interpret("driveCar");
        driveCommand.interpret("startCar");
        var v3 = new VoiceInput("fuelcheck");
        var v4 = new VoiceInput("doorclosed");
        var securityCommand = new AndVoice(v3, v4);
        securityCommand.interpret("fuelcheck, doorclosed");
        securityCommand.interpret("fuel, door");
    }
    catch (e) {
        console.log(e + " :set the debugger chain correclty");
    }
}
main();
/*This is interpreter; just like we can define grammar rules; here we define an interpreter called voice input
that has a data based on which the interpretaion will go on; and then there are expressions handler like what combination we
want to handle AND OR and we can create our combinatuion of voice inputs and then interpret */
