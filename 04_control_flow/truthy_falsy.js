const userEmail = "skkhan@gmail.com";
// const userEmail = "" // else statement run because empty string
// [] truthy value

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have user email");
}

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