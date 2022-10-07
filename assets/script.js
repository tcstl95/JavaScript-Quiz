var timer= document.querySelector(".timer");
var start = document.querySelector("start");
var showtime = document.querySelector(".showtime");


var timeRemain = 70;


var questions = [
    "Question1",
    "Question2",
    "Question3",
    "Questions4",
]
var questionsLength = questions.length;

var choices = [
    "Choice1",
    "Choice2",
    "Choice3",
    "Choice4",
]
function createQuestions(){
    var ques = document.getElementById('questions');
    for(var i = 0; i < questionsLength; i++){
        console.log(questions[i]);
    }

}

function navigation(){
    start.addEventListener("click", function(){
        createQuestions();
        showtime.setAttribute("hidden");
    })
}
function countdown() {
    var timerInterval= setInterval(function(){
        timeRemain--;
        timerEl.textContent = timeRemain + "Seconds remaining!!"

        if (timeRemain === 0){
            clearInterval(timerInterval);

        }
    }, 1000);

    
}


function startQuiz(){
    countdown()
    navigation()
    createQuestions()
}





    
