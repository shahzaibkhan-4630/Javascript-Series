let score = "33";
let stringScore = "33abc";

// console.log(typeof (score)); as a Method

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let stringValueInNumber = Number(stringScore)
// console.log(typeof(stringValueInNumber)) // it convert into number but return value is Nan
// console.log(stringValueInNumber); // it return the value NaN

// Number convert null to 0
// Number convert undefined to Nan 
// Number conver boolean to 1 or 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// If we convert empty string to boolean it return value is false
// If we convert not empty string to boolean it return value is true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)