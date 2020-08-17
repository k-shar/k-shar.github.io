var questions = [
	"Question One", 
	"Longer Question Two that will need to wrap around the div as to not flow off the end", 
	"Question Three"
];

var correct = [
	"correct", 
	"this one",
	"I NEED CLICKING"
] 

var dummy = [
	"WRONG",
	"nope",
	"pls no papi"
]

function results(points) {
	if (points < questions.length+1) {
		document.getElementById('x').style.display = 'none';
		document.getElementById('y').style.display = 'none';
		question.innerHTML = "FULL MARKS WELL DONEEE";
		z.innerHTML = "FULL MARKS WELL DONEEE";
	}
	if (points < questions.length) {
		question.innerHTML = "2 MARKS WELL DONEEE";
		z.innerHTML = "2 Mark Text here";
	}
	if (points < questions.length-1) {
		question.innerHTML = "1 mark jeez did u try to fail";
		z.innerHTML = "1 mark TEXT HERE";
	}
	if (points = 0) {
		question.innerHTML = "wht how why what?";
		z.innerHTML = "0 marks here";
	}
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
