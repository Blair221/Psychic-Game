var test = "hello za warudo"
console.log(test);
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 7;
var playerGuesses = [];
console.log(wins, losses, guesses);
var directionText = document.getElementById("direction-text");
var userChoiceText = document.getElementById("userchoice-text");
var compChoiceText = document.getElementById("compchoice-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
console.log(directionText.textContent);

document.onkeyup = function (event) {
    var userGuess = event.key;
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    alert("you pressed " + userGuess);
    alert("the computer chose " + compGuess);
    if (userGuess !== compGuess) {
        guesses--;
        playerGuesses = playerGuesses + userGuess + ",";
    }
    if (userGuess === compGuess) {
        wins++;
        playerGuesses = [];
    }
    if (guesses === 0) {
        losses++;
        guesses = 7;
        playerGuesses = [];
    }
    userGuessText.textContent = "Letters Guessed: " + playerGuesses;
    winsText.textContent = "Wins: " + wins;
    guessesText.textContent = "Guesses Remaining: " + guesses;
    lossesText.textContent = "Losses: " + losses;


};
