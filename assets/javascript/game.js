
//establish variables

//computer word options
var words = ["zoo", "my", "tester", "my first game", "tree", "why do you ask", "practice", "we", "is", "thinking", "lesson", "random", "xylophone", "dynamic", "wonderful", "enjoy", "amazed", "test this word"];

//current word being solved
var puzzle;

var convertedWord = [];

//grab current word id
var currentWord = document.getElementById("currentWord");

//array of guessed letters
var guessedLetters = [];

//grab guessed letters id
var used = document.getElementById("used");

//need variable to capture key press

//number of remaining guesses
var remaining = 12;

//grab guesses id
var guesses = document.getElementById("guess");

//number of wins
var winCount = 0;

//grab win id
var wins = document.getElementById("win");

//game play

var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var start = 0;

// start game
function newGame() {

        //computer randomly selects word
        var computerGuess = words[Math.floor(Math.random() * words.length)];

        puzzle = computerGuess;
    
        //convert word to underscore
        for (i=0; i<computerGuess.length; i++) {
            puzzle = computerGuess;
            if (computerGuess[i] === " ") {
                convertedWord.push('\xa0');
                console.log(convertedWord);
            } else {
                convertedWord.push("_");
            }
            console.log(puzzle);
        }
        currentWord.textContent = convertedWord.join(" ");
    
        console.log(computerGuess + " " + computerGuess.length);

}

newGame();

// user guess

// function guessEval() {

// }

document.onkeyup = function(event) {

    //capture letter pressed by player
    var userGuess = event.key;

    //checking if key pressed is listed in available letters
    var letter = alpha.indexOf(userGuess.toUpperCase());

    //if in available letters array,
    if (letter !== -1) {

        //add to guessed letters array
        guessedLetters.push(userGuess.toUpperCase());

        //display in guessed letters on screen
        used.textContent = guessedLetters.join(" ");

        //remove from available letter list
        alpha.splice(letter, 1);

        // puzzle = "delete";

        // //just for testing
        // currentWord.textContent = "_ _ _ _ _ _"

        // var wordLetter = puzzle.toUpperCase().indexOf(userGuess.toUpperCase());

        // console.log(wordLetter);

        //use replace() to find letter and replace _ with actual letter
        
        // if (wordLetter === -1) {
        //     remaining--;
        // } else {
        //     console.log(wordLetter);
        // }
    }
};




//if pressed key is a letter, check to see if letter is in word
//if letter is in word, change underscore in word for each appearance of the letter to the letter
//if letter is not in word, lower remainaing guesses count by 1.
//once word guessed, up wins count by 1
//if word not guessed before remaining guesses = 0, notify game over and reveal word.
