var startButton = document.getElementById("startButton");
startButton.addEventListener('click', beginQuiz)
var quizQuestion = 0

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
    }
    
function eleHide(ele) {
    console.log(ele);
    var hidden = document.getElementById(ele);
    hidden.setAttribute('class', 'hide');

    //ele.setAttribute('class') = 'hide'
}    