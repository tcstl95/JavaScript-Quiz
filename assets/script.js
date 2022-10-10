var timer = document.querySelector(".timer");
var start = document.querySelector("#start");
var scoreInput = document.querySelector("#score-text");
var nameInput = document.querySelector("#name-text");
var scoreList =  document.querySelector("#score-list");
var scoreCount = document.querySelector("#score-count");
var nameList = document.querySelector("#name-list");
var saveButton = document.getElementById("save");
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


var scores = []; 
var names = [];

function produceScores(){
scoreList.innerHTML= "";
scoreCount.textContent = scores.length;


for(var i = 0; i < scores.length; i++){
    var score = scores[i];
    var name = names[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.textContent = name;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Score Saved";
    
    li.appendChild(button);
    scoreList.appendChild(li);


}

}

function scoresInit(){
var storedScores = JSON.parse(localStorage.getItem("scores"));
var storedNames = JSON.parse(localStorage.getItem("names"));

if (storedScores !== null){
    scores = storedScores;
}
if(storedNames !== null){
    names = storedNames;
}

produceScores();

}

function storeScores(){
    localStorage.setItem("scores", JSON.stringify(scores));
    localStorage.setItem("names", JSON.stringify(names));
}
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    var scoreText = scoreInput.value.trim();
    var nameText = nameInput.value.trim();

    scores.push(scoreText);
    scoreInput.value = "";
    nameInput.value = "";
    names.push(nameText);
    storeScores();
    produceScores();
    if (scoreText === ""){
        return;
    }

   
   if(nameText === ""){
    return;
   }

});




scoreList.addEventListener("click", function(event){
    var element = event.target;

    if(element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index");
        scores.splice(index, 1);

        storeScores();
        produceScores();
    }
});

scoresInit()