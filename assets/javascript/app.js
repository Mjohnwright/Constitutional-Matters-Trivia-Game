/****************************************
                      VARIABLES                      
        *****************************************/

questionsAndAnswers = [
  {
    Quest: "Who was not in attendance at the Constitutional Convention?",
    answers: [
      "George Washington",
      "Roger Sherman",
      "Thomas Jefferson",
      "Benjamin Franklin"
    ],
    correctAns: "Thomas Jefferson"
  },

  {
    Quest: "What was the age of the youngest signer?",
    answers: [" 36", "18", "26", " 31"],
    correctAns: "26"
  },

  {
    Quest:
      "What was the largest city (inhabitants) in the colonies at the time of the convention?",
    answers: ["Williamsburg", "New York", "Boston", "Philadelphia"],
    correctAns: "Philadelphia"
  },

  {
    Quest: "Who were the only 2 Presidents who signed the Constitution??",
    answers: [
      "Washington and John Adams",
      "Madison and Jefferson",
      "Adams and Madison",
      "Washington and Madison"
    ],
    correctAns: "Washington and Madison"
  },

  {
    Quest: "Which word does not appear in the Constitution?",
    answers: ["Democracy", "Confederacy", "Prince", "Pirates"],
    correctAns: "Democracy"
  }
];

var counter = 60;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 5;
var htmlText;
var timeRemaining;

/***************************************************************************************************** */

//CLICK TO START THE GAME
//clicking starts the timer countdown and loads the question
$(".timerPanel").html(
  '<button type="button" id ="button" class="btn btn-default">Click to Start</button>'
);

//DEFINES what happens when THE CLICK to Start button is clicked
$(".timerPanel").click(function() {
  ///CLICK to end function
  $(".clickToEndPanel").html(
    '<button type="button" class="btn btn-default">Finished</button>'
  );

  //DEFINES what happens when THE CLICK to FINISHis clicked
  $(".clickToEndPanel").click(function() {
    finalTally();
  });

  //LOOP to cycle through all the questions
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    //APPENDS the DOM with QUESTION
    $(".mainPanel").append("<h2>" + questionsAndAnswers[i].Quest + "</h2>");

    //LOOP to cycle through all the answers
    for (var z = 0; z < questionsAndAnswers[i].answers.length; z++) {
      //APPENDS the DOM with ANSWERS (loops the length of the questionAndAnswers array)
      $(".mainPanel").append(
        "<input type='radio'  name='ques-" +
          i +
          "'value='" +
          questionsAndAnswers[i].answers[z] +
          "'>" +
          questionsAndAnswers[i].answers[z] +
          "</input>" +
          "<br /br>"
      );
    }
  }

  countDown();
});

/****************************************
                          FUNCTIONS                      
        *****************************************/

//FUNTION TO START RUNNING GAME
function startGame() {
  $(".timerPanel").html(
    '<button type="button" class="btn btn-default">Click to Start</button>'
  );
  countDown();
}

//TIMER COUNTDOWN
//the timer...write the timer to the DOM
function countDown() {
  timeRemaining = setInterval(timerAmount, 1000);

  function timerAmount() {
    if (counter > 0) {
      $(".timerPanel").html("<p>" + "Time Left: " + counter + "</p>");
      counter--;
    } else {
      clearInterval(timeRemaining);

      finalTally();
    }
  }
}

function startGame() {
  $(".timerPanel").html(
    '<button type="button" class="btn btn-default">Click to Start</button>'
  );
}

function resetGame() {
  startGame();
}

// FINAL TALLY
//this computes the final stats
function finalTally() {
  clearInterval(timeRemaining);

  $(".mainPanel").hide();
  $(".clickToEndPanel").hide();

  //.EACH FUNCTION CYCLES THROUGH ARRAY OBJECTS COMPARING ANSWERS!
  //there is one block of code for each question
  $.each($("input[name='ques-0']:checked"), function() {
    if ($(this).val() === questionsAndAnswers[0].correctAns) {
      correctAnswers++;
      unAnswered--;
    } else if ($(this).val() !== questionsAndAnswers[0].correctAns) {
      incorrectAnswers++;
      unAnswered--;
    } else {
      unAnswered++;
    }
  });

  $.each($("input[name='ques-1']:checked"), function() {
    if ($(this).val() === questionsAndAnswers[1].correctAns) {
      correctAnswers++;
      unAnswered--;
    } else if ($(this).val() !== questionsAndAnswers[1].correctAns) {
      incorrectAnswers++;
      unAnswered--;
    }
  });

  $.each($("input[name='ques-2']:checked"), function() {
    if ($(this).val() === questionsAndAnswers[2].correctAns) {
      correctAnswers++;
      unAnswered--;
    } else if ($(this).val() !== questionsAndAnswers[2].correctAns) {
      incorrectAnswers++;
      unAnswered--;
    }
  });

  $.each($("input[name='ques-3']:checked"), function() {
    if ($(this).val() === questionsAndAnswers[3].correctAns) {
      correctAnswers++;
      unAnswered--;
    } else if ($(this).val() !== questionsAndAnswers[3].correctAns) {
      incorrectAnswers++;
      unAnswered--;
    }
  });

  $.each($("input[name='ques-4']:checked"), function() {
    if ($(this).val() === questionsAndAnswers[4].correctAns) {
      correctAnswers++;
      unAnswered--;
    } else if ($(this).val() !== questionsAndAnswers[4].correctAns) {
      incorrectAnswers++;
      unAnswered--;
    }
  });

  resetGame();

  $(".timerPanel").html(
    "<p>" +
      "Correct Answers: " +
      correctAnswers +
      "</p>" +
      "<br />" +
      "<p>" +
      "Incorrect Answers: " +
      incorrectAnswers +
      "</p>" +
      "<br />" +
      "<p>" +
      "Unanswered Questions: " +
      unAnswered +
      "</p>" +
      "<br />"
  );
}
