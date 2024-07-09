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
    return title + " " + this.fn + " " + this.ln;
  }
}



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