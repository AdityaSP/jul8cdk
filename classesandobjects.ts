// created objects on the fly
// blueprint/mould/factory/conveyor belt

class Employee {
  fn: string;
  ln: string;
  age: number;
  designation: string;
  id: number | string;
  mngrId?: number | string;

  constructor(
    f: string,
    l: string,
    a: number,
    d: string,
    i: number | string,
    mid?: number | string
  ) {
    this.fn = f;
    this.ln = l;
    this.age = a;
    this.designation = d;
    this.id = i;
    if (typeof mid !== undefined) this.mngrId = mid;
  }

  getEmpFullname(title: string) {
    return title + " " + this.fn + " " + this.ln + "(" + this.designation + ")";
  }
  getManger() {
    if (typeof this.mngrId !== undefined) return this.mngrId;
    else return "";
  }
}

class Department {
  n: string;
  director: Employee;
  constructor(nm: string, dir: Employee) {
    this.n = nm;
    this.director = dir;
  }
  printDept() {
    return (
      "Name:" +
      this.n +
      " The director is" +
      this.director.getEmpFullname("Dir.")
    );
  }
}

let emp1: Employee = new Employee("Bruce", "Wills", 57, "AVP", 456);
let emp3: Employee = new Employee("Steve", "Jobs", 70, "Founder CEO", "EMP001");

console.log(emp1.getEmpFullname("Mr."));

let dep = new Department("Analytics", emp3);
console.log(dep.printDept());