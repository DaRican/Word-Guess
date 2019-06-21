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

    var randWord = terms[Math.floor(Math.random() * terms.length)];

    switch (randWord) {

        case 'ace':
            $('<p/>', {
                class: "caseParagraph",
                id: "aceParagraph"
            }).appendTo("#hintBox");
            $("#aceParagraph").text("Considered to be the best pitcher in the starting rotation");

            console.log("case statement ace");

            break;

        case 'beanball':

            $('<p/>', {
                class: "caseParagraph",
                id: "beanballParagraph"
            }).appendTo("#hintBox");
            $("#beanballParagraph").text("After one player gets hit by a pitch, other pitchers tend to get revenge for their hit teammate.");

            console.log("case statement beanball");

            break;

        case 'brushback':

            $('<p/>', {
                class: "caseParagraph",
                id: "brushbackParagraph"
            }).appendTo("#hintBox");
            $("#brushbackParagraph").text("Pitchers throwing a ball inside to a hitter to get him to stand further away from the plate");

            console.log("case statement brushback");

            break;

        case 'cheese':

            $('<p/>', {
                class: "caseParagraph",
                id: "cheeseParagraph"
            }).appendTo("#hintBox");
            $("#cheeseParagraph").text("Used to refer to a vary fast fastball being thrown to a hitter");

            console.log("case statement cheese");

            break;

        case 'pickoff':

            $('<p/>', {
                class: "caseParagraph",
                id: "pickoffParagraph"
            }).appendTo("#hintBox");
            $("#pickoffParagraph").text("When the pitcher throws the ball to a base where a runner is.");

            console.log("case statement pickoff");

            break;

        case 'double':

            $('<p/>', {
                class: "caseParagraph",
                id: "doubleParagraph"
            }).appendTo("#hintBox");
            $("#doubleParagraph").text("Batter hits the ball and ends up at second base");

            console.log("case statement double");

            break;

        case 'triple':

            $('<p/>', {
                class: "caseParagraph",
                id: "tripleParagraph"
            }).appendTo("#hintBox");
            $("#tripleParagraph").text("Batter hits the ball and ends up at third base");

            console.log("case statement triple");

            break;

        case 'single':

            $('<p/>', {
                class: "caseParagraph",
                id: "singleParagraph"
            }).appendTo("#hintBox");
            $("#singleParagraph").text("Batter hits the ball and ends up at first base");


            console.log("case statement single");

            break;

        case 'moonshot':

            $('<p/>', {
                class: "caseParagraph",
                id: "moonshotParagraph"
            }).appendTo("#hintBox");
            $("#moonshotParagraph").text("a ball hit so high and so far that it is said to have cleared the moon");

            console.log("case statement moonshot");

            break;

        case 'balk':

            $('<p/>', {
                class: "caseParagraph",
                id: "balkParagraph"
            }).appendTo("#hintBox");
            $("#balkParagraph").text("When the pitcher makes an illegal move while a runner is on base");

            console.log("case statement balk");

            break;

        case 'cycle':

            $('<p/>', {
                class: "caseParagraph",
                id: "balkParagraph"
            }).appendTo("#hintBox");
            $("#balkParagraph").text("hitting a single, double, triple and homerun in the same game");

            console.log("case statement cycle");

            break;


    }


    // Choose a random word from terms Array
    var rightLetter = [];
    var wrongLetter = [];


    var guessRemaining = 9;
    var winningCount = 0;
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


    if (randWord.length = winningCount) {
        wins++;

    } else {






        function gameplay() {


            var randWordDiv = $("#underscore");
            var randWordDiv = $("#blankGuessWord");



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
     
                        IS THE LETTER THE USER PRESSED IN THE STRING?
     
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


                    /*
                    
                    
                                    
     
                    console.log(indices);
                    console.log("Indices of underscores" + underscoreIndices.length)
     
                    //////////////////////////////////////////////////////////////
     
                    /*
     
                            randWord HAS MORE THAN ONE INSTANCE
                            OF THE LETTER PRESSED
     
                    */

                    if (indices.length >= 1) {



                        guessRemaining = 9 - (wrongLetter.length + rightLetter.length);
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

                        winningCount = winningCount + indices.length;


                        console.log('please start counting' + winningCount);
                        console.log("this is the variable that you want" + underScore);





                        ///////////////////////////////////////////////////////////////////////////

                    } else {
                        guessRemaining = 10 - (wrongLetter.length + rightLetter.length);
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

                        winningCount++;



                        console.log(underScore);
                        console.log('please start counting' + winningCount);


                    }









                } else {



                    wrongLetter.push(keyPressed);
                    console.log("wrong letter pushed: " + wrongLetter);
                    $('<div/>', {
                        id: 'wrongLetters',
                        class: 'shown-letters',
                    }).appendTo("#wrongAnswerContainer");
                    $("#wrongLetters").text(wrongLetter);

                    guessRemaining = 10 - (wrongLetter.length + rightLetter.length);
                    console.log(wrongLetter.length + rightLetter.length);
                    $("#guessTracker").empty();
                    $("#guessTracker").append(guessRemaining);



                }







            })





















        }

    }

    gameplay();




})