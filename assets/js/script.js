var myQuestions = [
    {
        question: '#1 How much percentage of the human body is constituted by water?',
        answers: {
            A: '35%',
            B: '45%',
            C: '60%',
            D: '90%'
        },
        correctAnswer: '60%'
    },

    {
        question: '#2 Is the nose of an average human being as long as the length of their thumb?',
        answer: {
            A: 'Yes',
            B: 'No',
            C: 'Half the thumb',
            D: 'A thumb and a half'
        },
        correctAnswer: 'Yes'
    }
];


     
var questionBox = document.getElementById("question");
var scoreArea = document.getElementById("scores");
var answerBox = document.getElementByClass("answer-button");
var quizNavigation = document.getElementById("btn-start");
var quizNavigation = document.getElementById("btn-restart");
var quizNavigation= document.getElementById("btn-next");
var totalScore = document.getElementById("total-score");
var scores = document.getElementByClass("correct, incorrect");
var q = 0;
var a = 0;
var correct = 0;
var totalQuestions = 30;
var currentQuestion = 0;

totalScore.innerHTML = 'Score:' + correct + '/' + totalQuestions;


//eventlistners for buttons
restart.addEventListener("click", restart);
start.addEventListener("click", startGame);
next.addEventListener("click", next);
answerButton.addEventListener("click", submit);

function generateQuiz(questionBox, answerBox, quizNavigation, scoreArea) {

}

    function showQuestions(startGame, question, answerButton){
        
    }
        var output = [];
        var answers;
     
    // for each question...
    for (var i = 0; i < question.length; i++) {
    }

        // first reset the list of answers
        answers = [];

        // for each available answer to this question...
        for (letter in question[i].answers) {

        
    

    // finally combine our output list into one string of html and put it on the page
    startGame.innerHTML = output.join('');

    
function showQuestions (question, gameArea, scoreArea, answerButton){

}
    // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	scores.innerHTML = numCorrect + ' out of ' + questions.length;
}


// show the questions
showQuestions(startGame, question, questionBox);

// when user clicks submit, show results
answerButton.onclick = function () {
    showResults(question, gameArea, scoreArea);
}

// finally combine our output list into one string of html and put it on the page
gameArea.innerHTML = output.join('btn--yellow');

function showResults(answerButton, scoreArea) {

    // gather answer containers from our quiz
    var answerContainers = answerButton.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        // if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            gameArea[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            gameArea[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    score.innerHTML = numCorrect + ' out of ' + questions.length;
}
// on submit, show results
submitButton.onclick = function () {
    showResults(answerButton, questionBox, scoreArea);
}

restartQuiz.addEventListener('click', restartQuiz);
function restartQuiz(){
    location.reload();
}