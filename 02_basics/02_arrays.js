const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros);

// const allNewHeros = [...marvel_heros, ...dc_heros];
// console.log(allNewHeros);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const realAnotherArray = anotherArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(realAnotherArray);

// console.log(Array.isArray("Shahzaib"));
// console.log(Array.from("Shahzaib")); // Creates an array from an iterable object
// console.log(Array.from({name:"Shahzaib"})) // return blank object if unable to create array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.

