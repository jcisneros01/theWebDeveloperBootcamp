var answer = prompt("Are we there yet?");


while (answer.indexOf("Yes") == -1) {
	answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");