// For Loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop Value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop Value: ${j} and Inner Loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j );
  }
}

let myArray = ["Flash", "Batman", "Spiderman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// Break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log("Number 5 Is Detected");
//     break;
//   }
//   console.log(`The Value Of I ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log("Number 5 Is Detected");
    continue;
  }
  console.log(`The Value Of I ${index}`);
}
