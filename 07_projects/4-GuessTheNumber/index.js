let randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const GuessesSlot = document.querySelector(".guesses");
const remaningGuesses = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let userPreviousGuesses = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter A Valid Number");
  } else if (guess < 1) {
    alert("Enter Number Greater Than 1");
  } else if (guess > 100) {
    alert("Enter Number Less Than 100");
  } else {
    userPreviousGuesses.push(guess);
    if (numberOfGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed It Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number Is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number Is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  GuessesSlot.innerHTML += `${guess},`;
  numberOfGuesses++;
  remaningGuesses.innerHTML = `${11 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userPreviousGuesses = [];
    numberOfGuesses = 1;
    GuessesSlot.innerHTML = "";
    remaningGuesses.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  });
}
