const myObject = {
  JS: "Javascript",
  CPP: "C++",
  RB: "Ruby",
  swift: "Swift By Apple",
};

for (const key in myObject) {
  // console.log(key);
  // console.log(myObject[key]);
  //   console.log(key, ":-", myObject[key]);
}

const programming = ["JS", "Ruby", "C++", "Python"];

for (const key in programming) {
//   console.log(`The Language Is: ${programming[key]}`);
}
// In for of loop it return direct values
// But in for-in loop it return keys

// const map = new Map();

// map.set("PK", "Pakistan");
// map.set("USA", "United States Of America");
// map.set("AUS", "Australia");

// for (const key in map) {
//     console.log(key); // map is not iteratable
// }

