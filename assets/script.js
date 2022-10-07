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

function navigation(){
    start.addEventListener("click", function(){

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
}





    
