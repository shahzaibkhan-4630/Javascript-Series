// Array stores a collection of multiple items under a single variable
// When we do copy operations on Array it create shallow copies rather deep copies
// Shallow Copies: Shallow copy of an object is a copy whose properties share the same refrence point
// Deep Copies: Deep copy of an object is a copy whose properties don't share the same refrence point

const myArray = [0, 1, 2, 3, 4, 5];
// console.log(myArray[0]);
// const myHeros = ["Spiderman", "Batman", "Superman"];
// const myArray2 = new Array(1, 2, 3, 4, 5, 6);

// Array Methods

// myArray.push(6); // Appends new elements to the end of an array, and returns the new length of the array.
// myArray.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// myArray.unshift(12) // Inserts new elements at the start of an array, and returns the new length of the array.
// myArray.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArray.includes(9)); // Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(myArray.indexOf(9)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// const newArray = myArray.join() // Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArray);
// console.log(newArray);

// slice and splice

console.log("A ", myArray);

const myNewArray1 = myArray.slice(1, 3); // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

console.log(myNewArray1);
console.log("B ", myArray);

const myNewArray2 = myArray.splice(1, 3); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log("C ", myArray);
console.log(myNewArray2);

// Splice manipulate the original array