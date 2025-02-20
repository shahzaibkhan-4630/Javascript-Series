let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2025, 1, 21);
// let myCreatedDate = new Date(2025, 1, 21, 0, 23);
let myCreatedDate = new Date("02-21-2025");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long"
})
