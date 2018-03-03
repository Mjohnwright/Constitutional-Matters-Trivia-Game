// check 23:30 on YT video for conditional operators to determine if answer is correct......OR perhaps I can use the switch/case method?

// 36:00 - running a for loop to search for an item in an array

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
        
****************************************************/

/****************************************
              VARIABLES                      
*****************************************/

questionsAndAnswers = [{
    Quest: "What is the capital of PA?",
    answers: ["Harrisburg", "Augusta", "Jefferson City", "Sacramento"],
    correctAns: "Harrisburg"
  },

  {
    Quest: "What is the capital of PA?",
    answers: ["Harrisburg", "Augusta", "Jefferson City", "Sacramento"],
    correctAns: "Harrisburg"
  }
]


// allDone = [$('.timerAndQuestions').hide(), $(".timerAndQuestions").append("<h2>" + "All Done!" + "</h2>")];


var timer;
var counter = 3;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;

//CLICK TO START THE GAME
//clicking starts the timer countdown and loads the question
$("#timer").click(function () {
  console.log("it works");

  //LOOP to cycle through all the questions
  for (var i = 0; i < questionsAndAnswers.length; i++) {
    console.log(questionsAndAnswers[i]);

    //HIDE the Start Button(loops the length of the questionAndAnswers array)
    $('.ClickToStart').hide(); //removes the Start Button

    //APPENDS the DOM with QUESTION
    $(".timerAndQuestions").append(
      "<h2>" + questionsAndAnswers[i].Quest + "</h2>"
    )

    //LOOP to cycle through all the answers
    for (var z = 0; z < questionsAndAnswers[i].answers.length; z++) {

      //APPENDS the DOM with ANSWERS (loops the length of the questionAndAnswers array)
      $(".timerAndQuestions").append(
        '<input type="radio" name="answer">' +
        questionsAndAnswers[i].answers[z] +
        "</input>"
      )
    }
  };

  /****************************************
                  FUNCTIONS                      
*****************************************/
  function countDown() {
    setInterval(function () {
      console.log(counter--);

      // if (counter == 0) {
      
        // return [allDone];
      // return $(".timerAndQuestions").append("<h2>" + "All Done!" + "</h2>"); //RETURN DOES NOT STOP THE TIMER???

      // }
      //appends the DOM with All done notification and Stats
      //      return $(".timerAndQuestions").append("<h2>" + "All Done!" + "</h2>"); //RETURN DOES NOT STOP THE TIMER???
      //      $('.timerAndQuestions').hide(); //removes the Question and Answers
           

    }, 1000);
  }
  countDown();
  
});