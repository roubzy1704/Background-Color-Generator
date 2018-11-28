var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");
var instruction = document.querySelector(".instruction");


//event listener for input tage
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);


//function to change background
function changeBackground() {
	 body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";
}


//sets the color to the intial chosen colors in the input tag within h5
color1.addEventListener("input", changeBackground());


//change color when button is pressed using randomcolor functionn
button.addEventListener("click", function(){

	//assign chosen random colors to left and right color selector
	color1.value = hexRandomColor();
	color2.value = hexRandomColor();
	//call change background
	changeBackground();
});


//function to change button color
button.addEventListener("mouseover", function(){
	// call random color function and assign it to button background
	var color = rgbRandomColor();
	button.style.background = color;
	instruction.style.color = color;
});


//create rgb random color and return it
function rgbRandomColor(){
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) 
	+ ',' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';

	return hue;
}	


//create hex random color and return it
function hexRandomColor(){
	var hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	return hex;
}