const accountId = 14453
var accountPassword = "12345"
let accountEmail = "xyz@gmail.com"

//accountId = 123  //you can not change the constant variables.
/*
prefer not to use var 
beacuse of issue in block scope and functional scope.  
*/
accountName = "sbi"
// we can also write this way without writing keyword but it is a bad practice 
let Name;
//if we do not intialize a variable it will give you value undefined 
console.log(Name);
accountPassword = "123";
accountEmail = "xy@";
console.table([accountId,accountEmail,accountPassword]);