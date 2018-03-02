// check 23:30 on YT video for conditional operators to determine if answer is correct......OR perhaps I can use the switch/case method?

// 36:00 - running a for loop to search for an item in an array



/******************************************************
                PSUEDOCODE                
****************************************************/

//     On page load the screen displays a Jumbotron with.....
//     Title of Game
//     Start button - click

//     Ob click
//     Timer appear and Starts - downward also.....
//     List of Questions appears
//     Each question is centered on the page and has 4 radial options for answers
//     Done button at bottom of page to stop timer and record score

//     Answering questions:
//         Only able to choose one of the 4 options
//         Each questions retains it chosen button as user moves through questions.

//     When timer hits zero:
//         Jumbotron is rewritten with:
//             All Done!
//             Correct answers: 4
//             Incorrect answers: 4
//             Unanswered: 2

/****************************************
              VARIABLES                      
*****************************************/

questionsAndAnswers = {
    Quest1: 'what is the capital of PA?',
    answerA1: 'Harrisburg',
    answerA2: 'Augusta',
    answerA3: 'Jefferson City',
    answerA4: 'Sacramento',

    Quest2: 'what is the legal voting age?',
    answerB1: '16',
    answerB2: '21',
    answerB3: '18',
    answerB4: '65',
};

correctAnswers = 0;
incorrectAnswers = 0;
unAnswered = 0;



$(".jumbotron").on('click', function () {  //clicking the start game button launches a new page and starts the timer



    /****************************************
                  FUNCTIONS                      
    *****************************************/
    $("#container").load('Bhtml.html'); //Cannot figure how to get ALL questions and answers to write to the DOM
    //If I write them in HTML I do not know how to make them appear after the page loads.

    setTimeout(function () {
    }, 1000 * 5); //using 5 secs for testing purposes...will change this later

});




    /****************************************
            WRITING TO THE DOM                      
    *****************************************/









