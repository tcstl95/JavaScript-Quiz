var timerEl= document.querySelector(".timer");
var beginEl = document.querySelector("start");
var showtime = document.querySelector(".showtime");


var index = 0;
var timeRemain = 70;


var questions = [
    "Question1",
    "Question2",
    "Question3",
    "Questions4",
]


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

}





    
