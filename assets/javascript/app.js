// check 23:30 on YT video for conditional operators to determine if answer is correct......OR perhaps I can use the switch/case method?

// 36:00 - running a for loop to search for an item in an array

// How to gather input data
// How to write final stats to DOM

/******************************************************
                PSUEDOCODE 
                
    On page load the screen displays a Jumbotron with.....
    Title of Game
    Start button - click

    Ob click
    Timer appear and Starts - downward also.....
    List of Questions appears
    Each question is centered on the page and has 4 radial options for answers
    Done button at bottom of page to stop timer and record score

    Answering questions:
        Only able to choose one of the 4 options
        Each questions retains it chosen button as user moves through questions.

    When timer hits zero:
        Jumbotron is rewritten with:
            All Done!
            Correct answers: 4
            Incorrect answers: 4
            Unanswered: 2

    Problems:
        Need to find a way to cause timeout event for timer (it keeps running)
            and then cause the page script to update with final stats.
        
        Find a way for the answer choices to register so I can update final stats.
        I am trying to create a function the handle this as an click event.
        
****************************************************/

/****************************************
              VARIABLES                      
*****************************************/

questionsAndAnswers = [

  {
    Quest: "Who was not in attendance at the Constitutional Convention?",
    answers: ["George Washington", "Roger Sherman", "Thomas Jefferson", "Benjamin Franklin"],
    correctAns: "Thomas Jefferson"
  },

  {
    Quest: "What was the age of the youngest signer?",
    answers: [" 36", "18", "26", " 31"],
    correctAns: "26"
  },

  {
    Quest: "What was the largest city (inhabitants) in the colonies at the time of the convention?",
    answers: ["Williamsburg", "New York", "Boston", "Philadelphia"],
    correctAns: "Philadelphia"
  },

  {
    Quest: "Who were the only 2 Presidents who signed the Constitution??",
    answers: ["Washington and John Adams", "Madison and Jefferson", "Adams and Madison", "Washington and Madison"],
    correctAns: "Washington and Madison"
  },

  {
    Quest: "Which word does NOT appear in the Constitution?",
    answers: ["Democracy", "Confederacy", "Prince", "Pirates"],
    correctAns: "Democracy"
  },

];

var counter = 12;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var htmlText;
var timeRemaining;

/***************************************************************************************************** */

//CLICK TO START THE GAME
//clicking starts the timer countdown and loads the question
$(".timerPanel").html('<button type="button" class="btn btn-default">Click to Start</button>');

//DEFINES what happens when THE CLICK to Start button is clicked
$(".timerPanel").click(function () {


  ///CLICK to end function
  $(".clickToEndPanel").html('<button type="button" class="btn btn-default">Finished</button>');

  //DEFINES what happens when THE CLICK to FINISHis clicked
  $(".clickToEndPanel").click(function () {

    finalTally();
  })


  //LOOP to cycle through all the questions
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    //APPENDS the DOM with QUESTION
    // console.log(i)
    $(".mainPanel").append("<h2>" + questionsAndAnswers[i].Quest + "</h2>");

    //LOOP to cycle through all the answers
    for (var z = 0; z < questionsAndAnswers[i].answers.length; z++) {
      // console.log(z);
      //APPENDS the DOM with ANSWERS (loops the length of the questionAndAnswers array)
      $(".mainPanel").append("<input type='radio'  name='ques-" + i + "'value='" + questionsAndAnswers[i].answers[z] + "'>" + questionsAndAnswers[i].answers[z] + "</input>");
    }
  }

  countDown();
});



/****************************************
                  FUNCTIONS                      
*****************************************/

//FUNTION TO START RUNNING GAME
function startGame() {
  $(".timerPanel").html('<button type="button" class="btn btn-default">Click to Start</button>');
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
      // console.log(timeRemaining);
      console.log(counter);

    } else {
      clearInterval(timeRemaining);

      finalTally();
    }
  }
};


function startGame() {
  $(".timerPanel").html('<button type="button" class="btn btn-default">Click to Start</button>');
}


// FINAL TALLY
//this computes the final stats
function finalTally() {
  clearInterval(timeRemaining);

  $(".mainPanel").hide();
  $(".clickToEndPanel").hide();
  console.log(timeRemaining);


  $.each($("input[name='ques-0']:checked"), function () {
    console.log($("input[name='ques0']"));

    if ($(this).val() === questionsAndAnswers[0].correctAns) {
      (correctAnswers++);
      console.log("a")
      console.log(correctAnswers);

    } else if ($(this).val() !== questionsAndAnswers[0].correctAns) {
      incorrectAnswers++;
      console.log("b")
      console.log(incorrectAnswers);

    } else {
      console.log("x");
      unAnswered++;
    }
  })

  $.each($("input[name='ques-1']:checked"), function () {
    console.log($("input[name='ques1']"));

    if ($(this).val() === questionsAndAnswers[1].correctAns) {
      correctAnswers++;
      console.log("a")
      console.log(correctAnswers);

    } else if ($(this).val() !== questionsAndAnswers[1].correctAns) {
      incorrectAnswers++;
      console.log("b")
      console.log(incorrectAnswers);

    } else {
      console.log("x");
      unAnswered++;
    }
  })

  $.each($("input[name='ques-2']:checked"), function () {
    console.log($("input[name='ques2']"));

    if ($(this).val() === questionsAndAnswers[2].correctAns) {
      correctAnswers++;
      console.log("a")
      console.log(correctAnswers);

    } else if ($(this).val() !== questionsAndAnswers[2].correctAns) {
      incorrectAnswers++;
      console.log("b")
      console.log(incorrectAnswers);

    } else {
      console.log("x");
      unAnswered++;
    }
  })

  $.each($("input[name='ques-3']:checked"), function () {
    console.log($("input[name='ques3']"));

    if ($(this).val() === questionsAndAnswers[3].correctAns) {
      correctAnswers++;
      console.log("a")
      console.log(correctAnswers);

    } else if ($(this).val() !== questionsAndAnswers[3].correctAns) {
      incorrectAnswers++;
      console.log("b")
      console.log(incorrectAnswers);

    } else {
      console.log("x");
      unAnswered++;
    }
  })

  $.each($("input[name='ques-4']:checked"), function () {
    console.log($("input[name='ques4']"));

    if ($(this).val() === questionsAndAnswers[4].correctAns) {
      correctAnswers++;
      console.log("a")
      console.log(correctAnswers);

    } else if ($(this).val() !== questionsAndAnswers[4].correctAns) {
      incorrectAnswers++;
      console.log("b")
      console.log(incorrectAnswers);

    } else {
      console.log("x");
      unAnswered++;
    }
  })

  resetGame();

  $(".timerPanel").html(
    "<p>" + "Correct Answers: " + correctAnswers + "</p>" + "<br />" + "<p>" + "Incorrect Answers: " + incorrectAnswers + "</p>" + "<br />" + "<p>" + "Unanswered Questions: " + unAnswered + "</p>" + "<br />"
  );

 

}


function resetGame() {
  $(".clickToEndPanel").html('<button type="button" class="btn btn-default">Click to reset Quiz</button>');
  startGame();
}
