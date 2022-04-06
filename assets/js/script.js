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




     //eventlistners for buttons
var questionBox = document.getElementById("question");
var resultsContainer = document.getElementById("scores");
var submitButton = document.getElementById("answer-button");
var startGame = document.getElementById("btn--yellow");
var restartQuiz = document.getElementById("btn--green");
var nextQuestion = document.getElementById("btn--orange");
var score = document.getElementByClass("score");
var scores = document.getElementByClass("correct, incorrect");
var q = 0;
var a = 0;
var correct = 0;
var totalQuestions = 30;
var currentQuestion = 0;

score.innerHTML = "Score:" + correct + "/" + totalQuestions;

function generateQuiz(startGame, questionBox, question, answerButton, score) {

    function showQuestions(startGame, question, questionBox) {
        var output = [];
        var answers;
    }
    // for each question...
    for (var i = 0; i < questions.length; i++) {

        // first reset the list of answers
        answers = [];

        // for each available answer to this question...
        for (letter in questions[i].answers) {

            // ...add an html radio button
            answers.push(
                <button class="answer-button"></button>);
        };'<label>'
        + '<input type="button" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].answers[letter]
      + '</label>'
    );
  }

        // add this question and its answers to the output
        output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answer-button">' + answers.join('') + '</div>'
		);
	}

        let i;
for (i = 0; i < answerButton.length; i++){
    answerButton[i].addEventListener("click", revealAnswer);
}
        // Displays all questions/alternatives:
        question.innerHTML = questions[q].question;
        answerButton[0].innerHTML = questions[a].answers.A;
        answerButton[1].innerHTML = questions[a].answers.B;
        answerButton[2].innerHTML = questions[a].answers.C;
        answerButton[3].innerHTML = questions[a].answers.D;
        
        nextQuiz.addEventListener('click', nextQuestion);
        
    }

    // finally combine our output list into one string of html and put it on the page
    startGame.innerHTML = output.join('');
}
function showResults(question, gameArea, scoreArea, answerButton) {
    // code will go here
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