var num = 0;
var score =0;
var questions = [
["What does the word HTML stand for?", 
	"Hyper Text Markup Language",
	 "text language",
	  "markup language",
	  "none of them",
	   "A"],
["What does the word CSS stand for?",
	"desing language",
	"Cascading Style Sheet",
	"both of them",
	"none of them",
	"B"
],
["What is javascript?", 
	"scripting language",
	"programming language",
	"both of them",
	"none of them",
	"C"
],
["HTML stands of", 
	"HyperTextMarkupLanguage",
	 "text language",
	  "markup language",
	  "none of them",
	   "A"],
["CSS stands of",
	"desing language",
	"Cascading Style Sheet",
	"both of them",
	"none of them",
	"B"
]
];

function _(x) {
	return document.getElementById(x);
}
function renderQuestion() {
	if(num>=questions.length){
		
		_("buttons").innerHTML = "<h1 id='res'>You got: "+score+"</h1>";
	}
	_("question").innerHTML = questions[num][0];
	_("btn0").innerHTML = questions[num][1];
	_("btn1").innerHTML = questions[num][2];
	_("btn2").innerHTML = questions[num][3];
	_("btn3").innerHTML = questions[num][4];
	_("counter").innerHTML = num+1 + " of " + questions.length;
	

}

function checkAnswer(val) {
	if (val == questions[num][5]) {
		score += 2;
	}
	num++;
	renderQuestion();
}


window.addEventListener("load", renderQuestion);















