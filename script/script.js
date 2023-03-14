// Event Listeners
document.querySelector("button[name='topBtn']").addEventListener("click", (scrollUp));
document.querySelector("button[name='botBtn']").addEventListener("click", (scrollDown));

// Given images array
let images = ['01', '02', '03', '04', '05'];

// Support and utilities
let focusImage = {
	carousel: document.getElementById("carousel"),
	rCarousel: document.getElementById("carousel-rigth"),
	currentPosition: 0,
	lastPosition: 0
};

let directions = {
	up: 0,
	down: 1
};

// Function linked to the buttons
function scrollUp() { carousel(directions.up); }
function scrollDown() { carousel(directions.down); }

function carousel(direction){
	// Input check
	if(direction == directions.up || direction == directions.down){
		focusImage.lastPosition = focusImage.currentPosition;

		// Out of bounds check and fix to take the loop
		if(direction == directions.up)
			focusImage.currentPosition = (focusImage.currentPosition == 0) ? images.length-1 : focusImage.currentPosition-1;
		else if (direction == directions.down)
			focusImage.currentPosition = (focusImage.currentPosition == images.length-1) ? 0 : focusImage.currentPosition+1;

		// Update view
		focusImage.carousel.getElementsByTagName("img")[focusImage.lastPosition].setAttribute("class", "my-none");
		focusImage.carousel.getElementsByTagName("img")[focusImage.currentPosition].setAttribute("class", "my-active");

		focusImage.rCarousel.getElementsByTagName("div")[focusImage.lastPosition].setAttribute("class", "op");
		focusImage.rCarousel.getElementsByTagName("div")[focusImage.currentPosition].setAttribute("class", "r-active");
	}
	else
		console.log("Argomento incorrect");
}


