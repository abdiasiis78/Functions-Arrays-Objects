
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

let multiply = function(a, b) {
  return a * b;
}

console.log(multiply(4, 3)); 

/*


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
   1. Invoke the catYears function below and pass an age value to it
   2. Use the received value to calculate the age in cat years 
   (1 human year is equal to 7 cat years)
   3. Return the newly calculated age
*/

// Define a function to calculate the age in cat years
function catYears(age) {
  let catAge = age * 7;
  return catAge;
}

let myAge = catYears(25);

console.log("My age in cat years is " + myAge);





/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax


/*

------------
function myFunction() {
console.log("Function was invoked!");
};

myFunction();
----------------

let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

---------------

let add = function (param1, param2) {
  return param1 + param2;
};

add(1,2);

*/
let add = (para1, para2) => para1 * para2; console.log(add(2, 3));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: Rock, Paper, Scissors -
 Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a
   random number between 0 and 1)
HINT: While you can complete this with only conditionals based 
on strings, it may help to equate choice to a number when using 
Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules
   of the game described below - the strings returned need to match
    the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats 
  Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments 
  matters when it comes to parameters
*/

// Define a global variable to hold the computer's choice
var computerChoice;

// Generate a random number between 0 and 1
computerChoice = Math.random();

// Use the generated number to determine the computer's choice
if (computerChoice < 0.33) {
  computerChoice = "rock";
} else if (computerChoice < 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

//  function to play the game
function game(userChoice, computerChoice) {
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      return "it's a tie";
    } else if (computerChoice === "paper") {
      return "you lose!";
    } else {
      return "you win!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "you win!";
    } else if (computerChoice === "paper") {
      return "it's a tie";
    } else {
      return "you lose!";
    }
  } else {
    if (computerChoice === "rock") {
      return "you lose!";
    } else if (computerChoice === "paper") {
      return "you win!";
    } else {
      return "it's a tie";
    }
  }
}

// Play the game with the user's choice and the computer's choice
var result = game("rock", computerChoice);

console.log(result);





/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number
   received 
  2. At each invocation, it should RETURN this string (note: the tests
     are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda,
       take one down pass it around {number left over} bottles of soda 
       on the wall"
*/
// function to sing the annoying song
function annoyingSong(num) {
  for (var i = num; i > 0; i--) {
    console.log(i + " bottles of soda on the wall, " + i
     + " bottles of soda, take one down pass it around " + (i - 1) + " bottles of soda on the wall");
  }
}

console.log(annoyingSong(99)); 

