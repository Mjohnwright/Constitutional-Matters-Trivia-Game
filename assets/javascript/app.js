// check 23:30 on YT video for conditional operators to determine if answer is correct......OR perhaps I can use the switch/case method?

// 36:00 - running a for loop to search for an item in an array



// PsuedoCode

// Jumbotron 
//     Title of Game
//     Start button - click

//     Timer Starts - downward
//     List of Questions appears
//         Each question is centered on the page and has 4 radial options for answers
//     Done button at bottom of page to stop timer and record score

//     Answering questions:
//         Only able to choose one of the 4 options
//         Each questions retains it chosen button as user moves through questions.

//     When timer hits zero:
//         Jumbotron is rewritten with:
//             All Done!
//             Correct answers
//             Incorrect answers
//             Unanswered

/****************************************
              VARIABLES                      
*****************************************/

firstQuest = {
    Quest1: 'what is the capital of PA?',
    answer1: 'Harrisburg',
    answer2: 'Augusta',
    answer3: 'Jefferson City',
    answer4: 'Sacramento',
    // answer1: true,
};
secondQuesObj = {
    Quest2: 'what is the legal voting age?',
    answer1: '16',
    answer2: '21',
    answer3: '18',
    answer4: '65',
    answer3: true,
};

var visualTimer = $("#timer" ).html(gameTimer);

var gameTimer;

// var timeIsUp = setTimeout(function() {
//     alert("Time is up");
// }, 1000 * 5);

$(".jumbotron").on('click', function(){

/****************************************
              FUNCTIONS                      
*****************************************/

gameTimer = setTimeout(function() {
    console.log("time is up");
}, 1000 * 5);
    if (gameTimer === 0){
        // console.log("Times Up");
    }



/****************************************
        WRITING TO THE DOM                      
*****************************************/

$("#question1").text(firstQuest.Quest1);
$("#answer1").text(firstQuest.answer1);
$("#answer2").text(firstQuest.answer2);
$("#answer3").text(firstQuest.answer3);
$("#answer4").text(firstQuest.answer4);

});





    // $(".jumbotron").on('click', function() {
    //     console.log("Handler for .click() called.");









    //         function myFunction() {
    //             setTimeout(function(){ alert("Hello"); }, 3000);
    //         }

    //     };
    //     function gameTimer(){

    //         var seconds = 30;
    //         windows.setTimeout(, milliseconds);
    //     }
    //     gameTimer;
    // });

