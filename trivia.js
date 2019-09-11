
$(document).ready(function () {
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;

    var question = ["Can you cast a spell underwater?",
        "Is there alignment restriction for classes in the 5th Edition Player's Handbook?", "True or False? Half-Elves are immune to being Charmed", "What is the Hit Die of a Fighter?"];
    var answer = ["Yes", "No, there are no restrictions", "False", "1d10"];
    var firstChoice = ["No", "Yes, a Cleric's allignment must match their deity", "True", "1d8"];
    var secondChoice = ["Yes, but other creatures had advantage against your Spell Save DC", "No, there are no restrictions", "False", "1d6",];
    var thirdChoice = ["Yes, but fire spells do no damage", "Yes, Paladin must be Lawful Good, Druid must be Neutral and Rogue must be Evil", "", "1d10"];
    var fourthChoice = ["Yes", "Yes, a Paladin must be Good, and a Monk must be Lawful", "", "1d12"];

    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);


        $("#choice-holder-1").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-2").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-3").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-4").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
    }
    $("#choice-holder-1").on("click", checkAnswer)
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

    function checkAnswer() {

        hideHolders();

        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }

        checkGameEnd();
    }


    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 30;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            count++;
            checkGameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="d20.png">');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="d20.png">');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="d20.png">');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="d20.png">');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="d20.png">');
        }
    }


    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start to play!");
    }

    function resetResults() {
        correct = 0;
        incorrect = 0;
    }


    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

    $(".start").on("click", function () {
        startGame();
    });
});