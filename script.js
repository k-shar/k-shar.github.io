var hexagon = document.getElementById("hexagon");

var startTime = new Date().getTime();
var move_hex = function() {
	var currTime = new Date().getTime();
	var x = currTime-startTime
	var newHeight = (100 + (-1.5* Math.sqrt(x)))
	hexagon.style.marginTop = newHeight + "vh";
	
	if (newHeight > 12) {
		window.requestAnimationFrame(move_hex);
	}
}

move_hex();