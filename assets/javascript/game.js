//Grab DOM Elements
var currentWord = document.getElementById("current-word");
var guesses = document.getElementById("guesses");
var lettersGuessed = document.getElementById("letters-guessed");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");


//Global Variables
var wordBank = ["Pam", "Jim", "Michael", "Dwight", "Angela", "Kevin", "Oscar", "Kelly", "Ryan", "Darryl", "Stanley", "Toby", "Meredith", "Creed", "Phyllis"];
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
        alert("You've already used this letter.");
    }
    
    // Incorrect Guess Checker
    if (pickedWordPlaceholder.indexOf(letter) === -1) {
        if (incorrectLetters.indexOf(letter) === -1) {
            incorrectLetters.push(letter);
            guessesRemaining --;
        }   
        lettersGuessed.textContent = incorrectLetters.join(" ");
        guesses.textContent = guessesRemaining;
    }
    
    //Loss Checker
    if (guessesRemaining === 0) {
        if (confirm("You lost! Want to try again?")) {
            newGame();
            losses ++;
            lossCount.textContent = losses;
            lettersGuessed.textContent = "";
        }   
    }
    
    //Win Checker
    if (pickedWordPlaceholder.join("") === pickedWord) {
        if (confirm("You won! Want to go again?")) {
            newGame();
            wins ++;
            winCount.textContent = wins;
            lettersGuessed.textContent = "";
        }
    }
}

//Start Game
document.onkeypress = function () {
    if (gameRunning === false) {
        newGame();
    }
}

//onkeyup for letter guesses
document.onkeydown = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 && gameRunning === true) {
        choice(event.key);
    }
}

