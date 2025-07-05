// # Primitive Datatypes 

// String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 345378459494858n



// Reference Type - non primitive

// Array, Objects, Functions

const heros = ['spiderman', 'ironman', 'hulk', 'captain america']
let myObj = {
    name: 'prathmesh',
    age: 28
}

const myFunction = function() {
    console.log('hello world'); 
}


// console.log(typeof bigNumber);

// ########################################################### memory

// stack(Primitive), heap(Non-Primitive)

let myYoutuveName = 'prathmeshdev.com'
let anotherName = myYoutuveName
anotherName = "chaiaurcode"
console.log(myYoutuveName);
console.log(anotherName);


let user = {
    email: 'prathmeshrikame44@gmail.com',
    upi: 'prathmesh@okicici'
}

let newUser = user
newUser.email = "anonymous@gmail.com"

console.log(user.email);
console.log(newUser.email);
