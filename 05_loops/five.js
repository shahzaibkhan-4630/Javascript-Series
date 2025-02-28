const coding = ["JS", "PYTHON", "JAVA", "RUBY"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {
//   // console.log(item);
// });

// function printItems(item) {
//   console.log(item);
// }

// coding.forEach(printItems);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "JS",
  },
  {
    languageName: "Python",
    languageFileName: "PY",
  },
  {
    languageName: "Ruby",
    languageFileName: "RB",
  },
];

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })

myCoding.forEach((item, index) => {
  if (index === 0) {
    console.log(item.languageFileName);
  }
});
