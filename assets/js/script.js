// Questions will be asked
    const Questions = [{
        id: 0,
        q: "How much percentage of the human body is constituted by water?",
        a: [{ text: "40%", isCorrect: false },
            { text: "56%", isCorrect: false },
            { text: "66%", isCorrect: true },
            { text: "89%", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "Is the nose of an average human being as long as the length of their thumb?",
        a: [{ text: "", isCorrect: false, isSelected: false },
            { text: "", isCorrect: false },
            { text: "No", isCorrect: false },
            { text: "Yes", isCorrect: true }
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
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";
// Show selection for op1
opt1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
opt2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
