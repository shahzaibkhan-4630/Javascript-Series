// Reduce

const myNumbers = [1, 2, 3];

// const initialValue = 0;

// const myTotal = myNumbers.reduce((accu, currval) => {
//     console.log(`Accumlator Value: ${accu} and CurrentValue Is: ${currval}`);

//   return accu + currval;
// }, 0);

// console.log(`Total Sum Is: ${myTotal}`);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 2999,
  },
  {
    itemName: "Java Course",
    price: 3999,
  },
  {
    itemName: "Python Course",
    price: 4999,
  },
];

const priceToPay = shoppingCart.reduce((accu, item) => {
  return accu + item.price;
}, 0);

console.log(`The Price To Pay Is: ${priceToPay}`);
