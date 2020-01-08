// global vars
var correctAnswers = 0;
var incorrectAnswers = 0;
var startBtnClicked = false;
// timer var

// display vars
var timerDisplayText = $("#timer-display");
var correctAnswersDisplayText = $("#correct-answer-display");
var incorrectAnswersDisplayText = $("#incorrect-answer-display");



$("#trivia-questions").hide();

// document ready
$(document).ready(function () {


    $(".start-btn").click(function () {
        $("#trivia-questions").show();
        startBtnClicked = true;
        timerDisplayText.text("1:30");
        $("#main-audio").trigger('play')
    })

    // create a timer set for 1 and 1/2 minutes
    var mainTimer = setTimeout(function(){
        console.log("timer working");
    },90000);

    // user clicks start button timer begins to count down and questions display

    // if timer reaches 0 or user clicks submit button timer stops and the number of correct vs incorrect answers are displayed. Also, questions become hidden again
    if(mainTimer === 0 || submitBtnClicked === true){
        clearTimeout(mainTimer);
        scoreGame();
    }
})



//create array for correct answers
//create array for user answers
//set question input values to a number. if value number is equal to user answer correct else incorrect
//reread docs on every method in bootcamp folder