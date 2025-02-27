// Immediately Invoked Function Expression (IIFE)
// to remove the pollution of global scope we use IIFE
(function One() {
    // named iife
  console.log(`DB Connected`);
})();

(() => {
    // unnamed iife
  console.log("DB CONNECTED TWO");
})();
