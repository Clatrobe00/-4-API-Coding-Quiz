var startButton = document.getElementById("startButton");
startButton.addEventListener('click', beginQuiz)
// var quizQuestion = 0
var quizBox = document.getElementById('quizBox');
var i = 0
var questions = [
    "What is 2 + 2"
]
var answersA = ["A: 2"]
var answersB = ["B: 4"]
var answersC = ["C: 6"]
var answersD = ["D: 8"]
var correctAnswers = ["B"]


function beginQuiz() {
    console.log(event.target.id)
    beginTimer();
    eleHide(startButton.id);
    // I think I need a for loop here to iterate through the questions
    showQuiz();
    for (i; i < questions.length; i++) {
        createQuestion(i);
        answer = getAnswer(i);
        console.log(answer);
    }
    //hitOrMiss = verifyAnswer(userAnswer) //verifies the users answer with if statements - should return a boolean
    //scoreUpdate(hitOrMiss) //uses the boolean value to determine if scores increases
    //for loop ends here.
    // need to determine how the function to record the high score will look.
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

function showQuiz() {
    let quizQuestions = document.getElementById("quizQuestions")
    quizQuestions.setAttribute('class', 'none');
}
    
    
function eleHide(ele) {
    var hidden = document.getElementById(ele);
    hidden.setAttribute('class', 'hide'); 
}    

function createQuestion (i) {
    document.getElementById('question').textContent = questions[i]
    document.getElementById('A').textContent = answersA[i]
    document.getElementById('B').textContent = answersB[i]
    document.getElementById('C').textContent = answersC[i]
    document.getElementById('D').textContent = answersD[i]
}

function getAnswer (i) {
    document.querySelectorAll('.answerButton').forEach(answer => {
    testAn = answer.addEventListener('click', testFun); 
    console.log(testAn);
    }
    )}

function testFun () {
    let message = "fuck"
    return message
}



// new idea:

// that idea was too work intensive. new idea. seperate 

    

       

  
    
