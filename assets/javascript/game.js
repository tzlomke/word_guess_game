//Grab DOM Elements
var currentWord = document.getElementById("current-word");
var guesses = document.getElementById("guesses");
var lettersGuessed = document.getElementById("letters-guessed");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");

//Global Variables
var wordBank = ["Pam", "Jim", "Michael", "Dwight", "Angela", "Kevin", "Oscar", "Kelly", "Ryan", "Darryl", "Stanley", "Toby", "Meredith", "Creed", "Phyllis", "Andy", "Erin", "Gabe", "Holly"];
var wins = 0;
var losses = 0;
var pickedWord = "";
var guessesRemaining = 9;
var gameRunning = false;
var pickedWordPlaceholder = [];
var previouslyGuessed = [];
var incorrectLetters = [];

//New Game Function
function newGame() {
    gameRunning = true;
    guessesRemaining = 9;
    previouslyGuessed = [];
    pickedWordPlaceholder = [];
    incorrectLetters = [];

    //Pick a word from array
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    //Placeholder creation
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholder.push(" ");
        } else {
            pickedWordPlaceholder.push("_");
        }
    }
    console.log(pickedWord)

    //Write to DOM
    currentWord.textContent = pickedWordPlaceholder.join(" ");
    guesses.textContent = guessesRemaining;
    winCount.textContent = wins;
    lossCount.textContent = losses;
}

//Game Logic
function choice(letter) {

    //Correct Guess Checker
    if (gameRunning === true && previouslyGuessed.indexOf(letter) === -1) {
        previouslyGuessed.push(letter);
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholder[i] = pickedWord[i];
            }
        }
        currentWord.textContent = pickedWordPlaceholder.join(" ");
    } else if (gameRunning === true) {
        alert("You've already used this letter, you ignorant slut.");
    }

    // Incorrect Guess Checker
    if (pickedWordPlaceholder.indexOf(letter.toLowerCase()) === -1 && pickedWordPlaceholder.indexOf(letter.toUpperCase())) {
        if (incorrectLetters.indexOf(letter) === -1) {
            incorrectLetters.push(letter);
            guessesRemaining--;
        }
        lettersGuessed.textContent = incorrectLetters.join(" ");
        guesses.textContent = guessesRemaining;
    }

    //Loss Checker
    if (guessesRemaining === 0) {
        setTimeout (function () {
            if (confirm("Wrong! Here...have the Extreme Repulsiveness Award. Would you like to try again?")) {
                newGame();
                losses++;
                lossCount.textContent = losses;
                lettersGuessed.textContent = "";
            }
        }, 10);
    }

    //Win Checker
    if (pickedWordPlaceholder.join("") === pickedWord) {
        setTimeout(function () {
            if (confirm("You've won the Grace Under Fire Award! Want to go again?")) {
                newGame();
                wins++;
                winCount.textContent = wins;
                lettersGuessed.textContent = "";
            }
        }, 10);
    }
}

//Start Game
document.onkeypress = function () {
    if (gameRunning === false) {
        alert("It's time for the Dundie Awards. For an event of this magnitude, name tags are imperative.")
        newGame();
    }
}

//onkeyup for letter guesses
document.onkeydown = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 && gameRunning === true) {
        choice(event.key);
    }
}