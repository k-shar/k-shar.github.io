var questions = [
	"Do you like Animals?", 
	"Do you own any pets?",
	"Are you an animal?", 
	"Are you wearing cat ears?",
	"do you know what a furry is?",
	"If you had to choose what animal would you want to be?",
	"Have you ever had a dream about an animal?",
	"If you had the chance, Would you kill someone if you were told they were a furry, but there was no proof they were a furry?",
	"Would you rather use emojis or punctuation faces",
	"Have you ever worn a cholker 0.0?",
	"would you wear a fur suit for 20 mins if you got paid £1,000?",
	"READY FOR YOUR RESULT???"
];

var correct = [
	"Yess", 
	"YOU BET!",
	"yes o.o how did you know",
	"IM WEARING SOME RN",
	"...yes",
	"fox rawr xD",
	"yes i SUPPOSE...",
	"no uwu",
	"punctuation xD >.< uwu :3",
	"...maybe",
	"yessss pay pal me that breaddd UWU",
	"LETS GOOO"
] 

var dummy = [
	"Nope ew",
	"nope",
	"I have no soul",
	"no, not yet ;)",
	"no sniff",
	"nya nya kitten please uwu",
	"no ;-;",
	"yes im a bloodthirsty murderer fbi please arrest me",
	"Emojis all the way",
	"nooope",
	"no -.-",
	"BORN READY!"
]

function results(points) {

	document.getElementById('x').style.display = 'none';
	document.getElementById('y').style.display = 'none';
	question.innerHTML = "YOU ARE A CERTIFIED FURRY";
	z.innerHTML = "Without a DOUBT you secretly own a fur-suit or DESPERATLY want one, you embrace your fursona when nobodys looking, you wish furry tails where socialy acceptable and you secretly meow when drinking milk :3 dont be ashamed its natural uwu ONE OF US";
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
