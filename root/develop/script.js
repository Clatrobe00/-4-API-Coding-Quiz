var startButton = document.getElementById("startButton");
startButton.addEventListener('click', beginQuiz); 
    
function beginQuiz(startButton) {
    beginTimer();
    //showQuiz()
}    
    
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

function showQuiz() {
        //this function will control the flow of questions
    }    