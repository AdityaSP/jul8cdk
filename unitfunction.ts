//definition or create a function
function sayHello(){
    console.log("Hello there!!!")
}
//usage or call a function
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()

// functions with side effect
function greet(n :string){
    console.log("Hello", n)
}

greet("Aditya")
greet("World")
let firstn: string = "Mc"
let ln: string = "Donald"
let fulln: string = ln+","+firstn
greet(fulln)

//pure functions - map input values to output values
function add(x: number, y: number){
    return x + y
}

let a = 10
let b = 20
let c:number = add(a, b) * 20
console.log("final answer", c)

// add(3, add(4, add(5 , 6)))
let ans = add(3, add(4, add(5,6)))
console.log(ans)
console.log(add(3, add(4, add(5, 6))));
// above two statements are one and the same

// f(x) = x + 20
//f(f(20))


function mul(x: number, y: number){
    return x * y
}

function div(x: number, y: number){
    return x/y
}

function calcSI(p: number, r: number, t:number){
    return div(mul(mul(p, t),r), 100)
}

console.log("SI is", calcSI(1000, 2, 5))


// default arguments or default parameters
function fullName(fn: string, ln: string, title: string ="Mr") :string {
    return title + "." + fn + " " + ln
}

//Not passing the title
console.log(fullName("Aditya", "Prabhakara"))

//With a different title
console.log(fullName("Aditya", "Prabhakara", "Dr"));

// function which calculates the area of a circle 3.14 * r * r
// default the value the of PI to 3.14

function circleArea(r: number, PI:number = 3.14){
    return PI * r * r
}

console.log(circleArea(5));
console.log(circleArea(5, 3.145));


function f1(a =10, b=20){
    return a + b
}

console.log(f1(undefined, 10))

// functions as first class citizens / first class construct
// pass a function to another function

// definition 
// higher order function
function calc(m: number,n: number, func){
    return func(m, n)
}

// injecting add functionality to calc
let sum = calc(5,6,add)
// injecting mul functionality to calc
let prod = calc(5,6,mul)
// injecting div functionality to calc
let parts = calc(5,6,div)
let nosense = calc(5, 6, circleArea)
let ful = calc(5, 6, fullName);

console.log(sum, prod, parts, ful)

function calc1(m: number, n: number, func: (x: number, y: number)=> number ) {
  return func(m, n);
}

// injecting add functionality to calc
let sum1 = calc1(5,6,add)
// injecting mul functionality to calc
let prod1 = calc1(5,6,mul)
// injecting div functionality to calc
let parts1 = calc1(5,6,div)
let nosense1 = calc1(5, 6, circleArea)
//let ful1 = calc1(5, 6, fullName);

console.log(sum1, prod1, parts1)

