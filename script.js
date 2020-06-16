function refreshPage(){
    window.location.reload();
} 

$(document).ready(function(){
	$("#hexagon").animate({marginTop: "5vh"}, 4000, 'swing');
});

var in_or_out = -1;
var call_time = -1;

var startTime = new Date().getTime();
var node_one = document.getElementById("trap_l");
var node_two = document.getElementById("trap_r");

var node_three = document.getElementById("trap_bl");
var node_four = document.getElementById("trap_br");

var spin = function () {
	if (call_time < 0) {
		startTime = new Date().getTime();
		call_time = 1;
	}
	if (in_or_out < 0) {
		var currTime = new Date().getTime();
		var seconds = (currTime - startTime)/ 1000;
		
		new_rotation_l = (15 - seconds * 3 * Math.sqrt(seconds));
		new_rotation_r = (-15 - seconds * -3 * Math.sqrt(seconds));
		new_rotation_bl = (25 - seconds * 3 * Math.sqrt(seconds));
		new_rotation_br = (-25 - seconds * -3 * Math.sqrt(seconds));
		
		node_one.style.transform = "skew("+new_rotation_l+"deg)";
		node_two.style.transform = "skew("+new_rotation_r+"deg)";
		node_three.style.transform = "skew("+new_rotation_bl+"deg)";
		node_four.style.transform = "skew("+new_rotation_br+"deg)";
		
		if (new_rotation_l > -15) {
			window.requestAnimationFrame(spin);
		} else {
			in_or_out = 1;
			call_time = 0;
		}

	}
}