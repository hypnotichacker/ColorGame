
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

resetButton.addEventListener("click", function(){
    //generate all new colors
    alert("hello");
   colors = generateRandomColors(numSquares);
    //pick a new random color from array
   pickedColor = colors[Math.floor(Math.random()*colors.length)];
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        //add colors to squares
	squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    
    //Make Correct/Incorrect display empty after reset button (play again) clicked
    messageDisplay.textContent="";
});


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add colors to squares
	squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].style.background=colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
     var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
    alert("Correct!");
    messageDisplay.textContent ="Correct!"
    resetButton.textContent = "Play Again?";
    changeColors(clickedColor);
    h1.style.background = clickedColor;
    } else {
        alert("Wrong!")
        this.style.background = "#939393";
        messageDisplay.textContent ="Try Again"
    }
    });
}

easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares=3;
colors = generateRandomColors(numSquares);
pickedColor = colors[Math.floor(Math.random()*colors.length)];
colorDisplay.textContent = pickedColor;
for(var i=0; i < squares.length; i++) {
 if(colors[i]) {
     squares[i].style.background=colors[i];
 } else {
     squares[i].style.display="none";
 }
    
}

});

hardBtn.addEventListener("click", function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = colors[Math.floor(Math.random()*colors.length)];
colorDisplay.textContent = pickedColor;
for(var i=0; i < squares.length; i++) {
squares[i].style.background=colors[i];
squares[i].style.display="block";
}
});



function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
        squares[i].style.background=color;
    }
}

function generateRandomColors(num){
//make an array
 var arr=[]
//add num random colors to arr
 for(var i = 0; i < num; i++) {
  //get random color and push into arr
    arr.push(randomColor()); 
     
 }
//return that array
    return arr
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

