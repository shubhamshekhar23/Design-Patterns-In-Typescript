var ShowRoom = /** @class */ (function () {
    function ShowRoom(name) {
        this.name = name;
        this.cartypes = new Array();
    }
    ShowRoom.prototype.receive = function (ct) {
        this.cartypes.push(ct);
        console.log(this.name + " have been notified with " + ct);
    };
    return ShowRoom;
}());
var CarHeadquarter = /** @class */ (function () {
    function CarHeadquarter(ct) {
        this.cartypes = new Array();
        this.showrooms = new Array();
        this.cartypes.push(ct);
    }
    CarHeadquarter.prototype.addCarType = function (ct) {
        this.cartypes.push(ct);
        this.sendMessageToAll(ct);
    };
    CarHeadquarter.prototype.sendMessageToAll = function (ct) {
        this.showrooms.forEach(function (show) {
            show.receive(ct);
        });
    };
    CarHeadquarter.prototype.addShowRoom = function (sp) {
        this.showrooms.push(sp);
        this.cartypes.forEach(function (st) {
            sp.receive(st);
        });
    };
    return CarHeadquarter;
}());
function main() {
    var ch = new CarHeadquarter("sedan");
    var cp1 = new ShowRoom("Delhi");
    var cp2 = new ShowRoom("Bangalore");
    var cp3 = new ShowRoom("kolkata");
    var cp4 = new ShowRoom("Mumbai");
    ch.addShowRoom(cp1);
    ch.addShowRoom(cp2);
    ch.addShowRoom(cp3);
    ch.addShowRoom(cp4);
    ch.addCarType("sports");
}
main();
/* OUTPUT -

Delhi have been notified with sedan
Bangalore have been notified with sedan
kolkata have been notified with sedan
Mumbai have been notified with sedan
Delhi have been notified with sports
Bangalore have been notified with sports
kolkata have been notified with sports
Mumbai have been notified with sports

*/
/* This example has the functionality that at first we create a headquarter with atleast one cartype; then showroom can be created independently, then they can request the headquarter to add them; as soon as they are added, they are populated with all the cartypes that are avaiable at that time in the headquarter; once a new cartype is added in the headquarter; all the added showrooms are notified */
