function sayMyName() {
  console.log("S");
  console.log("K");
  console.log("K");
  console.log("H");
  console.log("A");
  console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result is:", result);

function loginUserMessage(username = "Sk") {
  if (!username) {
    console.log("Please Enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Shahzaib"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 1300));
const user = {
  username: "shahzaib",
  price: 1300,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
// handleObject({
//   username: "Shahzaib Khan",
//   price: 500,
// });

const myNewArray = [200, 400, 100, 600];

function handleArray(getArray){
    return getArray[1]
}

// console.log(handleArray(myNewArray));
console.log(handleArray([200, 400, 100, 600]));
