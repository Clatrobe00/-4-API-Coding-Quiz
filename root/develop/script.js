var timeleft = 75
var startButton = document.getElementById("startButton");
var i = 0
var quizBox = document.getElementById('quizBox');
startButton.addEventListener('click', beginQuiz)
answerButtons = document.querySelectorAll(".answerButton")
answerButtons.forEach((button) => {
    button.addEventListener('click', evaluate)
});


let questions = [
    {
        question: "What do we use to style a webpage?",
        answersA: "CSS",
        answersB: "HTML",
        answersC: "Javascript",
        answersD: "Jquery",
        correctAnswer: "A"
    },
    {
        question: "What do we use to mark up pages?",
        answersA: "HTML",
        answersB: "CSS",
        answersC: "Javascript",
        answersD: "JQuery",
        correctAnswer: "A"
    },
    {
        question: "What does CSS stand for?",
        answersA: "Cascading Style Sheets",
        answersB: "Columbia Style School",
        answersC: "Crumbling Skill Saw",
        answersD: "Chimera Snap Shot",
        correctAnswer: "A",
    }
]


function beginQuiz() {
    time = beginTimer(timeleft);
    console.log(time);
    eleHide(startButton.id);
    // I think I need a for loop here to iterate through the questions
    showQuiz();
    getNewQuestion(i) 
     
    } 

    //hitOrMiss = verifyAnswer(userAnswer) //verifies the users answer with if statements - should return a boolean
    //scoreUpdate(hitOrMiss) //uses the boolean value to determine if scores increases
    //for loop ends here.
    // need to determine how the function to record the high score will look.    
    
function beginTimer(timeleft) {
    
    var quizTimer = setInterval(function(){
    if(timeleft <= 0){
    clearInterval(quizTimer);
    }
    document.getElementById("timeLeft").textContent = timeleft;
    timeleft -= 1;
    }, 1000);
    
    }

function showQuiz() {
    let quizQuestions = document.getElementById("quizQuestions")
    quizQuestions.setAttribute('class', 'none');
}
    
    
function eleHide(ele) {
    var hidden = document.getElementById(ele);
    hidden.setAttribute('class', 'hide'); 
}    

function getNewQuestion (i) {
    var newQuestion = questions[i]
    document.getElementById('question').textContent = newQuestion.question
    document.getElementById('A').textContent = newQuestion.answersA
    document.getElementById('B').textContent = newQuestion.answersB
    document.getElementById('C').textContent = newQuestion.answersC
    document.getElementById('D').textContent = newQuestion.answersD
};

function evaluate (event) {
    if (event.target.id === questions[i].correctAnswer) {
        console.log('correct')
    } else if (event.target.id !== questions[i].correctAnswer) {
        console.log('whoops!')
        subtractTime()
    }
    i++
    getNewQuestion(i);
};

function subtractTime () {
    var time = document.getElementById('timeLeft').textContent;
    newTime = parseInt(time);
    newTime = newTime -= 10;
    beginTimer(newTime);
    //document.getElementById('incorrect').addEventListener('click', function() {
    //    sec -= 5;
    //    document.getElementById('timerDisplay').innerHTML='00:'+sec;
    //});
    //startTimer();
}








// new idea:

// that idea was too work intensive. new idea. seperate 

    

       

  
    
