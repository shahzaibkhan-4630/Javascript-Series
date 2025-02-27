// const userEmail = "skkhan@gmail.com";
// const userEmail = "" // else statement run because empty string
// [] truthy value

// if (userEmail) {
//   console.log("Got User Email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN
// rest of other from the above are truthy values
// Some special truth values below
// "0","false"," ",{},[],function(){} empty functions

// const array = [];

// if (array.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("Object Is Empty");

// }

// false == 0 // output true
// false == '' // output true
// 0 == '' // output true

// Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 25
// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("more than 80");
