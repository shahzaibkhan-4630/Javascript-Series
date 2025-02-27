// if

// const isUserLoggedIn = true;
// const temprature = 23;

// if (temprature < 30) {
//   console.log("Less than 30");
// }else{
//     console.log("Greater than 30");

// }

// if (2 === "2") {
//   console.log("Executed");
// }

// <,>,>=,<=,==,!=, ===, !==

// const score = 200;

// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power Is: ${power}`);

// }

// const balance = 1000;

// if (balance > 500) console.log("Test");

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = "false";
const loggedInFromEmail = "true";

if (userLoggedIn && debitCard) {
  console.log("Allow to buy Courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
    
}
