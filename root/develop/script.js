var startButton = document.getElementById("startButton");
startButton.addEventListener('click', beginQuiz)
var quizQuestion = 0
var quizBox = document.getElementById('quizBox');

var questions = [
    {
        Question: 'What is 2 + 2?',
        A: '2',
        B: '4',
        C: '6',
        D: '8',
        Correct: 'B'
    }
]

function beginQuiz() {
    console.log(startButton.id)
    beginTimer();
    eleHide(startButton.id);
    showQuiz(quizQuestion);
};    
    
function beginTimer() {
    var timeleft = 75;
    var quizTimer = setInterval(function(){
    if(timeleft <= 0){
    clearInterval(quizTimer);
    }
    document.getElementById("timeLeft").textContent = ": " + timeleft;
    timeleft -= 1;
    }, 1000);
    }

function showQuiz(quizQuestion) {
        console.log(quizQuestion);
        console.log(questions[quizQuestion].A);
        nextQuestion = document.createElement('div');
        nextQuestion.setAttribute('class', 'question')
        nextQuestion.textContent = questions[quizQuestion].Question;
        quizBox.append(nextQuestion);


    }
    
function eleHide(ele) {
    console.log(ele);
    var hidden = document.getElementById(ele);
    hidden.setAttribute('class', 'hide');

    //ele.setAttribute('class') = 'hide'
}    