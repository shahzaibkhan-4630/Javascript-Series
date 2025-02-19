// Datatypes divided in to two categories

// Primitive (Call By Value)

// Number
const score = 100;

// String
const userName = "SKKHAN";

// Null
const outsideTemp = null;

// Undefined
let userEmail;

// Boolean
let isLoggedIn = false;

// Symbol
const id = Symbol("1234");
const anotherId = Symbol("1234");
// return types of symbol is symbol
console.log(id === anotherId);

// BigInt

// Non-Primitive Or Reference (Call by Reference)

// Array

const heros = ["Superman", "Batman"];

// Object

const Object = {
  name: "Skkhan",
  age: 22,
};

// Function

const myFunction = function () {
    console.log("Hello World");
    
}

// type of BigInt is Undefined
// type of null is object