
//establish variables

//computer word options
var words = ["zoo", "my", "tester", "my first game", "tree", "why do you ask", "practice", "we", "is", "thinking", "lesson", "random", "xylophone", "dynamic", "wonderful", "enjoy", "amazed", "test this word"];

//current word being solved
var puzzle = "";

//array for puzzle to display as underscore
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

//valid letters
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// start game
function newGame() {

        //computer randomly selects word
        var computerGuess = words[Math.floor(Math.random() * words.length)];

        //set puzzle to computers chosen word
        puzzle = computerGuess;
    
        //convert word to underscore
        for (i=0; i<computerGuess.length; i++) {
            //check if there is a space in the computer word
            if (computerGuess[i] === " ") {
                //display space in html
                convertedWord.push('\xa0');
            } else {
                //if not a space, display letter as underscore
                convertedWord.push("_");
            }
        }

        //display convertedWord on html
        currentWord.textContent = convertedWord.join(" ");
        console.log("new game " + puzzle);
}

//initiate game
newGame();

//track players keystrokes
document.onkeyup = function(event) {

    //capture letter pressed by player
    var userGuess = event.key;

    //checking if key pressed is a letter and is available
    var letter = alpha.indexOf(userGuess.toUpperCase());

    //if letter available...
    if (letter !== -1) {

        //add to guessed letters array
        guessedLetters.push(userGuess.toUpperCase());

        //display in guessed letters on screen
        used.textContent = guessedLetters.join(" ");

        //remove from available letter list
        alpha.splice(letter, 1);

        //check if letter is in puzzle
        if (puzzle.includes(userGuess.toLowerCase())) {
            //if in puzzle, loop through puzzle to find where
            for (p=0; p<puzzle.length; p++) {
                if (puzzle.charAt(p) == userGuess.toLowerCase()) {
                    //change convertedWord to display letter in all positions
                    convertedWord[p] = userGuess.toUpperCase();
                    //display new convertedWord on screen
                    currentWord.textContent = convertedWord.join(" ");
                    //once word guessed, up wins count by 1
                    if (!convertedWord.includes("_")) {
                        winCount++;
                        wins.textContent = winCount;
                        alert("You did it! Another round?");
                    }
                } 
            }
        } else {
            remaining--
            guesses.textContent = remaining;
            if (remaining === 0) {
                alert("Game Over!  Try Again?")
                newGame();
            }
        }
    }
};
