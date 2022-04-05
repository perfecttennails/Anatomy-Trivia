// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "answer") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("question").addEventListener("keydown", function (event) {
        if (event.key === "answer-button") {
            checkAnswer();
        }
    });

    runGame("question");


});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

 function runGame(gameType) {

// Gets all the elements needed and stores them in variables:
let quizBox = document.getElementById('question-box');
let questionH2 = document.getElementById('question');
let answerButton = document.getElementsByClassName('answer-button');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let scoreTracker = document.getElementById('score');
let q = 0;
let a = 0;
let correct = 0;
let totalQuestions = 30;
let currentQuestion = 0;

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
]
}
