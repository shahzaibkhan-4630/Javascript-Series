// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is the an equality check == and comparison > < >= <= work differently
// comparison convert null to a number, treating it as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
