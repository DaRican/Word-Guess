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

    switch (terms) {

        case 'ace':

            break;

        case 'beanball':

            break;

        case 'brushback':

            break;

        case 'cheese':

            break;

        case 'pickoff':

            break;

        case 'double':

            break;

        case 'triple':

            break;

        case 'single':

            break;

        case 'moonshot':

            break;

        case 'balk':

            break;

        case 'cycle':

            break;


    }


    // Choose a random word from terms Array
    var rightLetter = [];
    var wrongLetter = [];
    var randWord = terms[Math.floor(Math.random() * terms.length)];

    var guessRemaining = 9;
    var wins = 0;
    var losses = 0;


    $('#winsTracker').append(wins);
    $('#lossTracker').append(losses);


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




        $('<span/>', {
            id: 'blankGuessWord',
            class: 'nameLater',
        }).appendTo('#underscore');

        for (var i = 0; i < randWord.length; i++) {


            underScore.push("_");



        }
        $("#blankGuessWord").append(underScore);

        console.log(underScore);














        $("body").keyup(function (event) {


            /* 

                    KEYPRESS EVENT

            */

            keyPressed = event.key;
            var guessLength = [];
            guessLength.push(keyPressed)
            console.log(guessLength);
            console.log("guessLength " + guessLength.length);
            $('<div/>', {
                id: 'displayChosen',
                class: 'nameLater',
            }).appendTo('#lettersPressedContainer');

            /*
            
                    SHOW USER WHAT KEY WAS LAST PRESSED
            
            */

            $('#displayChosen').text('"' + keyPressed + '"');
            $("#lettersPressedContainer ").append()

            /*

                    DOES THE LETTER THE USER PRESSED IN THE STRING?

            */

            if (randWord.indexOf(keyPressed) > -1) {


                /*

                        DETERMINE IF LETTER PRESSED HAS MORE
                        THAN ONE INSTANCE IN randWord

                */


                var str = randWord;
                var indices = [];
                for (var i = 0; i < randWord.length; i++) {
                    if (str[i] === keyPressed) {
                        indices.push(i);
                    }
                }

                console.log(indices);

                //////////////////////////////////////////////////////////////

                /*

                        randWord HAS MORE THAN ONE INSTANCE
                        OF THE LETTER PRESSED

                */

                if (indices.length > 1) {

                    guessRemaining = guessRemaining - (wrongLetter.length + rightLetter.length);
                    console.log(wrongLetter.length + rightLetter.length);
                    $("#guessTracker").empty();
                    $("#guessTracker").append(guessRemaining);
                    console.log('has more than one')

                    rightLetter.push(keyPressed);
                    console.log("right letter pushed: " + rightLetter);
                    $('<div/>', {
                        id: 'rightLetters',
                        class: 'shown-letters',

                    }).appendTo("#rightAnswerContainer");
                    $("#rightLetters").text(rightLetter);


                    console.log(randWord.indexOf(keyPressed));

                    for (i = 0; i < indices.length; i++) {

                        var multipleSpot = indices[i];
                        underScore[multipleSpot] = keyPressed;

                    }

                    $('#blankGuessWord').empty();
                    $("#blankGuessWord").append(underScore);


                    console.log(underScore);



                    ///////////////////////////////////////////////////////////////////////////

                } else {
                    guessRemaining = guessRemaining - (wrongLetter.length + rightLetter.length);
                    console.log(wrongLetter.length + rightLetter.length);
                    $("#guessTracker").empty();
                    $("#guessTracker").append(guessRemaining);

                    console.log('only has one')


                    rightLetter.push(keyPressed);
                    console.log("right letter pushed: " + rightLetter);
                    $('<div/>', {
                        id: 'rightLetters',
                        class: 'shown-letters',

                    }).appendTo("#rightAnswerContainer");
                    $("#rightLetters").text(rightLetter);

                    console.log(randWord.indexOf(keyPressed));





                    underScore[randWord.indexOf(keyPressed)] = keyPressed;
                    $('#blankGuessWord').empty();
                    $("#blankGuessWord").append(underScore);


                    console.log(underScore);

                }









            } else {



                wrongLetter.push(keyPressed);
                console.log("wrong letter pushed: " + wrongLetter);
                $('<div/>', {
                    id: 'wrongLetters',
                    class: 'shown-letters',
                }).appendTo("#wrongAnswerContainer");
                $("#wrongLetters").text(wrongLetter);

                guessRemaining = guessRemaining - (wrongLetter.length + rightLetter.length);
                console.log(wrongLetter.length + rightLetter.length);
                $("#guessTracker").empty();
                $("#guessTracker").append(guessRemaining);



            }







        })





















    }

    gameplay();

})