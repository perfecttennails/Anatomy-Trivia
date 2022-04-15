// Questions will be asked

    const Questions = [{
        id: 0,
        q: "How much percentage of the human body is constituted by water?",
        a: [{ text: "40%", isCorrect: false},
            { text: "56%", isCorrect: false},
            { text: "66%", isCorrect: true},
            { text: "89%", isCorrect: false},
        ]
    },
    {
        id: 1,
        q: "Is the nose of an average human being as long as the length of their thumb?",
        a: [{ text: "Yes", isCorrect: true},
            { text: "No", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false }
        ]
    },
    {
        id: 2,
        q: "At what rate does an average human being sneeze?",
        a: [{ text: "40 miles per hour", isCorrect: false },
            { text: "80 miles per hour", isCorrect: false },
            { text: "100 miles per hour", isCorrect: true },
            { text: "120 miles per hour", isCorrect: false }
        ]
  
    },
    {
        id: 3,
        q: "Cells related to which part of the body divide considerably faster when compared to the rest?",
        a: [{ text: "Blood", isCorrect: false },
            { text: "Skin", isCorrect: false },
            { text: "Hair", isCorrect: true },
            { text: "Nails", isCorrect: false }
        ]
  
    },
  
]
  //Getting the score
  



// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var gameArea = document.getElementsByClassName("result");
    gameArea[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");

    // Setting the question text
    question.innerText = Questions[id].q;

  
    // Getting the options
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    const opt3 = document.getElementById("opt3");
    const opt4 = document.getElementById("opt4");

// Providing option text 
opt1.innerText = Questions[id].a[0].text;
opt2.innerText = Questions[id].a[1].text;
opt3.innerText = Questions[id].a[2].text;
opt4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
opt1.value = Questions[id].a[0].isCorrect;
opt2.value = Questions[id].a[1].isCorrect;
opt3.value = Questions[id].a[2].isCorrect;
opt4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
opt1.addEventListener("click", () => {
    opt1.style.backgroundColor = "yellow";
    opt2.style.backgroundColor = "white";
    opt3.style.backgroundColor = "white";
    opt4.style.backgroundColor = "white";
    selected = opt1.value;
})

// Show selection for op2
opt2.addEventListener("click", () => {
    opt1.style.backgroundColor = "white";
    opt2.style.backgroundColor = "yellow";
    opt3.style.backgroundColor = "white";
    opt4.style.backgroundColor = "white";
    selected = opt2.value;
})

// Show selection for op3
opt3.addEventListener("click", () => {
    opt1.style.backgroundColor = "white";
    opt2.style.backgroundColor = "white";
    opt3.style.backgroundColor = "yellow";
    opt4.style.backgroundColor = "white";
    selected = opt3.value;
})

// Show selection for op4
opt4.addEventListener("click", () => {
    opt1.style.backgroundColor = "white";
    opt2.style.backgroundColor = "white";
    opt3.style.backgroundColor = "white";
    opt4.style.backgroundColor = "yellow";
    selected = opt4.value;
})

 //Submit for the correct answer
const submitAnswer = document.getElementsByClassName("btn-submit");

submitAnswer[0].addEventListener("click", () => {
   if (selected == "true") {
       gameArea[0].innerText = "True";
       gameArea[0].style.backgroundColor = "lightgreen";
       incrementScore(correct)=++score;
    
    } else {
       gameArea[0].innerText = "False";
       gameArea[0].style.backgroundColor = "red";
       incrementScore(incorrect)=++score;
       
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const nextQuestion = document.getElementsByClassName('btn-next')[0];
var id = 0;

nextQuestion.addEventListener("click", () => {
start = false;
if (id < 3) {
    id++;
    iterate(id);
}
})
// Restart button and method
document.querySelector('.btn-restart').addEventListener('click', function(){
    window.location.reload();
    return false;
  });


  
