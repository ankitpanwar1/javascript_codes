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



//*******************************************/
 
//stack (primitive)   , heap (NON-primitive)

let myyoutubename = "ankit";
let anothername = myyoutubename;
anothername = "shiv";
//so in primitive type stack memory is used so the copy of data is created in stack memory
//in this example the value myyoutube name is copied in anothername variable
//so their will be no change in the original myyoutubename 


let userone = {
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo = userone;
usertwo.email = "ankit@google.com";

console.log(userone);
console.log(usertwo);

//here we are passing the first object value of user one to the user two 
//so the value here is passed as reference as it is non primitive data
//so if wee change in any value in user tw it reflects in user one also