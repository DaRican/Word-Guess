// Array holds all of the baseball terms available
var terms = [
    'ace',
    'beanball',
    'brushback',
    'cheese',
    'comebacker',
    'double',
    'triple',
    'single',
    'moonshot',
    'balk',
    'cycle',
];

// Choose a random word from terms Array

randWord = terms[Math.floor(Math.random() * terms.length)];

// Function to print out blank spaces in place of the random word chosen


function blankText() {
    randWord = terms[Math.floor(Math.random() * terms.length)];
    underScore = " ";
    for (i = 0; i < randWord.length; i++) {
        underscore = underscore = "_";
    }
}

//Function to throw the bankText function results into the #blankGuessWord div

function gameplay() {
    var randWordDiv = $("#bbTerms");
    var randWordDiv = $("#blankGuessWord");
    var randNumber = Math.floor(Math.random() * terms.length);
    randWord = terms[randNumber];
    randWordDiv.append(randWord);
    blankText = blankText();





    $('<span/>', {
        id: 'blankGuessWord',
        class: 'nameLater',
    }).appendTo('#bbTerms');



    console.log(randWord);


    for (var i = 0; i < randWord.length; i++) {
        $("#blankGuessWord").append(" " + "_" + " ");
    }

    $('<div>', {
        id: 'guessingArea',
        class: "nameLater"
    })

    var $input = $('#guessingArea');




}

gameplay();

$(document).ready(function () {
    $("body").keyup(function (event) {
        console.log(event.key);
        keyPressed = event.key
    });
});

//Randon function to check and show on the screen what letter was pressed

function gameStart() {
    $("body").keyup(function (event) {

        keyPressed = event.key;
        $('<div/>', {
            id: 'displayChosen',
            class: 'nameLater',
        }).appendTo('#gameBox');


        $('#displayChosen').text('You have hit the letter ' + keyPressed + ' ');
        $("#gameBox").append()



    });

}

gameStart();



function findLetter() {


    var str = randWord,
        re = //g,
            match;
    while (match = re.exec(str)) {
        console.log(match.index); // logs 1 through 9
    }
}

findLetter();