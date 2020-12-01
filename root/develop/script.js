var timeleft = 75
var startButton = document.getElementById("startButton");
var i = 0
var quizQuestions = document.getElementById('quizQuestions');
var quizTimer;
var scoreInput = document.getElementById('scoreInput');

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

startButton.addEventListener('click', beginQuiz)

let answerButtons = document.querySelectorAll(".answerButton")
answerButtons.forEach((button) => {
    button.addEventListener('click', evaluate)
}); 

let submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', saveScore);

function beginQuiz(timeleft) {
    time = setInterval(beginTimer, 1000);
    eleHide(startButton.id);
    showContent(quizQuestions.id);
    getNewQuestion(i) 
    }   
    
function beginTimer() {
    if(timeleft <= 0){
    clearInterval(time);
    }
    document.getElementById("timeLeft").textContent = timeleft;
    timeleft -= 1;
    };
    
function showContent(ele) {
    var revealed = document.getElementById(ele)
    revealed.setAttribute('class', 'none');
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

function evaluate () {
    if (event.target.id === questions[i].correctAnswer) {
        console.log('correct')
    } else if (event.target.id !== questions[i].correctAnswer) {
        console.log('whoops!')
        subtractTime()
    }
    i++

    if (i === questions.length) {
        callHighScore()
        console.log('done');
        return

    }

    getNewQuestion(i);
};

function subtractTime () {
    var currentTime = document.getElementById('timeLeft').textContent;
    window.clearInterval(time)
    var newTime = parseInt(currentTime);
    console.log(newTime)
    timeleft = newTime -= 10;
    time = setInterval (beginTimer, 1000);
}

function callHighScore () {
    window.clearInterval(time);
    eleHide(quizBox.id);
    showContent(scoreInput.id);
}

function saveScore () {
    event.preventDefault();
    localStorage.setItem('name', document.getElementById('userNameInput').value);
    localStorage.setItem('score', document.getElementById('timeLeft').textContent);
}