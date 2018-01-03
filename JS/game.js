// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt("Guess a number")); 

// Check guess
if (guess === secretNumber) {
	alert("You got it right!")
} 
// check if higher
else if (guess > secretNumber) {
	alert("Too high. Guess again!")
} else {
	alert("Too Low. Guess again!")
}