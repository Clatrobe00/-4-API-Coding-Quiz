var startButton = document.getElementById("startButton");
startButton.addEventListener('click', beginQuiz)
var quizQuestion = 0
var quizBox = document.getElementById('quizBox');
var i = 0
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

for ([key, value] of questions.entries(i)) {
    console.log(key, value);
    i++
}

function beginQuiz() {
    console.log(startButton.id)
    beginTimer();
    eleHide(startButton.id);
    // I think I need a for loop here to iterate through the questions
    var correctAnswer = showQuiz(quizQuestion);
    console.log(correctAnswer);
    hitOrMiss = verifyAnswer(userAnswer) //verifies the users answer with if statements - should return a boolean
    scoreUpdate(hitOrMiss) //uses the boolean value to determine if scores increases
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

function showQuiz(quizQuestion) {
    // How this needs to realistically work:
    // Create a for each function that iterates through the object and creates divs for each
    // Return the correct answer from the array
        console.log(quizQuestion);
        console.log(questions[quizQuestion].A);
        nextQuestion = document.createElement('div');
        nextQuestion.setAttribute('class', 'question')
        nextQuestion.textContent = questions[quizQuestion].Question;
        quizBox.append(nextQuestion);
        return questions[quizQuestion].Correct


    }
    
function eleHide(ele) {
    console.log(ele);
    var hidden = document.getElementById(ele);
    hidden.setAttribute('class', 'hide');

    //ele.setAttribute('class') = 'hide' 
}    

function verifyAnswer(){};
function scoreUpdate (){};