const name = "Shahzaib ";
const repoCount = 10;

// console.log(name +  repoCount)

// The above is the old way to concatinate the strings not recommended

// console.log(`The Username is ${name}and repocount is ${repoCount}`);
// Modern way of syntax called string Interpolation

// Another way of declaring the string

let gameName = new String("Counter-Strike-Go");

// console.log(gameName[0])
// console.log(gameName.__proto__)

// STRINGS METHODS

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // don't change original string
// console.log(gameName.toLowerCase()); // don't change original string
// console.log(gameName.charAt(0)) // returns the character at the specified index
// console.log(gameName.indexOf('e')) // returns the position of the first occurence of the substring
// console.log(gameName.lastIndexOf('e')) // returns the last occurence of the substring
// console.log(gameName.replace()); // Replaces text in a string, using a regular expression or search string.
// console.log(gameName.replaceAll()) // Replace all instances of a substring in a string, using a regular expression or search string.
// console.log(gameName.startsWith())
// console.log(gameName.endsWith())
// console.log(gameName.includes())

// const newString = gameName.substring(0, 4); // Returns the substring at the specified location within a String object.
// console.log(newString);

// const anotherString = gameName.slice(0,4) // Returns a section of a string negative value also allowed
// console.log(anotherString);

console.log(gameName.split('-'))
