var intervalID = 0
var timeleft = 75
var startButton = document.getElementById("startButton");
var i = 0
var quizQuestions = document.getElementById('quizQuestions');
let answerButtons = document.querySelectorAll(".answerButton")
let submitButton = document.getElementById('submitButton')
var nameInput = document.getElementById('nameInput');
let name = document.getElementById('name');
let rightWrong = document.getElementById('rightWrong');
let highScore = document.getElementById('highScore');
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
    },
    {
        question: "What is the color of night?",
        answersA: "Huh?",
        answersB: "Sanguine, my brother",
        answersC: "Oh no I forgot",
        answersD: "Dark... Blue?",
        correctAnswer: "B",
    }
]

startButton.addEventListener('click', beginQuiz);
answerButtons.forEach((button) => {
    button.addEventListener('click', evaluateQuestion)
}); 
submitButton.addEventListener('click', saveScore);

name.textContent = localStorage.getItem('name');
highScore.textContent = localStorage.getItem('score');

function beginQuiz() {
    intervalID = setInterval(beginTimer, 1000);
    eleHide(startButton.id);
    showContent(quizQuestions.id);
    getNewQuestion(i) 
    }   
    
function beginTimer() {
    if(timeleft <= 0){
    endQuizHandler()    
    clearInterval(intervalID);
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

function evaluateQuestion () {
    if (event.target.id === questions[i].correctAnswer) {
        rightWrong.textContent = 'correct!'
        setTimeout(fadeout, 1000);
    } else if (event.target.id !== questions[i].correctAnswer) {
        rightWrong.textContent = 'whoops!'
        setTimeout(fadeout, 1000);
        subtractTime()
    }
    i++

    if (i === questions.length) {
        endQuizHandler()
        return
    }

    getNewQuestion(i);
};

function subtractTime () {
    timeleft = timeleft - 10;
    if (timeleft <= 0) {
        endQuizHandler()
    }
}

function endQuizHandler () {
    document.getElementById("timeLeft").textContent = timeleft;
    clearInterval(intervalID);
    eleHide(quizBox.id);
    showContent(nameInput.id);
}

function saveScore () {
    localStorage.setItem('name', document.getElementById('userNameInput').value);
    localStorage.setItem('score', document.getElementById('timeLeft').textContent);
}

function fadeout() {
    rightWrong.style.opacity = '0';
    rightWrong.textContent = ''
    rightWrong.style.opacity = '1';
  }