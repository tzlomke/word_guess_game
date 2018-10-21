//Grab DOM Elements
var currentWord = document.getElementById("current-word");
var guesses = document.getElementById("guesses");
var lettersGuessed = document.getElementById("letters-guessed");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");


//Global Variables
var wordBank = ["lcd soundsystem", "the strokes", "yeah yeah yeahs", "tv on the radio", "the national", "interpol", "vampire weekend", ];
var wins = 0;
var losses = 0;
var pickedWord = "";
var guessesRemaining = 10;
var gameRunning = false;
var pickedWordPlaceholder = [];
var previouslyGuessed = [];
var incorrectLetters = [];




//New Game Function
function newGame() {
    gameRunning = true;
    guessesRemaining = 10;
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


//Guess Function
function choice(letter) {
    if (gameRunning === true && previouslyGuessed.indexOf(letter) === -1) {
        previouslyGuessed.push(letter);
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === letter) {
                pickedWordPlaceholder[i] = pickedWord[i];
            }
        }
        currentWord.textContent = pickedWordPlaceholder.join(" ")
    } else if (gameRunning === true) {
        alert("You've already used this letter.")
    }
}



//Incorrect Checker
function incorrectGuessCheck() {

}

//Loss Checker
function lossChecker() {

}

//Win Checker
function winChecker() {

}

//Start Game
document.onkeypress = function () {
    if (gameRunning === false) {
        newGame();
    }
}

//onkeyup for letter guesses
document.onkeyup = function(event) {
    choice(event.key);
}

