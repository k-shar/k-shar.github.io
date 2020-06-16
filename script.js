function refreshPage(){
    window.location.reload();
} 

$(document).ready(function(){
	$("#hexagon").animate({marginTop: "5vh"}, 4000, 'swing');
});

var call_time = 0;

var startTime = new Date().getTime();

var node_one = document.getElementById("trap_l");
var node_two = document.getElementById("trap_r");
var node_three = document.getElementById("trap_bl");
var node_four = document.getElementById("trap_br");

var one_start = 15;
var two_start = -15;
var three_start = 25;
var four_start = -25;

var a = 1;
var b = -1;

var spin = function () {
	if (call_time === 0) {
		startTime = new Date().getTime();
		call_time = 1;
		if (Math.round(Math.random()) === 0 )
		{
			a = 1;
			b = -1;
		} else {
			a = -1;
			b = 1;
		}
	}
	
	var currTime = new Date().getTime();
	var seconds = (currTime - startTime)/ 1000;
	
	
	new_rotation_l = (one_start - seconds * a* 17 * Math.sqrt(seconds));
	new_rotation_r = (two_start - seconds * b* 17 * Math.sqrt(seconds));
	new_rotation_bl = (three_start - seconds * a* 16 * Math.sqrt(seconds));
	new_rotation_br = (four_start - seconds * b* 16 * Math.sqrt(seconds));
	
	node_one.style.transform = "skew("+new_rotation_l+"deg)";
	node_two.style.transform = "skew("+new_rotation_r+"deg)";
	node_three.style.transform = "skew("+new_rotation_bl+"deg)";
	node_four.style.transform = "skew("+new_rotation_br+"deg)";
	
	if (seconds < 4) {
		window.requestAnimationFrame(spin);
	} else {
		call_time = 0;
		one_start = new_rotation_l;
		two_start = new_rotation_r;
		three_start = new_rotation_bl;
		four_start = new_rotation_br;
	}	
}