var timer= document.querySelector(".timer");
var start = document.querySelector("#start");
var showtime = document.querySelector(".showtime");



var timeRemain = 70;


var questions = [
{
   title: "Question1",
   choices: ["answer1", "answer2", "answer3","answer4"],
   answer: "answer 2",
},
{
    title: "Question2",
   choices: ["answer1", "answer2", "answer3","answer4"],
   answer: "answer 4",
},
{
    title: "Question3",
   choices: ["answer1", "answer2", "answer3","answer4"],
   answer: "answer 3",
},
{
    title: "Question4",
    choices: ["answer1", "answer2","answer3","answer4"],
    answer: "answer 1",
},

]
function createQuestions(idx){

    var header = document.createElement('h1');
    var body = document.createElement('p');

    header.innerHTML = questions[idx].title
    body.innerHTML = questions[idx].choices


    document.getElementById('question').append(header)
  

    for(var i= 0; i < questions[idx].choices.length; i++ ){
        var option = document.createElement('p');
        option.innerHTML = questions[idx].choices[i];
        document.getElementById('question').append(option)
    } 
   
 
}
  start.addEventListener("click", function(event){
    event.preventDefault();
        console.log('inside start btn click')
        createQuestions(0);
    
    })

function countdown() {
    var timerInterval= setInterval(function(){
        timeRemain--;
        timer.textContent = timeRemain + "Seconds remaining!!"

        if (timeRemain === 0){
            clearInterval(timerInterval);

        }
    }, 1000);

    
}








    
