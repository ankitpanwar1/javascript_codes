//Datatypes
// 1 => Primitive

// 7 types : String,Number,Boolean,NULL,Undefined,symbol,BigInt

//Reference (Non primitive)

// Array , Objects, Functions

//javascript is a dynamically typed language we do not have to declare the type
//of the data

//symbol datatype   => uniqueness
// const id = symbol('123')  id must be unique of all  the user


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

