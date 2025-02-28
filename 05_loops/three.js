// For Of loop

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5,6]

// for (const element of arr) {
//     console.log(element);

// }

// const greetings = "Hello"

// for (const element of greetings) {
//     console.log(element);

// }

// Maps

// Map is a object that holds the key value pairs and remeber the original insertion order of the keys
// No duplicate values in map

const map = new Map();

map.set("PK", "Pakistan"); // Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map.set("USA", "United States Of America");
map.set("AUS", "Australia");

// console.log(map.get('a')); // Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
// console.log(map.size); // return the number of elements in the Map.
// console.log(map.delete('c'));
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

const myobject = {
  userName: "Shahzaib",
  price: 999,
};

// for (const element of myobject) {
//     console.log(element); // through error object is not iterable
// }

