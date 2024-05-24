let random = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remaning = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let num = parseInt(userInput.value);
    console.log(num);
    validateGuess(num);
  });
}

const validateGuess = (guess) => {
  // validation that value is in between 0 to 100 or present
  if (isNaN(guess)) {
    alert("plz enter valid number");
  } else if (guess < 1 || guess > 100) {
    alert("plz enter valid number");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over Random number = ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  // random === value
  if (guess === random) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`number is too low`);
  } else if (guess > random) {
    displayMessage(`number is too high`);
  }
};

const displayGuess = (guess) => {
  // clean value , guess array update

  userInput.value ='';
  guessSlot.innerHTML += `${guess} `
  numGuess++
remaning.innerHTML = `${11-numGuess}`
};

const displayMessage = (message) => {
  // print message
  lowOrHi.innerHTML = `<h2>${message}</h2>`
};

const newGame = () => {
 let newGameButton=   document.querySelector('#newGame')
 newGameButton.addEventListener('click',(e)=>{
  random = parseInt(Math.random() * 100 + 1);
  prevGuess=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remaning.innerHTML = `${11-numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p);
  playGame=true;

 })
};

const endGame = () => {
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start new game</h2>';
    console.log(p)
    startOver.appendChild(p);
    playGame=false;
    newGame();
};
