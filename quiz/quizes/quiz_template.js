var questions = [
	"Question One", 
	"Longer Question Two that will need to wrap around the div as to not flow off the end", 
	"Question Three"
];

var correct = [
	"yees", 
	"hello",
	"longlong long long long long long long long long "
] 

var dummy = [
	"gyyggi",
	"uubijui",
	"guiuhuh"
]

function results(points) {
	console.log(points);
}

//  CODE that wont need changing //
var x = document.getElementById("back");
x.href = "../quiz.html"

var points = "0";
var question_number_int = 1;
var correct_button = "0";

function init() {
	question_number.innerHTML = "Question " + question_number_int + "/" + questions.length;
	question.innerHTML = questions[0];
	if (Math.random() >= 0.5) {
		correct_button = "0";
		yes.innerHTML = correct[0];
		no.innerHTML = dummy[0];
	}
	else {
		correct_button = "1";
		yes.innerHTML = dummy[0];
		no.innerHTML = correct[0];
	}
}

function zero() {
	if (question_number_int < questions.length+1) {
		if (correct_button == "0") {
			points ++;
		}
		question_number_int ++;
		question_number.innerHTML = "Question " + question_number_int + "/" + questions.length;
		question.innerHTML = questions[question_number_int -1];
		if (Math.random() >= 0.5) {
			correct_button = "0";
			yes.innerHTML = correct[question_number_int -1];
			no.innerHTML = dummy[question_number_int -1];
		}
		else {
			correct_button = "1";
			yes.innerHTML = dummy[question_number_int -1];
			no.innerHTML = correct[question_number_int -1];
		}
		if (question_number_int == questions.length+1) {
			question_number.innerHTML = "Results!";
			results(points);
		}
	}
}

function one() {
	if (question_number_int < questions.length+1) {
		if (correct_button == "1") {
			points ++;
		}
		question_number_int ++;
		question_number.innerHTML = "Question " + question_number_int + "/" + questions.length;
		question.innerHTML = questions[question_number_int -1];
		if (Math.random() >= 0.5) {
			correct_button = "0";
			yes.innerHTML = correct[question_number_int -1];
			no.innerHTML = dummy[question_number_int -1];
		}
		else {
			correct_button = "1";
			yes.innerHTML = dummy[question_number_int -1];
			no.innerHTML = correct[question_number_int -1];
		}
		if (question_number_int == questions.length+1) {
			question_number.innerHTML = "Results!";
			results(points);
		}
	}
}
