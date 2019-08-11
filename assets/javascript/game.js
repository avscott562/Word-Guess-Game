
//establish variables

//computer word options
var words = ["fame", "i love lucy", "family matters", "martin", "the price is right", 
"sex and the city", "practical jokers", "jeopardy", "wheel of fortune", "the brady brunch", 
"good times", "queen sugar", "sopranos", "nypd blue", "everybody loves raymond", "mad men", 
"the partridge family", "a different world", "family feud", "name that tune", "all my children", 
"the tonight show", "the arsenio hall show", "the oprah winfrey show", "breaking bad", 
"friends", "the simpsons", "seinfeld", "the wire", "arrested development", "grownish", 
"saturday night live", "cheers", "curb your enthusiasm", "the west wing", "all in the family", 
"the jeffersons", "living single", "the twilight zone", "frasier", "the walking dead", 
"parks and recreation", "greenleaf", "married at first sight", "orange is the new black", 
"black mirror", "the real world", "south park", "law and order", "er", "star trek", 
"six feet under", "the bernie mac show", "scrubs", "the fresh prince of bel air", "lost", 
"roots", "the andy griffith show", "spongebob squarepants", "house hunters", "american idol", 
"the voice", "star search", "westworld", "sesame street", "shaka zulu", "the cosby show"];

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

//play again?
var play;

// start new game
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
                }
            }
        } else {
            //if letter not in puzzle, reduce remaining guess count by 1
            remaining--
            //display remaining guesses count on screen
            guesses.textContent = remaining;
        }
    }

    //check to see if game is completed
    gameOver();
};

//check if game is over
function gameOver() {
    //once word guessed
    if (!convertedWord.includes("_")) {
        //up wins count by 1
        winCount++;
        //display wins count on screen
        wins.textContent = winCount;
        //notfy player game over
        alert("You guessed it!  The answer is " + puzzle.toUpperCase() + ".  Great job!  Another Round?");
        //start new game
        resetGame();
    } else if (remaining === 0) {
        //once player has no remaining guesses, notify game over
        alert("Game Over!  The answer is " + puzzle.toUpperCase() + ".  Try Again?");
        //start new game
        resetGame()
    }
}

//reset game stats and start new game
function resetGame() {
    //reset all of the variables except wins
    alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    remaining = 12;
    guessedLetters = [];
    puzzle = "";
    convertedWord = [];

    //reset html fields
    currentWord.textContent = convertedWord;
    used.textContent = guessedLetters;
    guesses.textContent = remaining;

    //start new game
    newGame();
}
