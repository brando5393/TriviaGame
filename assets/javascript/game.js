// global vars
var correctAnswers = 0;
var incorrectAnswers = 0;
var startBtnClicked = false;
// timer var

// display vars
var timerDisplayText = $("#timer-display");
var correctAnswersDisplayText = $("#correct-answer-display");
var incorrectAnswersDisplayText = $("#incorrect-answer-display");

// audio vars
var mainAudio = $("#main-audio");

$("#trivia-questions").hide();

// document ready
$(document).ready(function () {

    $(".start-btn").click(function () {
        $("#trivia-questions").show();
        startBtnClicked = true;
    })

    // create a timer set for 1 minute

    // user clicks start button timer begins to count down and questions display

    // if timer reaches 0 or user clicks submit button timer stops and the number of correct vs incorrect answers are displayed. Also, questions become hidden again
})