// this refer to current context

const user = {
  username: "Shahzaib",
  price: 999,
  welcomeMessage: function () {
    console.log(`Hi ${this.username}, Welcome to Website`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // In node this refer to {} empty object in global scope

// function one(){
//     let username = "shahzaib"
//     console.log(this.username); // not worked
// }

// one()

// const One = () => {
//   let username = "shahzaib";
//   console.log(this.username); // not working undefined
//   console.log(this); // empty object
// };

// const addTwo = (num1, num2) => { // if curley braces use then return statement must be written
//   return num1 + num2;
// };

// console.log(addTwo(3, 5));

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); // if parenthesis use then return statement not written
const addTwo = (num1, num2) => ({ username: "Hitesh" }); // to return object must wrap with parenthesis

// console.log(addTwo(3,4))

// const myArray = [2, 3, 4, 5, 6, 7];

// myArray.forEach(() => ());
