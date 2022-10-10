var timer = document.querySelector(".timer");
var start = document.querySelector("#start");
var decreaseEl= document.querySelector(".decrease");
var questionsIndex = 0;
var titleIndex = 0;
var answerIndex= 0;


var questions = [
  {
    title: "Question1",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2",
  },
  {
    title: "Question2",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer4",
  },
  {
    title: "Question3",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3",
  },
  {
    title: "Question4",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer1",
  },
];

function countdown() {
    var timeRemain = 30;
  
    var timerInterval = setInterval(function () {
  
    if (timeRemain > 0) {
      
      timer.textContent = timeRemain + " Seconds remaining!!";
      timeRemain--;
    }else if (timeRemain === 1){
        timer.textContent = timeRemain + " Second remaining!!";
        timeRemain--;
    } else{
        timer.textContent = '';
        clearInterval(timerInterval);
    }
  }, 1000);
}
start.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("time starter");
  countdown();
});

function createQuestions(idx) {
  var header = document.createElement("h1");

  header.innerHTML = questions[idx].title;

  document.getElementById("question").append(header);

  for (var i = 0; i < questions[idx].choices.length; i++) {
    var option = document.createElement("button");
    option.setAttribute("class", "option");
    option.addEventListener("click", function (event) {
        event.preventDefault();
        questionsIndex++;
        createQuestions(questionsIndex);
      });
    option.innerHTML = questions[idx].choices[i];
    document.getElementById("question").append(option);
  }
}

start.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("inside start btn click");
  createQuestions(questionsIndex);
});

decreaseEl.addEventListener("click", function(event) {
    event.preventDefault();
if (choices[0] === answer[0]){
    return;
}else if (choices [1] === answer [1]){
    return;
} else if (choices[2] === answer [2]){
    return;
} else if (choices[3] === answer [3]){
    return;
}else {
    return timeRemain-=5;
}
});
