$(document).ready(function () {

    // Array holds all of the baseball terms available
    var terms = [
        'ace',
        'beanball',
        'brushback',
        'cheese',
        'pickoff',
        'double',
        'triple',
        'single',
        'moonshot',
        'balk',
        'cycle',
    ];

    // Choose a random word from terms Array
    var rightLetter = [];
    var wrongLetter = [];
    var lettersPressed = [];
    var randWord = terms[Math.floor(Math.random() * terms.length)];


    // Let the letter pressed be store in a variable called keyPressed


    var keyPressed = $("body").keyup(function (event) {
        console.log(event.key);
        keyPressed = event.key
    });

    // Function to print out blank spaces in place of the random word chosen





    /*

                GAME PLAY FUNCTION 
                WITH INSIDE FUNCTION

                
    */

    function gameplay() {


        var randWordDiv = $("#underscore");
        var randWordDiv = $("#blankGuessWord");

        randWord = terms[Math.floor(Math.random() * terms.length)];

        console.log(randWord);
        var indexReplace;

        /* 
        
                    UNDERSCORE VISUAL SHOWING HIDDEN LETTERS
        
        */

        var underScore = [];

        function generateUnderScore() {
            var underScore = [];

            $('<span/>', {
                id: 'blankGuessWord',
                class: 'nameLater',
            }).appendTo('#underscore');

            for (var i = 0; i < randWord.length; i++) {


                underScore.push("_");
                $("#blankGuessWord").append(underScore);


            }
            return underScore;
        }

        generateUnderScore();
        console.log(generateUnderScore());










        $("body").keyup(function (event) {

            keyPressed = event.key;
            $('<div/>', {
                id: 'displayChosen',
                class: 'nameLater',
            }).appendTo('#lettersPressedContainer');


            $('#displayChosen').text('You have hit the letter ' + keyPressed + ' ');
            $("#lettersPressedContainer ").append()

            if (randWord.indexOf(keyPressed) > -1) {
                rightLetter.push(keyPressed);
                console.log("right letter pushed: " + rightLetter);
                $('<div/>', {
                    id: 'rightLetters',
                    class: 'nameLater',

                });
                $("#rightLetters").text(rightLetter);
                $("rightAnswerContainer").append('#rightLetters');

                console.log(randWord.indexOf(keyPressed))




            } else {
                wrongLetter.push(keyPressed);
                console.log("wrong letter pushed: " + wrongLetter);
                ('<div/>', {
                    id: 'wrongLetters',
                    class: 'nameLater',
                });
                $("#wrongLetters").text(wrongLetter);
                $("#wrongAnswerContainer").append('#wrongLetters');

            }




        })















    }

    gameplay();

})