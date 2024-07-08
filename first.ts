// D:\training\jul8>tsc first.ts

// D:\training\jul8>node first.js
// Hello World!!!

// D:\training\jul8>

console.log("Hello World!!!")

let age: number = 10
// Wrong assignment
// a = "Hello"

let fn: string = "John"
let isEligible: boolean = true

age = age + 20

const PI: number = 3.14
// wrong reassignment
// PI = 3.145

console.log("Age is", age, "Eligibility: ", isEligible, "PI is ", PI)

// si = p * t * r /100
const r :number = 8
let p: number = 1000
let t: number = 4
let si = p * t * r /100
console.log("SI for p", p, " for a time of ", t, "@ rate", r, "is", si)

p = 3000
t = 2
si = p*t*r*100
console.log("SI for p", p, " for a time of ", t, "@ rate", r, "is", si);
