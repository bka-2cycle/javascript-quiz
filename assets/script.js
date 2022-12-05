var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var startQuizEl = document.querySelector(".intro-start");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var timer = document.querySelector(".timer-box");


var questionsIndex = 0;

var lastQuestion = questionsIndex.length - 1;
var score =0;

var questions = [
    {
    question: "Which planet produces the best Javascript programmers?",
    choices: ["Romulus", "Andoria", "Vulcan", "Omicron", "Vulcan"],
    answer: "Vulcan",
    },{
    question: "Which of the following Javascript terms is also used to start your car?",
    choices: ["String", "Boolean", "Number", "Keys"],
    answer: "Keys"
    },{
    question: "Who created Javascript?",
    choices: ["Bill Gates", "Steve Jobs", "Al Gore", "Brendan Eich"],
    answer: "Brendan Eich"
    },{
    question: "How many days did it take to develop Javascript?",
    choices: ["71", "487", "10", "1823"],
    answer: "10"
    },{
    question: "Which company does not have a say in the continuing development of Javascript?",
    choices: ["Facebook", "Google", "IBM", "Apple"],
    answer: "Apple"
    },{
    question: "What was the original name for Javascript?",
    choices: ["Mocha", "Latte", "Expresso", "Cappuccino"],
    answer: "Mocha"
    },{
    question: "What was the first website created with Javascript?",
    choiceA : ["Java the Hut", "Hot Java", "Java Cake", "Molten Java"],
    correct : "Hot Java"
    }];


    //console.log(questions);
    //console.log(typeof questions);
    //console.log(questions[0].choices[2]);

//calling a function that will start the game
function startGame() {
    //console.log("the game is starting");
    //console.log(startQuizEl);
        startQuizEl.style.display = "none";
        timer.style.display = "block";
        startTimer();
        displayAnswers();
        displayQuestion();
    }

//a function to start timer countdown; used in: startGame ()
    timerCount = 60;
    function startTimer() {
        timer =setInterval(
            () => {
                if (timerCount <= 0) clearInterval(timer);
                timerElement.value = timerCount;
                timerElement.textContent = timerCount;
                timerCount -= 1;
            }, 1000);
        }



//a function to display the question --WORKS
function displayQuestion() {
    //questionEl.textContent = questions[0].question;
    questionEl.innerHTML = "<h3>"+ questions[0].question +"</h3>";
}


//a function to display the answers as buttons
function displayAnswers() {
var answerButton01 = document.createElement("button");
answerButton01.textContent = questions[0].choices[0];
answersEl.append(answerButton01);
  //how to add data to a dynamic element

var answerButton02 = document.createElement("button");
answerButton02.textContent = questions[0].choices[1];
answersEl.append(answerButton02);
  //how to add data to a dynamic element

var answerButton03 = document.createElement("button");
answerButton03.textContent = questions[0].choices[2];
answersEl.append(answerButton03);
  //how to add data to a dynamic element

var answerButton04 = document.createElement("button");
answerButton04.textContent = questions[0].choices[3];
answersEl.append(answerButton04);
  //how to add data to a dynamic element
}




//a function to display the question --WORKS
function displayQuestionOne() {
    //questionEl.textContent = questions[0].question;
    questionEl.innerHTML = "<h3>"+ questions[1].question +"</h3>";
}


//a function to display the answers as buttons
function displayAnswersOne() {
var answerButton01 = document.createElement("button");
answerButton01.textContent = questions[1].choices[0];
answersEl.append(answerButton01);
  //how to add data to a dynamic element

var answerButton02 = document.createElement("button");
answerButton02.textContent = questions[1].choices[1];
answersEl.append(answerButton02);
  //how to add data to a dynamic element

var answerButton03 = document.createElement("button");
answerButton03.textContent = questions[1].choices[2];
answersEl.append(answerButton03);
  //how to add data to a dynamic element

var answerButton04 = document.createElement("button");
answerButton04.textContent = questions[1].choices[3];
answersEl.append(answerButton04);
  //how to add data to a dynamic element
}

// use data-attributes to get data from buttons to ID the correct answer

// if any button is pushed advance to next question and answers
        // ID wheteher answer is correct or wrong and:
           // if answer is wrong display wrong
           // and deduct 10 seconds from current count in counter
           // if answer is correct display correct

// continue to advance until the end of the questions array
// remove/clear screen and display:
// quiz is over!
// give final score = seconds remaining on timer
// enter initials field
// submit button for initials and score
// save to local storage
// display stored high scores value with:
   // link to start page and clear high scores

// back to intro/start page


          


//websource - for advancing the question
/* function checkAnswer(answer) {
    if (questions[questionsIndex].correct == answer){
        score++;
        console.log(score);
    } else{
        timerCount = -10;
    } 
    if (questionsIndex < lastQuestion){
        questionsIndex++;
        displayQuestion();
    }
} */



/* answerButton01.addEventListener("click", function(event) {
    if (questions[0].question == questions[0].choices[2]) {
        questionsIndex++;
        displayQuestion();
        displayAnswers();
        console.log(questionsIndex);
    }
}); */


// object (answerButton01) is not a valid DOM element

/* answerButton01.addEventListener("click", function(event) {
    if (questionsIndex = [0]) {
        questionsIndex++;
        displayQuestion();
        displayAnswers();
        console.log(questionsIndex);
    }
    else if (questionsIndex = [1]) {
        questionsIndex++;
        displayQuestion();
        displayAnswers();
        console.log(questionsIndex);
    } */




// first atttempt

answersEl.addEventListener("click", function(event) {
if (questionsIndex = [0]) {
    //questionsIndex++;
    displayQuestionOne();
    displayAnswersOne();
    //console.log(questionsIndex);
    console.log(event.target);
}
/* else if (questionsIndex = [1]) {
    questionsIndex++;
    displayQuestion();
    displayAnswers();
    console.log(questionsIndex);
}
 else if (questionsIndex = [2]) {
    questionsIndex++;
    displayQuestion();
    displayAnswers();
    console.log(questionsIndex);
}
else if (questionsIndex = [3]) {
    questionsIndex++;
    displayQuestion();
    displayAnswers();
    console.log(questionsIndex);
}
else if (questionsIndex = [4]) {
    questionsIndex++;
    displayQuestion();
    displayAnswers();
    console.log(questionsIndex);
}
else if (questionsIndex = [5]) {
    questionsIndex++;
    displayQuestion();
    displayAnswers();
    console.log(questionsIndex);
}
else if (questionsIndex = [6]) {
    questionsIndex++;
    displayQuestion();
    displayAnswers();
    console.log(questionsIndex);
} 
 else {
    return;
} */

});



startButton.addEventListener("click", startGame);

