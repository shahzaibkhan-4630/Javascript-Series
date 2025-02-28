// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNumbers = myNumbers.map((number) => {
//   return number + 10;
// });

// console.log(newNumbers);

// Through For-Each

// let newNumbers = [];

// myNumbers.forEach((number) => {
//   newNumbers.push(number + 10);
// });

// console.log(newNumbers);

const NumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbersArray = NumbersArray.map((num) => {
  return num * 10;
})
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num > 50;
  });

console.log(newNumbersArray);
