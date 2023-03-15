Consegna:
/*Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/


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


 