// Guessing Word Game
// Call variables to link the classes and ID
var blankWords = document.querySelector('.word-blanks');
var wins = document.querySelector('.win');
var losses = document.querySelector('.losses');
var timeEl = document.querySelector('.seconds-remaining');
var start = document.querySelector('#Start');
var reset = document.querySelector('.reset-btn');


//More variabkes for actual details of the game
var userWord = '';
var blanksInWord = 0;
var winCounter = 0;
var loseCounter = 0;
isWin = false;

//Make an array to create blanks and letters on screen
var lettersInWords = [];
var blanks = [];

//Array of words
var arrayOfWords = ['javascript', 'array', 'object', 'function', 'string', 'boolean', 'Modulas'];
var mathArray = Math.floor(Math.random () * arrayOfWords.length);
var selectArrayChoices = arrayOfWords[mathArray];
console.log(selectArrayChoices);

//Create a start game function when the button is clicked
function startGame(){
    isWin = false;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()


// Create blanks on screen with a function, use math

//Create event Listener for start button


