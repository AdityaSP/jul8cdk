//Employee

//fn
//ln
//age
//designation

let john_fn='asdf'
const john_ln = 'aerwe'

//javascript object notation -> JSON

// automatically infer the datatype
let emp1 = {
    fn: "John",
    ln: "Wick",
    age: 18,
    designation: "VP"
}

let emp2: {
  fn: string,
  ln: string,
  age: number,
  designation: string
} = {
    fn: "Bruce",
    ln: "Wills",
    age: 57,
    designation: "AVP"
}

console.log("empname", emp1.fn, emp1.ln, "age", emp1.age)

function empfullname(e: {fn: string, ln: string, age: number, designation: string}) {
  return e.fn + " " + e.ln ;
}

console.log(empfullname(emp1))
console.log(empfullname(emp2))


type Employee = {
  fn: string,
  ln: string,
  age: number,
  designation: string,
  id: number | string,
  mgrId?: number | string, 
}

type Department = {
  n: string,
  director: Employee
}


let emp3: Employee = {
  id: 789,
  mgrId: "EMP456",
  fn: "Bruce",
  ln: "Wills",
  age: 57,
  designation: "AVP"
};

let emp4: Employee = {
  fn: "Steve", 
  ln: "Jobs", 
  age: 70, 
  designation: "Founder CEO",
  id: "EMP456"
}

let analytics: Department ={ n: "Analytics", director: emp3 }


function empfullname2(e: Employee) {
  return e.fn + " " + e.ln;
}

function printDept(d: Department){
  return "Name:" + d.n + " The director is" + empfullname2(d.director)
}


console.log(empfullname2(emp3));
console.log(empfullname2(emp4));
console.log(printDept(analytics))

// distance between two points 
function distance (x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
}


type Point = {x :number, y:number}
const p1 : Point = {x: 3, y:4}
const p2 : Point = {x: 5, y:7}

function distancep(p1: Point, p2: Point) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function streetmap(p1 :Point, p2: Point){

}

distancep(p1, p2) 
streetmap(p1, p2)

// object composition
// employee object is a composition of strings and numbers
// department object is a composition of string and employee
// object encapsulation - data encapsulation
