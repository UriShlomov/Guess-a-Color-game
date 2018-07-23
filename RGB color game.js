// ;
// alert("yes!") - to check for conection;

	// var colors = ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"]
var numSquares = 6;
	//old:
	//var colors = generateRandomColors(numSquares);
	//new:
	var colors = [];
	// must get the random color for example for 4-th square(Cyan), (the Goal one we must to guess)
	//old:
	//var pickedColor = pickColor();
	//new:
	var pickedColor;
var squares = document.querySelectorAll(".square");	
	// now need to update the 'RGB(0,0,0)' text area by the choosen random color:
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



// BUTTONS:
//--old version--

//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");

//easyBtn.addEventListener("click", function(){
//	hardBtn.classList.remove("selected");
//	easyBtn.classList.add("selected");
//	numSquares = 3;
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for(var i=0; i < squares.length; i++){
//		if(colors[i]){
//			squares[i].style.background = colors[i];
//		} else {
//			squares[i].style.display = "none";
//		}
//	}
//});
//
//hardBtn.addEventListener("click", function(){
//	hardBtn.classList.add("selected");
//	easyBtn.classList.remove("selected");
//	numSquares = 6;
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for(var i=0; i < squares.length; i++){
//			squares[i].style.background = colors[i];
//			squares[i].style.display = "block";
//	}
//});

//--optimizated version--
init()

function init(){
	for(var i=0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

	 // <      if it    -    yes ?>|< so, like this >|< else, like this >
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// if(this.textContent === "Easy"){
		// 	 numSquares = 3;
		// } else {
		// 	 numSquares = 6;
		// }
		reset();
		});
	}

	for(var i=0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			// 'this'=squares[i]
			var clickedColor = this.style.background;
				// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				// 'changeColors' - function is listed below
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
		// pick a new random color from array
	pickedColor = pickColor();
		// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "new colors"

	messageDisplay.textContent = ""; //reset of 'correct!' writing out of the screen
		// change colors of squares
	for(var i=0; i < squares.length; i++){
		// for disapearing of 3 squares in 'easy':
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
		// back the h1 background-color to default after winning
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
//--old version--
		// generate all new colors
	//colors = generateRandomColors(numSquares);
		// pick a new random color from array
	//pickedColor = pickColor();
		// change colorDisplay to match picked Color
	//colorDisplay.textContent = pickedColor;
	//this.textContent = "new colors"

	//messageDisplay.textContent = ""; //reset of 'correct!' writing out of the screen
		// change colors of squares
	//for(var i=0; i < squares.length; i++){
	//	squares[i].style.background = colors[i];
	//}
		// back the h1 background-color to default after winning
	//h1.style.background = "steelblue";

//--optimized version--
	reset();
});



// COLORS:
function changeColors(color) {
		// loop for all squares
	for (var i=0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
		// make an array
	var arr = [];
		// repeat 'num' times
	for (var i=0; i < num; i++){
		arr.push(randomColor());
		// get random color and push it into array
	}
		// return that array
	return arr;
}

function randomColor () {
		// pick a 'red' color from rgb(0-255)
	var r = Math.floor(Math.random() * 256);
		// pick a 'green' color from rgb(0-255)
	var g = Math.floor(Math.random() * 256);
		// pick a 'blue' color from rgb(0-255)
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}