var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarAiVirus = /** @class */ (function () {
    function CarAiVirus(p) {
        this.threatLevel = p;
    }
    CarAiVirus.prototype.getThreat = function () {
        return this.threatLevel;
    };
    return CarAiVirus;
}());
var DebuggerChainPlan = /** @class */ (function () {
    function DebuggerChainPlan() {
    }
    DebuggerChainPlan.prototype.debug = function (v) { };
    DebuggerChainPlan.prototype.setNextDebugger = function (d) {
        this.next = d;
    };
    return DebuggerChainPlan;
}());
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Engineer.prototype.debug = function (v) {
        if (v.getThreat() > 2) {
            this.next.debug(v);
        }
        else {
            console.log("Virus removed by Engineer");
        }
    };
    return Engineer;
}(DebuggerChainPlan));
var Expert = /** @class */ (function (_super) {
    __extends(Expert, _super);
    function Expert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Expert.prototype.debug = function (v) {
        console.log("Virus removed by Expert");
    };
    return Expert;
}(DebuggerChainPlan));
var TeamLead = /** @class */ (function (_super) {
    __extends(TeamLead, _super);
    function TeamLead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamLead.prototype.debug = function (v) {
        if (v.getThreat() > 5) {
            this.next.debug(v);
        }
        else {
            console.log("Virus removed by TeamLead");
        }
    };
    return TeamLead;
}(DebuggerChainPlan));
var TechnicalOfficer = /** @class */ (function (_super) {
    __extends(TechnicalOfficer, _super);
    function TechnicalOfficer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechnicalOfficer.prototype.debug = function (v) {
        if (v.getThreat() > 10) {
            this.next.debug(v);
        }
        else {
            console.log("Virus removed by TechnicalOfficer");
        }
    };
    return TechnicalOfficer;
}(DebuggerChainPlan));
function main() {
    try {
        /* Creating a new virus instance and set the severity level just to test */
        var virus = new CarAiVirus(1);
        /* Creating testers instance */
        var e1 = new Engineer();
        var t1 = new TeamLead();
        var ct1 = new TechnicalOfficer();
        var ee = new Expert();
        /* Set the hierarchy by using ofr each one by passing the instance of upper level tester */
        e1.setNextDebugger(t1);
        t1.setNextDebugger(ct1);
        ct1.setNextDebugger(ee);
        /* Give the virus to the lowest level tester */
        e1.debug(virus);
    }
    catch (error) {
        console.log(error + " :set the debugger chain correclty");
    }
}
main();
/* There are new viruses being discovered in the system whose severity level can be set ; now there is a debugger chain hierecahy; if an engineer can solve it then it's fine; otherwise he will pass it to team lead; if team lead can't solve it then he will pass it to technical officer;if he can't then he will pass it to the Expert where its solved finally. So a chain abstract class is created and all the debuggers will extend from it amd create a chain */
