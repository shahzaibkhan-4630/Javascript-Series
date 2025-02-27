var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Shahzaib";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one()

if (true) {
  const username = "Shahzaib";
  if (username === "Shahzaib") {
    const website = " Youtube";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username)

// ++++++++++++++++++++++++++++++++++++++++++

function addOne(value) {
  return value + 1;
}

addOne(5);

const addTwo = function (value) {
  return value + 1;
};

addTwo(5)
