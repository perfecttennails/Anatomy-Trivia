//eventlistners for buttons
document.addEventListener("answer-button", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "answer-buton") {


                checkAnswer();
                "btn--yellow".addEventListners('click', startGame);
                "btn--green".addEventListners('click', restartQuiz);
                "btn--orange".addEventListners('click', nextQuestion);
                "answer-button".addEventListners('click', answerButton);
                "question.box".addEventListners('click', questionBox);
                "score".addEventListners('click', score);
                "scores".addEventListners('click', scores);

            }
            let i;
            for (i = 0; i < answerButton.length; i++){
                answerButton[i].addEventListener("click", revealAnswer);
            }
            
        
                    

            
            function startQuiz() {
                customQuestion =0;
                startGame = document.getElementById("btn--yellow");
                questionBox.innerHTML="question"[currentQuestion].question;
                answerButton.innerHTML="answer-button"[currentQuestion].answer[0].option;
                answerButton.onclick= ()=>{
                    if(score<1) score++;
                

            }
                let questionBox = document.getElementById("question-box");
                customQuestion =0;
                let answerBox = document.getElementById("question-box");
                questionBox.innerHTML="question"[currentQuestion].question;
                answerButton.innerHTML="answer-button"[currentQuestion].answer[0].option;
                answerButton.onclick= ()=>{
                    if(score<1) score++;
                }

                let answerButton = document.getElementsByClassName("answer-button");
                customQuestion =0;
                let startGame = document.getElementById("answer-button");
                answerButton.innerHTML="question"[currentQuestion].question;
                answerButton.innerHTML="answer-button"[currentQuestion].answer[0].option;
                answerButton.onclick= ()=>{
                    if(score<1) score++;
                }

                let nextQuestion = document.getElementById("btn--orange");
                let restartQuiz = document.getElementById("btn--green");
                let scoreTracker = document.getElementById("score");
                let q = 0;
                let a = 0;
                let correct = 0;
                let totalQuestions = 30;
                let currentQuestion = 0;

                scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;

            }

let currentQuestion =0;
var score =0;
            let question = [
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
        },
    