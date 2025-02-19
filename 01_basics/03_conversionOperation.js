let score = "33";
let stringScore = "33abc";

// console.log(typeof (score)); as a Method

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

let stringValueInNumber = Number(stringScore);
// console.log(typeof(stringValueInNumber)) // it convert into number but return value is Nan
// console.log(stringValueInNumber); // it return the value NaN

// Number convert null to 0
// Number convert undefined to Nan
// Number conver boolean to 1 or 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// If we convert empty string to boolean it return value is false
// If we convert not empty string to boolean it return value is true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ********************** Operations ************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello";
let str2 = " Shahzaib";

let str3 = str1 + str2;

// console.log(str3)

// console.log("1" + 2); // 12 output
// console.log(1 + "2"); // 12 output
// console.log("1" + 2 + 2); // 122 output
// console.log(1 + 2 + "2"); // 32 output

// console.log(+true);
// console.log(+"");

// Prefix

let x = 3;
const y = x++;
// console.log(`The Value of x:${x} \nThe Value of y:${y}`);

// Postfix

let a = 3
const b = ++a
// console.log(`The Value of a:${a} \nThe Value of b:${b}`)