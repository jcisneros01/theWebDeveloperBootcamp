var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modebuttons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares() {
	// Set up color grid
	for (var i = 0; i < squares.length; i++) {
		
		// Add event listener
		squares[i].addEventListener("click", function() {
			// grab color of picked square
			var clickedColor = this.style.backgroundColor;
			// compare to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background=  "#232323";
				messageDisplay.textContent = "Try Again";
			}
		}); 

	}
}

function setupModeButtons() {
	for (var i = 0; i < modebuttons.length; i++) {
			modebuttons[i].addEventListener("click", function() {
				modebuttons[0].classList.remove("selected");
				modebuttons[1].classList.remove("selected");
				this.classList.add("selected");
				if (this.textContent == "Easy") {
					numSquares = 3;
				} else {
					numSquares = 6;
				}
				reset();
		});
	}
}

function reset() {
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		for (var i = 0; i < squares.length; i++) {
			if (colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.background = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
		h1.style.background = "steelblue";

}
	
resetButton.addEventListener("click", function() {
	reset();
});


function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// get random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from - to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +  ", " + b + ")";
}
