window.onload = bindEventHandlers;

var globalColor = "white";

function bindEventHandlers () {
	var colorControl = document.getElementsByClassName('colorPicker');
	for ( var i = 0; i < colorControl.length; i++) {
		colorControl[i].addEventListener ("click", pickUp, false);
	}
	var colorPlacement = document.getElementsByClassName('myDiv');
		for ( var i = 0; i < colorPlacement.length; i++) {
		colorPlacement[i].addEventListener ("click", place, false);
	}
}
	
function pickUp (event) {
	var color1 = event.currentTarget.attributes[1].nodeValue;
	globalColor = color1;
}

function place (event) {
	var color2 = event.currentTarget;
	color2.style.backgroundColor = globalColor;
}





