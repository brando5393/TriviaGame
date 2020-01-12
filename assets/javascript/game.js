// global vars
var correctAnswers = 0;
var incorrectAnswers = 0;
var mainTimerRunning = false;
var timer;
var submitBtnClicked = false;
// timer var

// display vars
var timerDisplayText = $("#timer-display");
var correctAnswersDisplayText = $("#correct-answer-display");
var incorrectAnswersDisplayText = $("#incorrect-answer-display");

// timeout var
var mainTimeout;

// score game function
function scoreGame() {
    $("input:checked").each(function () {
        var checkedVal = $(this).val()
        if (checkedVal === "correct") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        correctAnswersDisplayText.text(correctAnswers);
        incorrectAnswersDisplayText.text(incorrectAnswers);
    })
}

function resetGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    timerDisplayText.text("1:30");
}


// timer obj
var mainTimer = {
    time: 90,

    start: function () {
        // if(!mainTimerRunning){
        $("#trivia-questions").show();
        $(".start-btn").hide();
        mainTimerRunning = true;
        timerDisplayText.text("1:30");
        $("#welcome-audio").trigger('play');
        $("#main-audio").trigger('play');
        timer = setInterval(mainTimer.count, 1000);
    },

    count: function () {
        mainTimer.time--;
        // console.log(mainTimer.time);
        var convertedTime = mainTimer.timeConverter(mainTimer.time);
        // console.log(convertedTime);
        timerDisplayText.text(convertedTime);
        if (mainTimer.time === 0) {
            console.log("game over");
            clearInterval(timer);
            $("#main-audio").trigger('pause');
            $("#magic-word-audio").trigger('play')
            mainTimerRunning = false;
        }
    },

    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    },

    stop: function () {
        clearInterval(timer);
        mainTimerRunning = false;
        $("#trivia-questions").hide();
        $(".start-btn").show();
        $("#main-audio").trigger('pause');
        $("#end-game-audio").trigger('play');
    },

    outOfTime: function () {
        clearInterval(timer);
        mainTimerRunning = false;
        $("#trivia-questions").hide();
        $(".start-btn").show();
        $("#main-audio").trigger('pause');
        $("#magic-word-audio").trigger('play');
    }
}




// document ready
$(document).ready(function () {

    $("#trivia-questions").hide();

    // user clicks start button timer begins to count down and questions display

    // if timer reaches 0 or user clicks submit button timer stops and the number of correct vs incorrect answers are displayed. Also, questions become hidden again
    $(".start-btn").click(function () {
        mainTimer.start();
        if (mainTimerRunning === true) {
            mainTimer.count();
            $(".start-btn").hide();
        }
        if (mainTimer.time === 0) {
            mainTimer.outOfTime();
            clearInterval(timer);
            $("#trivia-questions").hide();
            $(".start-btn").show();
            scoreGame();
        } else if (submitBtnClicked === true) {
            clearInterval(timer);
            mainTimer.stop();
            $("#trivia-questions").hide();
            $(".start-btn").show();
            scoreGame();
        }
    })

    $(".submit-btn").click(function () {
        event.preventDefault();
        submitBtnClicked = true;
        clearInterval(timer);
        $("#main-audio").trigger('pause');
        $("#end-game-audio").trigger('play');
        $(".start-btn").show();
        $("#trivia-questions").hide();
        scoreGame();
    })
})



//create array for correct answers
//create array for user answers
//set question input values to a number. if value number is equal to user answer correct else incorrect
//reread docs on every method in bootcamp folder