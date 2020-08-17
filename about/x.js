var questions = [
	"sneaky sneak"
];

var correct = [
	"hush hush"
] 

var dummy = [
	"secret secret"
]

function results(points) {

	document.getElementById('x').style.display = 'none';
	document.getElementById('y').style.display = 'none';
	question.innerHTML = "YOU ARE CERTIFIED NOT A FURRY";
	z.innerHTML = "You would never DREAM of wearing animal ears of a fluffy tail, not a drop of fur flows through your blood, you would take a shotgun to a furry if you had the SLIGHTEST furry suspicion they had dabbled down the rabbit hole of furry cosplay. arm yourself soldier they surround us. STAY STRONG";
	u.style.flexDirection = "row";
	z.style.padding = "5vh";
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
