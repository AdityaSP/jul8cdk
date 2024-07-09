// 1. object composition - relationship question "Has a"

//Department and Employee - has a - object composition

//"Living Being" and "Human Being"
    //does it answer the question "Has a relationship"
    // human being "is a" living being

// "has a" and "is a"
// what is the behaviour of a living being
    //breathes
// for a HB to be called as a LB 


class LB{
    breathe(){
        console.log("I breathe")
    }
}

class Fabric{
    breathe(){
        console.log("I breathe")
    }
}


let lbobj = new LB()
lbobj.breathe()

class HB extends LB {
    metathink(){
        console.log("I think therefore I am")
    }
}

let hbobj = new HB()
hbobj.breathe()
hbobj.metathink()

class SWE extends HB{
    code(){
        console.log("I code")
    }
}

let swobj = new SWE()
swobj.breathe()
swobj.metathink()
swobj.code()
// SWE is a HB is LB

class Account {
  debit() {
    console.log("I debit");
  }
  credit() {
    console.log("I credit");
  }
}

class SavingsAccount extends Account{

}

class CurrentAccount extends Account{

}

// SA "has a" CA ---> NO
// SA "is a" CA --> NO
// SA "is a" Account
// CA "is a" Account

