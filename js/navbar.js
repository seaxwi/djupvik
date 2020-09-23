// Execute on scroll
window.onscroll = function() {update()};

// Get navbar
var navbar = document.getElementById("nav");

// Get vertical distance to navbar
var dist = navbar.offsetTop;

// Move navbar if outside screen
function update() {
	if (window.pageYOffset >= dist) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

/* Fråga: Anser du din lösning vara produktionsredo, om inte, vad
   skulle behöva förbättras (tekniskt eller användarperspektiv)?
   
   Svar: Jag har testat lösningen på alla sidor i projektet och anser
   att det fungerar bra med avseende på användbarhet och prestanda.
   Det enda problemet jag ser är att övrigt innehåll flyttas efter
   något när navbaren infogas första gången genom att kompensera för
   med lämplig CSS.
   
*/
