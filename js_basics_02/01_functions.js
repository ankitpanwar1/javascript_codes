/* // function definition
function add_two_num(number1,number2)
{
   console.log( number1+number2);           //definition
}
add_two_num(2,2);   //calling */
/* 

function add_two_num(number1,number2)
{
   /* let result =  number1+number2;         type 1 of returning
   return result; */

/*    return number1+number2;      //type 2 of returning
}

const result =  add_two_num(2,2);   //calling and storing in result
console.log("result",result);  */


/* function loginUserMessage(username) */
/* {   */
/*    if(username === undefined) */
/*    { */
/*           console.log("please enter a username"); */
/*           return; */
/*    } */
/*    return `${username} just logged in`; */
/* } */
/*  */
/* console.log(loginUserMessage("ankit")); */
/* console.log(loginUserMessage()); // if you dont pass any value it will give undefined  */

/* 

///////       when you have to pass unknown number of arguments then how would you do it usign rest 


function calculatecartitems(item1)
{
   return item1;
}

console.log(calculatecartitems(2));

//////       using rest         just add three dots before parameter ...parameter1;

function calculatecartitems(...item1)
{
   return item1;
}

console.log(calculatecartitems(200,300,400)); // output will cme in form of array  [ 200, 300, 400 ] */

////////////////////////////   passing object in function

/* const user = {
   name : "ankit",
   price : 500
}

function object_printing(username)
{
   console.log(`hello ${username.name} you have ${username.price} in you account`);
}
//object_printing(user);   // one way

object_printing({
name: "aryan",             // another way
price : 600
}) */

const myNewArray = [200,300,400];

function returnSecondValue(arr)
{
   return arr[1];
}
console.log(returnSecondValue(myNewArray));