// Object can be declared in two ways
// 1) literals
// 2) Constructor
// whenever we create the object with constructor then that object is called singleton object
// Object.create() // this is the way to create object through constructor

// Object literals

const mySymbol = Symbol("Key1");

const JsUser = {
  name: "Shahzaib",
  age: 22,
  location: "karachi",
  email: "shahzaib@gmail.com",
  isLoggedIn: false,
  [mySymbol]: "Key1",
};

// Ways to access Js Object
// console.log(JsUser.name);
// console.log(JsUser["name"]); // compulsory to give object key in the string form
// console.log(JsUser[mySymbol]);

// JsUser.email = "skkhan@gmail.com" updating the value

// Object.freeze(JsUser) freeze the object no will able to update the value after this
// After freeze if change any value it will not through any error but not propogate the changes

JsUser.greeting = function () {
  console.log("Hello Js User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`); // whenever you want to refer the same object then use "this" keyword
};

console.log(JsUser.greetingTwo());
