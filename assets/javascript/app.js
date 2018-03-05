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
//ALLOWS THE PAGE TO LOAD BEFORE SCRIPT STARTS
$(document).ready(function() {
  questionsAndAnswers = [
    {
      Quest: "What is the capital of PA?",
      answers: ["Harrisburg", "Augusta", "Jefferson City", "Sacramento"],
      correctAns: "Harrisburg"
    },

    {
      Quest: "What is the capital of PA?",
      answers: ["Harrisburg", "Augusta", "Jefferson City", "Sacramento"],
      correctAns: "Harrisburg"
    }
  ];

  var timeRemaining;
  var counter = 10;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var htmlText;

  //FUNTION TO START RUNNING GAME
  function startGame() {
    htmlText =
      '<button type="button" class="btn btn-default">Click to Start</button>';
    $(".timerPanel").html(htmlText);
    console.log(htmlText);
  }

  startGame();


  //CLICK TO START THE GAME
  //clicking starts the timer countdown and loads the question
  $('.timerPanel').click(function() {
    console.log("it works");

    countDown();
    // clickToEnd();
    $('.clickToEndPanel').html('<button type="button" class="btn btn-default">Finished</button>');


    //LOOP to cycle through all the questions
    for (var i = 0; i < questionsAndAnswers.length; i++) {
      //APPENDS the DOM with QUESTION
      $(".mainPanel").append("<h2>" + questionsAndAnswers[i].Quest + "</h2>");

      //LOOP to cycle through all the answers
      for (var z = 0; z < questionsAndAnswers[i].answers.length; z++) {
        //APPENDS the DOM with ANSWERS (loops the length of the questionAndAnswers array)
        $(".mainPanel").append(
          '<input type="radio" name="answer">' +
            questionsAndAnswers[i].answers[z] +
            "</input>"
        )
      }
    }



        //buttonObject.value = text


    
      
  /****************************************
                  FUNCTIONS                      
*****************************************/

//the timer...writed the clock to the DOM
function countDown()
{
    timeRemaining = setInterval(timerAmount, 1000);
    function timerAmount() {
      if (counter > 0) {
        counter--;
        $(".timerPanel").html("<p>" + "Time Left: " + counter + "</p>");
        console.log(counter);
      } else {
        finalResults();
      }
    }
  }

  //If user clicks to end game before timer expired
  function clickToEnd() {
    $('.clickToEndPanel').html('<button type="button" class="btn btn-default">Finished</button>');
    // $('.clickToEndPanel').click(endOfGame());

    //onclick.....
  }

  function finalResults() {
    htmlText = "<p>" + "Correct Answers: " + correctAnswers + "</p>";
    $(".timerPanel").html(
      "<p>" + "Correct Answers: " + correctAnswers + "</p>"
    );
  }

  //If timer expires 
  function endOfGame() {
    htmlText = "<p>" + "Correct Answers: " + correctAnswers + "</p>";
    $(".timerPanel").html(
      "<p>" + "Correct Answers: " + correctAnswers + "</p>"
    );
    $(".mainPanel").hide();
  }

  function gameReset() {
    counter = 4;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unAnswered = 0;
  }


}); //closes my click button for timer function

// if (questionsAndAnswers[i].answers[z] = correctanswer) {
//   correctAnswers++;

// } else if (questionsAndAnswers[i].answers[z] != correctanswer ){
//   incorrectAnswers++;
// } else {
//   unAnswered++;
// };


}); //closes my document ready function
