// ++++++++++++++ NUMBERS ++++++++++++++++++++++++++
const score = 3345;
// console.log(score);

const balance = new Number(200);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.54654;

// console.log(otherNumber.toPrecision(2)); // returns a string

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++++++ MATHS ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,5,6,8));
// console.log(Math.max(4,3,5,6,8));

// console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
