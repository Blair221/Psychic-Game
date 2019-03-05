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
var mealText = document.querySelector("#meal-text");
console.log(directionText.textContent);
var today = new Date();
var timeDay = today.getHours();
var welcome;
if (timeDay > 18) {
    welcome = "The computer didn't have dinner";
} else if (hourNow > 12) {
    welcome = "The computer lost his lunch";
} else if (hourNow > 0) {
    welcome = "The computer hasn't had breakfast";
} else {
    welcome = "Greetings!"
}
mealText.textContent = welcome;
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
