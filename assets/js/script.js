// Questions will be asked
const Questions = [{
    id: 0,
    q: "How much percentage of the human body is constituted by water?",
    a: [{ A: "35%", isCorrect: false },
        {B: "55%", isCorrect: false },
        { C: "66%", isCorrect: true },
        { D: "89%", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Is the nose of an average human being as long as the length of their thumb?",
    a: [{ A: "Only the eyes", isCorrect: false},
        { B: "No", isCorrect: false },
        { C: "The little toe", isCorrect: false },
        { D: "Yes", isCorrect: true }
    ]

},
{
    id: 2,
    q: "At what rate does an average human being sneeze?",
    a: [{ A: "20 miles per hour", isCorrect: false },
        { B: "40 miles per hour", isCorrect: false },
        { C: "60 miles per hour", isCorrect: false },
        { D: "100 miles per hour", isCorrect: true }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var gameArea = document.getElementsByClassName("answer-button");
gameArea[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');


// Providing option text
A.innerText = Questions[id].a[0].A;
B.innerText = Questions[id].a[1].B;
C.innerText = Questions[id].a[2].C;
D.innerText = Questions[id].a[3].D;

// Providing the true or false value to the options
A.value = Questions[id].a[0].isCorrect;
B.value = Questions[id].a[1].isCorrect;
C.value = Questions[id].a[2].isCorrect;
D.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
A.addEventListener("click", () => {
    A.style.backgroundColor = "white";
    B.style.backgroundColor = "white";
    C.style.backgroundColor = "white";
    D.style.backgroundColor = "white";
    selected = A.value;
})

// Show selection for op2
B.addEventListener("click", () => {
    A.style.backgroundColor = "white";
    B.style.backgroundColor = "white";
    C.style.backgroundColor = "white";
    D.style.backgroundColor = "white";
    selected = B.value;
})

// Show selection for op3
C.addEventListener("click", () => {
    A.style.backgroundColor = "white";
    B.style.backgroundColor = "white";
    C.style.backgroundColor = "white";
    D.style.backgroundColor = "white";
    selected = C.value;
})

// Show selection for op4
D.addEventListener("click", () => {
    A.style.backgroundColor = "white";
    B.style.backgroundColor = "white";
    C.style.backgroundColor = "white";
    D.style.backgroundColor = "white";
    selected = D.value;
})

/// Grabbing the answer by button
x// Evaluate method
const isCorrect = [0].addEventListener("click", () => {
    if (selected == "true") {
        isCorrect[0].innerText = "true";
        isCorrect[0].style.color = "green";
    } else {
        isCorrect[0].innerText = "false";
        isCorrect[0].style.color = "red";
    }
})

}

if (start) {
iterate("0");
}

const scoreArea = document.getElementById('scores');
const q = 0;
const a = 0;
const correct = 0;
const totalScore = 3;
const currentQuestion = 0;

totalScore.innerHTML= 'Score:' + correct + '/' + totalScore;

// Next button and method

const restartQuiz = document.getElementByClass('restart-quiz');
const nextQuestion = document.getElementsByClassName('next-question')[0];
var id = 0;

nextQuestion.addEventListener("click", () => {
start = true;
if (id < 2) {
    id++;
    iterate(id);
}})
