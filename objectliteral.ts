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
