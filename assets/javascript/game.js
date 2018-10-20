//Grab DOM Elements
var currentWord = document.getElementById("current-word");
var guesses = document.getElementById("guesses");
var lettersGuessed = document.getElementById("letters-guessed");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");


//Global Variables
var wordBank = ["lcd soundsystem", "the strokes", "yeah yeah yeahs", "tv on the radio", "the national", "interpol", "vampire weekend",];
var wins = 0;
var losses = 0;
var pickedWord = "";
var guessesRemaining = 10;
var gameRunning = false;
var pickedWordPlaceholder = [];
var guessedLetters = [];
var incorrectLetters = [];


function newGame() {
    gameRunning = true;
    guessesRemaining = 10;
    guessedLetters = [];
    pickedWordPlaceholder: [];
    incorrectLetters = [];
    
    //pick a word
    pickedWord = wordBank[Math.floor(Math.random)() * wordBank.length]
}


//Letter Guess Function
function letterGuess() {

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

//New Game Event Listner


//onkeyup for letter guesses

//Placeholder Creation
for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
        pickedWordPlaceholder.push(" ");
    } else {
        pickedWordPlaceholder.push("_");
    }
}