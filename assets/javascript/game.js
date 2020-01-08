// global vars
var correctAnswers = 0;
var incorrectAnswers = 0;
var mainTimerRunning = false;
// timer var

// display vars
var timerDisplayText = $("#timer-display");
var correctAnswersDisplayText = $("#correct-answer-display");
var incorrectAnswersDisplayText = $("#incorrect-answer-display");

// timeout var
var mainTimeout;

// score game function
function scoreGame(){

}

// timer obj
var mainTimer = {
    time: 90,
    
    start: function(){
        if(!mainTimerRunning){
            $("#trivia-questions").show();
            timerDisplayText.text("1:30");
            $("#welcome-audio").trigger('play');
            $("#main-audio").trigger('play');
            mainTimeout = setTimeout(function(){
                mainTimerRunning = true;
            },90000)
        }
    },

    count: function(){
        mainTimer.time--;
        var convertedTime = mainTimer.timeConverter(mainTimer.time);
        timerDisplayText.text(convertedTime);
    },

    timeConverter: function(t){
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if(seconds < 10){
            seconds = "0" + seconds;
        }
    },

    stop: function(){
        clearTimeout(mainTimeout);
        mainTimerRunning = false;
        $("#main-audio").trigger('pause');
        $("#end-game-audio").trigger('play');
    },

    outOfTime: function(){
        clearTimeout(mainTimeout);
        mainTimerRunning = false;
        $("#main-audio").trigger('pause');
        $("#magic-word-audio").trigger('play');
    }
}



$("#trivia-questions").hide();

// document ready
$(document).ready(function () {


    $(".start-btn").click(function () {
       mainTimer.start();
       mainTimer.count();
    })



    $(".submit-btn").click(function(){
        mainTimer.stop();
    })

    // user clicks start button timer begins to count down and questions display

    // if timer reaches 0 or user clicks submit button timer stops and the number of correct vs incorrect answers are displayed. Also, questions become hidden again
})



//create array for correct answers
//create array for user answers
//set question input values to a number. if value number is equal to user answer correct else incorrect
//reread docs on every method in bootcamp folder