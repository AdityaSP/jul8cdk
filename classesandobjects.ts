// created objects on the fly
// blueprint/mould/factory/conveyor belt

class Employee {
  fn: string;
  ln: string;
  age: number;
  designation: string;
  id: number | string;
  
  constructor(f: string, l :string, a: number, d: string, i: number|string){
    this.fn = f
    this.ln = l
    this.age = a
    this.designation = d
    this.id = i
  }

  getEmpFullname(title: string) {
    return title + " " + this.fn + " " + this.ln + "(" + this.designation + ")";
  }
}

let emp1: Employee = new Employee("Bruce", "Wills", 57, "AVP", 456)
let emp2 = emp1
let emp3: Employee = new Employee("Steve", "Jobs", 70, "Founder CEO", "EMP001");

console.log(emp1.getEmpFullname("Mr."))
console.log(emp2.getEmpFullname("Mr."));

emp1.fn = "John";

console.log(emp1.getEmpFullname("Mr."));
console.log(emp2.getEmpFullname("Mr."));


// type Employee = {
//   fn: string;
//   ln: string;
//   age: number;
//   designation: string;
//   id: number | string;
//   mgrId?: number | string;
// };

// type Department = {
//   n: string;
//   director: Employee;
// };

// function getEmpFullname(e: Employee) {
//   return e.fn + " " + e.ln;
// }

// function printDept(d: Department) {
//   return "Name:" + d.n + " The director is" + getEmpFullname(d.director);
// }