// singleton  --- constructor se object banega to singleton banega ---- literal se banega to singleton nhi banega.
// object.create;

// object literals

//creation
/* const jsuser = {
    name : "ankit",
    "full name" : "ankit panwar",
    age : 20,
    email : "ankitpanwar49663@gmail.com",
    islogin : false
}

//accessing object 
console.log(jsuser.name);  // one way 
console.log(jsuser["name"]); // another way if keys are given in string form then we can not use dot operator so we can access like this.
console.log(jsuser["full name"]); */

/* const mysym = Symbol("key1");
const jsuser = {
    name : "ankit",
    "full name" : "ankit panwar",
    mysym : "mykey1",
    age : 20,
    email : "ankitpanwar49663@gmail.com",
    islogin : false
}

console.log(typeof(jsuser.mysym));  // symbol value is not accessed properly it is not used as symbol here */


// correct way to use symbol as object value
/* const mysym = Symbol("key1");
const jsuser = {
    name : "ankit",
    "full name" : "ankit panwar",
    [mysym] : "mykey1",   // correct syntax to make symbol as key
    age : 20,
    email : "ankitpanwar49663@gmail.com",
    islogin : false
}

console.log(typeof(jsuser[mysym])); */
/* const mysym = Symbol("key1");
const jsuser = {
    name : "ankit",
    "full name" : "ankit panwar",
    age : 20,
    email : "ankitpanwar49663@gmail.com",
    islogin : false,
    [mysym] : "mykey1"      // output of using symbol in correct way[Symbol(key1)]: 'mykey1'  
}

// changing value in object

jsuser.email = "chatgpt@gmail.com";
console.log(jsuser);

// freezing
 
//Object.freeze(jsuser); // no one can change the value now
jsuser.email = "ankuutt@gmail.com";
console.log(jsuser); */

/* //Adding function in object
const jsuser = {
    name : "ankit",
    "full name" : "ankit panwar",
    age : 20,
    email : "ankitpanwar49663@gmail.com",
    islogin : false
}
//accessing  using function 
jsuser.greetings = function(){
    console.log("bhaikoooo");
}
console.log(jsuser.greetings());

//accessing using function keys of object
jsuser.greetingstwo = function(){
    console.log(`bhaikooooo, ${jsuser.name}`);
}
console.log(jsuser.greetingstwo());

// accessing using function using "this"
jsuser.greetingsthree = function(){
    console.log(`bhaikooooo, ${this.name}`);
}
console.log(jsuser.greetingsthree()); */






/*         ************************************************************************************                 */

//                        object using constructor ----- singleton

/* const tinderuser = new Object();

tinderuser.id = "123abc"
tinderuser.name = "ankit"
tinderuser.islogin = false
console.log(tinderuser); */

/* const regularuser = {
    email : "haikoi@gmail.com",
    fullname: {
        username : {
            first : "ankit",
            second :"panwar"
        }
    }
} */
                                               //Accessing nested object keys
//console.log(regularuser);
//console.log(regularuser.fullname);
//console.log(regularuser.fullname.username.first);

/* const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c",4:"d"}
 */
//const obj3 = {obj1,obj2};
//console.log(obj3); //  obj1 and obj2 come inside obj3  onject inside object

// to not make object inside object just putting the value of obj1 and on=bj2 in obj3
/*  const obj3 = Object.assign(obj1,obj2); // if we assign like this the obj1 will act as a target and the obj2 values will merge to obj1 values that change the obj1
console.log(obj1);  // obj1 value is changed
const obj4 = Object.assign({},obj1,obj2);  // best way to use it like this here the obj1 value did not change as the target will now {} 
console.log(obj1); // obj1 value remain same
console.log(obj3);
console.log(obj4); */


/* // using spread 
const obj3 = {...obj1,...obj2};
console.log(obj3);
 */

// when data come from database it is in the form of array of objects

/* const user = [
    {
        name:"ankit",
        email:"a@gmail.com"
    },
    {
        name:"parth",
        email:"p@gmail.com"
    },
    {
        name:"aniket",
        email:"aa@gmail.com"
    }
]

//accessing value from here
console.log(user[2].name); */


const tinderuser = new Object();

tinderuser.id = "123abc"
tinderuser.name = "ankit"
tinderuser.islogin = false

/* console.log(tinderuser);
console.log(Object.keys(tinderuser));  //all the keys come in the form of array 
console.log(Object.values(tinderuser));  //all the valuse come in the form of array
console.log(Object.entries(tinderuser)); //all the keys and value come in the form of array

console.log(tinderuser.hasOwnProperty('name')); // checking if the key is present in object or not
console.log(tinderuser.hasOwnProperty('surname')); //false output as surname is not present in the object */




/*                           ************************************     destructuring  *******************************************************                 */

/* const{islogin}  = tinderuser   // taking out islogin from tinderuser so we dont have to use it again and again like tinderuser.islogin
console.log(islogin);
const{islogin:andrhai} = tinderuser; //changing name of islogin to andrhai now we can use andrhai in place of islogin
console.log(andrhai); */