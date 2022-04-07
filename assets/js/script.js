
 // Gets all the elements needed and stores them:

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const answerButton =  Array.from(document.querySelectorAll('.answer-button'));
const nextQuestion = document.querySelector('.btn-next');
const restartQuiz = document.querySelector('.btn-restart');
const score = document.querySelector('#correct #incorrect');
const totalcores = document.querySelector('#total-score');

var q = 0;
var a = 0;
let correct = 0
let totalScores = 0
let currentQuestions = {}
let availableQuestions =[]

scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;

let questions = [
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


    


/* 
Displays a message based on user input. 
A correct answer will trigger a green background and a "correct" message.
An incorrect answer will trigger a red background, an "incorrect" message, as well as the correct answer.
*/
function revealAnswer(event) {
        if (this.innerHTML === question[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
            correct++;
            currentQuestion++;
            questionBox.style.backgroundColor = "chartreuse";
            question.innerHTML = 'Correct!' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
        } 
        else if (this.innerHTML != question[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
            currentQuestion++;
            questionBox.style.backgroundColor = "red";
            question.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + question[q].correctAnswer + '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
            } 
        else if (this.innerHTML === question[q].correctAnswer && currentQuestion == q){
            questionBox.style.backgroundColor = "chartreuse";
            question.innerHTML = 'Correct!';
            correct++;
            currentQuestion++;
        } 
        else if (this.innerHTML != question[q].correctAnswer && currentQuestion == q){
            questionBox.style.backgroundColor = "red";
            question.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + question[q].correctAnswer + '</strong>';
            currentQuestion++;
        }
        
        totalScore.innerHTML = 'Score: ' + correct + '/' + totalQuestions; // Displays a value based on correctly answered questions and the total amount of questions.
}
let i;
for (i = 0; i < answerButton.length; i++){
    answerButton[i].addEventListener("click", revealAnswer);
}

// Displays all questions/alternatives:
question.innerHTML = question[q].question;
answerButton[0].innerHTML = question[a].answer.A;
answerButton[1].innerHTML = question[a].answer.B;
answerButton[2].innerHTML = question[a].answer.C;
answerButton[3].innerHTML = question[a].answer.D;

btnNext.addEventListener('click', nextQuestion);

/* 
Takes the user to the next question if the current question has been answered.
If not, or if the quiz is over, an alert will be triggered accordingly.
*/
function nextQuestion(){
    if (currentQuestion == totalQuestions){
        alert('Click the restart button to try again');
    }
    else if (currentQuestion > q){
        q++;
        a++;
        question.innerHTML = question[q].question;
        answerButton[0].innerHTML = question[a].answer.A;
        answerButton[1].innerHTML = question[a].answer.B;
        answerButton[2].innerHTML = question[a].answer.C;
        answerButton[3].innerHTML = question[a].answer.D;
        questionBox.style.backgroundColor = 'white';
    }
    else {
        alert('Please select your answer to continue');
    }
}

// Reloads/resets the entire quiz when button is clicked:
btnRestart.addEventListener('click', restartQuiz);
function restartQuiz(){
    location.reload();
}
