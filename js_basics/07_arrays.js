// Array
//Declaring
const myArr = [0,1,2,3,4,5,true,"hitesh"]
const myHeroes = ["spiderman","sinchan"]
const myArr2 = new Array(1,2,3,4,5)
//Accessing

//console.log(myArr[6]);

//Push --- Adding Element at the last of array 
/* myArr.push(6);
console.log(myArr); */

//pop ---- Removing last element
/* myArr.pop();
console.log(myArr);

//unshift ---- Adding Element at the starting of array

myArr.unshift(100);
console.log(myArr);

//shift  ---- Removing element from frint if array
myArr.shift();
console.log(myArr);
 */

//includes --- check if the element is present in array or not it return true/false
/* console.log(myArr.includes("hitesh"));
console.log(myArr); */

// indexof ---- provide the index of element 
//if element is not present it will produce -1
//console.log(myArr.indexOf("hitesh"));

/* const newArr = myArr.join();  // new array will have all the elements of myarray but in string format seperated with comma
console.log(newArr);
console.log(myArr);
console.log(typeof(newArr)); // type will be string
console.log(newArr[3]);  // output -- comma(,) */

//Slice And Splice

/* console.log("A ",myArr);   //A will concatenate with myArr

const myn1 = myArr.slice(1,3);  // Slice take element of the given range including lower limit and not including upper limit
console.log(myn1);   // [1,2]
console.log("B ",myArr);  // their is no change in original array

const myn2 = myArr.splice(0,3); //remove element of the given range from myArr and add those element in myn2
console.log(myn2);    // contain the removed element
console.log(myArr);   // change in the original array the lower limit indx to upper limit indx element will be removed */
/* 
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];
 */
/* arr1.push(arr2);  // arr2 will be inserted into arr1 as an array  and return the new length of array
console.log(arr1);
console.log(arr1[5][0]); 
 */
/* arr1.concat(arr2);  //Combines two or more arrays. This method returns a new array without modifying any existing arrays
console.log(arr1);  //only array1 element will be printed
 */
// to print the concatenated array we must use new array

/* const nyaArr = arr1.concat(arr2); 
console.log(nyaArr);  */  // print the concatenated array

/* const ekArr = [...arr1,...arr2];  // spread every element of arr1 and arr2 and help in developing a new array ekArr
console.log(ekArr); // all the element of arr1 and arr2 combine 
console.log(typeof(arr1)); //no  change in original array*/

/* const another_arr = [1,2,3,4,[5,6,7],8,[9,[10,11,12]]]; // array inside array inside array

const real_another_arr = another_arr.flat(Infinity); // we can use flat to take out all the elements . using infinity here to go through all depth 
console.log(real_another_arr); // print 1,2,3,4,5,6,7,8,9,10,11,12

console.log(Array.isArray("hitesh")); // output false as their is no array of name hitesh 
console.log(Array.from("hitesh"));  // create new array hitesh

console.log(Array.from({name:"hitesh"})); //we are trying to form a key value array using from butit is not possible so it will give empty array as output
// from --- Creates an array from an iterable object.
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // of will help in creating array from a set of elements
// of -----Returns a new array from a set of elements.
 */