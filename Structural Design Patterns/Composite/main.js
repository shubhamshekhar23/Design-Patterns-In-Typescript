var Employee = /** @class */ (function () {
    function Employee(name, designation, salary) {
        this.name = name;
        this.designation = designation;
        this.salary = salary;
        this.subordinates = new Array();
    }
    Employee.prototype.add = function (e1) {
        this.subordinates.push(e1);
    };
    Employee.prototype.remove = function (e1) {
        var index = -1;
        this.subordinates.forEach(function (item, i) {
            if (item === e1) {
                index = i;
            }
        });
        this.subordinates.splice(index, 1);
    };
    Employee.prototype.showSubordinatesDetails = function () {
        this.subordinates.forEach(function (item) {
            console.log("name :" +
                item.name +
                " position :" +
                item.designation +
                " salary :" +
                item.salary);
            item.showSubordinatesDetails();
        });
    };
    return Employee;
}());
function main() {
    try {
        var director = new Employee("john", "Director", 1200);
        var leadmanager = new Employee("Kate", "Manager", 1000);
        var sportsmanager = new Employee("robert", "Sports Manager", 900);
        var sedanmanager = new Employee("ludo", "Sedan Manager", 900);
        var luxurymanager = new Employee("kevin", "Luxury Manager", 900);
        var engineer1 = new Employee("tom", "car Engineer", 700);
        var engineer2 = new Employee("leonard", "car engineer", 700);
        var worker1 = new Employee("mike", "worker", 500);
        var worker2 = new Employee("steve", "worker", 500);
        director.add(leadmanager);
        leadmanager.add(sportsmanager);
        leadmanager.add(sedanmanager);
        leadmanager.add(luxurymanager);
        sportsmanager.add(engineer1);
        sedanmanager.add(engineer2);
        engineer1.add(worker1);
        engineer2.add(worker2);
        sportsmanager.showSubordinatesDetails();
    }
    catch (e) {
        console.log("whatsup");
    }
}
main();
/** When you want to keep the list of same type of objects inside the same object; using composition; you can also craete a directory class and storing all the
 * objects there and calling getdetails() from there.
 */
