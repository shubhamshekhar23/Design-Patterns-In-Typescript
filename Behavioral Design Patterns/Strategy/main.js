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
var JumpBehaviour = /** @class */ (function () {
    function JumpBehaviour() {
    }
    JumpBehaviour.prototype.getDetails = function () {
        console.log("Jump Action");
    };
    JumpBehaviour.prototype.action = function () {
        console.log("Jumping");
    };
    return JumpBehaviour;
}());
var KickBehaviour = /** @class */ (function () {
    function KickBehaviour() {
    }
    KickBehaviour.prototype.getDetails = function () {
        console.log("Kick Action");
    };
    KickBehaviour.prototype.action = function () {
        console.log("Kicking");
    };
    return KickBehaviour;
}());
var RollBehaviour = /** @class */ (function () {
    function RollBehaviour() {
    }
    RollBehaviour.prototype.getDetails = function () {
        console.log("Roll Action");
    };
    RollBehaviour.prototype.action = function () {
        console.log("Rolling");
    };
    return RollBehaviour;
}());
var BasicJump = /** @class */ (function (_super) {
    __extends(BasicJump, _super);
    function BasicJump() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicJump.prototype.action = function () {
        console.log("performing basic Jump");
    };
    return BasicJump;
}(JumpBehaviour));
var BasicKick = /** @class */ (function (_super) {
    __extends(BasicKick, _super);
    function BasicKick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicKick.prototype.action = function () {
        console.log("performing basic Kick");
    };
    return BasicKick;
}(KickBehaviour));
var BasicRoll = /** @class */ (function (_super) {
    __extends(BasicRoll, _super);
    function BasicRoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicRoll.prototype.action = function () {
        console.log("performing basic roll");
    };
    return BasicRoll;
}(RollBehaviour));
var SuperJump = /** @class */ (function (_super) {
    __extends(SuperJump, _super);
    function SuperJump() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperJump.prototype.action = function () {
        console.log("performing super Jump");
    };
    return SuperJump;
}(JumpBehaviour));
var SuperKick = /** @class */ (function (_super) {
    __extends(SuperKick, _super);
    function SuperKick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperKick.prototype.action = function () {
        console.log("performing super Kick");
    };
    return SuperKick;
}(KickBehaviour));
var SuperRoll = /** @class */ (function (_super) {
    __extends(SuperRoll, _super);
    function SuperRoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperRoll.prototype.action = function () {
        console.log("performing Super roll");
    };
    return SuperRoll;
}(RollBehaviour));
var Transformer = /** @class */ (function () {
    function Transformer() {
        this.rb = new BasicRoll();
        this.jb = new BasicJump();
        this.kb = new BasicKick();
    }
    Transformer.prototype.setRoll = function (rb) {
        this.rb = rb;
    };
    Transformer.prototype.setJump = function (jb) {
        this.jb = jb;
    };
    Transformer.prototype.setKick = function (kb) {
        this.kb = kb;
    };
    Transformer.prototype.performAction = function () {
        this.rb.action();
        this.jb.action();
        this.kb.action();
    };
    return Transformer;
}());
function main() {
    var t = new Transformer();
    t.setJump(new SuperJump());
    t.setKick(new SuperKick());
    t.performAction();
}
main();
/* This example has a transformer that can perform 3 actions kick,jump and roll; each action has 2 types basic and super; so created a class
separated for each behaviour and then setting the transformer properties with these objects at runtime; and then letting it perfrom action */
