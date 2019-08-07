//establish variables

//computer word options
var words = ["tester", "practice", "thinking", "lesson", "random", "xylophone", "dynamic", "wonderful", "enjoy", "amazed"];

//current word being solved
var puzzle = "";

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


//computer randomly select word
//display word with an underscore for each letter
//use onkeyup to get pressed letter from player
//verify pressed key is a letter and not a number or special character
//if pressed key is a letter, check to see if letter is in word
//if letter is in word, change underscore in word for each appearance of the letter to the letter
//if letter is not in word, lower remainaing guesses count by 1.
//add guessed letter to guessed letters field
//once word guessed, up wins count by 1
//if word not guessed before remaining guesses = 0, notify game over and reveal word.
