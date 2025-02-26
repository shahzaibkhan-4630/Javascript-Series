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
console.log(loginUserMessage());
