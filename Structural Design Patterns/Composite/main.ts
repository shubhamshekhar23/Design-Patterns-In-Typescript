export function main() {
  try {
    let director: Employee = new Employee("john", "Director", 1200);
    let leadmanager: Employee = new Employee("Kate", "Manager", 1000);
    let sportsmanager: Employee = new Employee("robert", "Sports Manager", 900);
    let sedanmanager: Employee = new Employee("ludo", "Sedan Manager", 900);
    let luxurymanager: Employee = new Employee("kevin", "Luxury Manager", 900);
    let engineer1: Employee = new Employee("tom", "car Engineer", 700);
    let engineer2: Employee = new Employee("leonard", "car engineer", 700);
    let worker1: Employee = new Employee("mike", "worker", 500);
    let worker2: Employee = new Employee("steve", "worker", 500);

    director.add(leadmanager);

    leadmanager.add(sportsmanager);
    leadmanager.add(sedanmanager);
    leadmanager.add(luxurymanager);

    sportsmanager.add(engineer1);
    sedanmanager.add(engineer2);

    engineer1.add(worker1);
    engineer2.add(worker2);

    sportsmanager.showSubordinatesDetails();
  } catch (e) {
    console.log("whatsup");
  }
}

main();

/** When you want to keep the list of same type of objects inside the same object; using composition; you can also craete a directory class and storing all the
 * objects there and calling getdetails() from there.
 */

interface EmployeePlan {
  add(e1: Employee);
  remove(e1: Employee);
  showSubordinatesDetails();
}

class Employee implements EmployeePlan {
  name: String;
  designation: String;
  salary: number;
  subordinates: Array<Employee>;
  constructor(name: String, designation: String, salary: number) {
    this.name = name;
    this.designation = designation;
    this.salary = salary;
    this.subordinates = new Array<Employee>();
  }

  public add(e1: Employee) {
    this.subordinates.push(e1);
  }

  public remove(e1: Employee) {
    let index = -1;
    this.subordinates.forEach((item, i) => {
      if (item === e1) {
        index = i;
      }
    });
    this.subordinates.splice(index, 1);
  }

  public showSubordinatesDetails() {
    this.subordinates.forEach((item) => {
      console.log(
        "name :" +
          item.name +
          " position :" +
          item.designation +
          " salary :" +
          item.salary
      );
      item.showSubordinatesDetails();
    });
  }
}
