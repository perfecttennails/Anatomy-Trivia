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
    A.style.backgroundColor = "orange";
    B.style.backgroundColor = "lightskyblue";
    C.style.backgroundColor = "lightskyblue";
    D.style.backgroundColor = "lightskyblue";
    selected = A.value;
})

// Show selection for op2
B.addEventListener("click", () => {
    A.style.backgroundColor = "lightskyblue";
    B.style.backgroundColor = "orange";
    C.style.backgroundColor = "lightskyblue";
    D.style.backgroundColor = "lightskyblue";
    selected = B.value;
})

// Show selection for op3
C.addEventListener("click", () => {
    A.style.backgroundColor = "lightskyblue";
    B.style.backgroundColor = "lightskyblue";
    C.style.backgroundColor = "orange";
    D.style.backgroundColor = "lightskyblue";
    selected = C.value;
})

// Show selection for op4
D.addEventListener("click", () => {
    A.style.backgroundColor = "lightskyblue";
    B.style.backgroundColor = "lightskyblue";
    C.style.backgroundColor = "lightskyblue";
    D.style.backgroundColor = "orange";
    selected = D.value;
})

// Grabbing the answer
const answerButton = document.getElementsById("true");

// Evaluate method
answerButton[0].addEventListener("click", () => {
    if (selected == "true") {
        answerButton[0].innerHTML = "true";
        answerButton[0].style.color = "green";
    } else {
        answerButton[0].innerHTML = "false";
        answerButton[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

let scoreArea = document.getElementById('score');
let q = 0;
let a = 0;
let correct = 0;
let totalQuestions = 3;
let currentQuestion = 0;

scoreArea.innerHTML = 'Score: ' + correct + '/' + totalQuestions;

// Next button and method
const nextQuestion = document.getElementsByClassName('btn btn-next')[0];
var id = 0;

nextQuestion.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
}})
