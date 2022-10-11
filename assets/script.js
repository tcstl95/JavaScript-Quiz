/* Declared Variables for quiz*/

var timer = document.querySelector(".timer");
var start = document.querySelector("#start");
var rightAnswers = document.getElementById("RightAnswers");
var scoreInput = document.querySelector("#score-text");
var nameInput = document.querySelector("#name-text");
var scoreList = document.querySelector("#score-list");
var nameCount = document.querySelector("#name-count");
var scoreCount = document.querySelector("#score-count");
var nameList = document.querySelector("#name-list");
var saveButton = document.getElementById("save");
var questionsIndex = 0;
var answersIndex = 0;
var answers = ["(1) interactive","(2) Chicken"," (3) Trick-Question"," (4) Pooltime"];
  /* This variable helps produce the questions and choices for quiz.*/
var questions = [
  {
    title: "Which of the following adjectives best describes JavaScript?",
    choices: ["colorful", "interactive", "simple", "shiny"],
    
  },

  {
    title: "Which of the following terms are not a part of JavaScript?",
    choices: ["Boolean", "String", "Var", "Chicken"],
    
  },
  {
    title:"Since Java and JavaScript are the same thing. Can we use either within our HTML?",
    choices: ["Yes", "No", "Maybe", "Trick Question, they are not the same"],
    
  },
  {
    title: "Which error type is not a part of JavaScript?",
    choices: ["Loadtime", "Runtime", "Pooltime", "Logical"],
  
  },
];
/* Creates timer*/
function countdown() {
  var timeRemain = 30;

  var timerInterval = setInterval(function () {
    if (timeRemain > 0) {
      timer.textContent = timeRemain + " Seconds remaining!!";
      timeRemain--;
    } else if (timeRemain === 1) {
      timer.textContent = timeRemain + " Second remaining!!";
      timeRemain--;
    } else {
      timer.textContent = "";
      clearInterval(timerInterval);
    }
  }, 1000);
}
/* Event listner for timer*/
start.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("time starter");
  countdown();
});

/* Function to navigate through questions on quiz*/
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

/* Event listner to display correct answers once user finishes quiz.*/
rightAnswers.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("RightAnswers").textContent = answers.join(",");
});

/* event listener to produce first question of quiz*/
start.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("inside start btn click");
  createQuestions(questionsIndex);
});

var scores = [];
var names = [];
/* Functions to save both scores and names for quiz users*/
function produceScores() {
  scoreList.innerHTML = "";
  scoreCount.textContent = scores.length;

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;

    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = " Score Saved";

    li.appendChild(button);
    scoreList.appendChild(li);
  }
}

function produceNames() {
  nameList.innerHTML = "";
  nameCount.textContent = names.length;
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    var li = document.createElement("li");
    li.textContent = name;

    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = " Name Saved";

    li.appendChild(button);
    nameList.appendChild(li);
  }
}
/* JSON's to store names and scores*/
function scoresInit() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  var storedNames = JSON.parse(localStorage.getItem("names"));

  if (storedScores !== null) {
    scores = storedScores;
  }
  if (storedNames !== null) {
    names = storedNames;
  }

  produceScores();
  produceNames();
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function storeNames() {
  localStorage.setItem("names", JSON.stringify(names));
}
saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  var scoreText = scoreInput.value.trim();

  scores.push(scoreText);
  scoreInput.value = "";
  storeScores();
  produceScores();
  if (scoreText === "") {
    return;
  }
});

/* Activates save button to save scores and names*/
saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  var nameText = nameInput.value.trim();

  names.push(nameText);
  nameInput.value = "";
  storeNames();
  produceNames();
  if (nameText === "") {
    return;
  }
});

scoreList.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    scores.splice(index, 1);

    storeScores();
    produceScores();
  }
});

nameList.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    names.splice(index, 1);

    storeNames();
    produceNames();
  }
});

scoresInit();
