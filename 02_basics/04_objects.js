// const tinderUser = new Object() // through singleton

const tinderUser = {};

tinderUser.id = "1234abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shahzaib",
      lastname: "Khan",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const object1 = {
  1: "A",
  2: "B",
};

const object2 = {
  3: "C",
  4: "D",
};

// const object3 = {object1,object2}
// const object3 = Object.assign(object1,object2)
const object3 = { ...object1, ...object2 };
// console.log(object3);

const users = [
  {
    id: 1,
    email: "shahzaib@gmail.com",
  },
  {
    id: 2,
    email: "shahzaib@yahoo.com",
  },
  {
    id: 3,
    email: "shahzaib@outlook.com",
  },
];

// console.log(users[0].id);
// console.log(users[0].email);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty("id"));

const cousrse = {
  coursename: "Javascript Mastery",
  price: 999,
  courseInstructor: 'Hitesh Choudhary'
};

const {coursename, courseInstructor, price} = cousrse

console.log(coursename)

