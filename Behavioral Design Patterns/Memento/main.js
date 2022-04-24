var CarSoftwareStatus = /** @class */ (function () {
    function CarSoftwareStatus(n1, n2) {
        this.newChange = n1;
        this.correction = n2;
    }
    CarSoftwareStatus.prototype.setNewChange = function (chn) {
        this.newChange = chn;
    };
    CarSoftwareStatus.prototype.setCorrection = function (chn) {
        this.correction = chn;
    };
    CarSoftwareStatus.prototype.getDetails = function () {
        console.log("Change :" + this.newChange + " ; " + "Correction : " + this.correction);
    };
    CarSoftwareStatus.prototype.createMemento = function () {
        return new CarSoftwareMemento(this);
    };
    CarSoftwareStatus.prototype.setStatusFromMemento = function (mem) {
        var cssNew = mem.getStatus();
        this.setNewChange(cssNew.newChange);
        this.setCorrection(cssNew.correction);
    };
    return CarSoftwareStatus;
}());
var CarSoftwareMemento = /** @class */ (function () {
    function CarSoftwareMemento(css) {
        this.css = new CarSoftwareStatus(css.newChange, css.correction);
    }
    CarSoftwareMemento.prototype.getStatus = function () {
        return this.css;
    };
    return CarSoftwareMemento;
}());
var SoftwareCareTaker = /** @class */ (function () {
    function SoftwareCareTaker() {
        this.mementolist = new Array();
    }
    SoftwareCareTaker.prototype.add = function (c1) {
        this.mementolist.push(c1);
    };
    SoftwareCareTaker.prototype.getMemento = function (index) {
        return this.mementolist[index];
    };
    return SoftwareCareTaker;
}());
function main() {
    var css1 = new CarSoftwareStatus("change1", "correction1");
    var sct = new SoftwareCareTaker();
    sct.add(css1.createMemento());
    css1.setCorrection("correct2");
    sct.add(css1.createMemento());
    css1.setNewChange("change2");
    sct.add(css1.createMemento());
    css1.setStatusFromMemento(sct.getMemento(0));
    css1.getDetails();
    css1.setStatusFromMemento(sct.getMemento(1));
    css1.getDetails();
    css1.setStatusFromMemento(sct.getMemento(2));
    css1.getDetails();
}
main();
/* OUTPUT -

Change :change1 ; Correction : correction1
Change :change1 ;  Correction : correct2
Change :change2 ;  Correction : correct2

*/
/* This has 3 parts - memento( that has the state of an object), originator(CarSoftwarestatus - that can create memento and stores the current state of the object) and other is caretaker(that stores the list of memento and return whichever is required); the memento that caretaker provies can be used to set the current status of the software; this pattern can be used just like in git */
