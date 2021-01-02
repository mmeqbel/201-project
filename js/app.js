'use strict'

var count = 0;


function name1() {
    var userName = prompt("Tell me your name please ");
    alert("Welcome " + userName + " to my page ");
}
name1();

function firstAnswer() {
    var firstAnswer = prompt("is motasem meqbel my name ? [y,n]");
    while (firstAnswer != "y" && firstAnswer !== "n") {
        firstAnswer = prompt("is motasem meqbel my name ? [y,n]");
    }
    if (firstAnswer.toLowerCase() == "y") {
        alert("mmm , exactly , you know my name ");
        count += 1;

    } else {
        alert("mmm , however my name is motasem mrqbel ");
    }
}
firstAnswer();

function seconedAnswer() {
    var seconedAnswer = prompt("Am i intrested in software developing ? [y,n]");
    while (seconedAnswer != 'y' && seconedAnswer != 'n') {
        seconedAnswer = prompt("Am i intrested in software developing ? [y,n]");
    }

    if (seconedAnswer.toLowerCase() == "y") {

        alert("oops , you know so much thing about me ");
        count += 1;
    } else {
        alert("there are nothing else  interst me  ");

    }

}
seconedAnswer();


function thirdAnswer() {
    var thirdAnswer = prompt("Do i live jordan ? [y,n]");
    while (thirdAnswer != 'y' && thirdAnswer != 'n') {
        thirdAnswer = prompt("Do i live jordan ? [y,n]");
    }
    if (thirdAnswer.toLowerCase() == "y") {
        alert("mm, ok i  was born in jordan and i have not recived any travel chance yet ");
        count += 1;
    } else {
        alert("I wich your answer correct , however i live in jordan");

    }
}
thirdAnswer();

function fourthAnswer() {
    var fourthAnswer = prompt("Do i like online teaching ? [y,n]");
    while (fourthAnswer != 'y' && fourthAnswer != 'n') {
        fourthAnswer = prompt("Do i like online teaching ? [y,n]");
    }
    if (fourthAnswer.toLowerCase() == "y") {
        alert("of course i like it , true")
        count += 1;

    } else {
        alert("mmm, i like to study and work remotly , try again");

    }
}
fourthAnswer();

function fifthAnswer() {
    var fifthAnswer = prompt("Do i have BA. COMPUTER SCIENCE degree ? [y,n]");
    while (fifthAnswer != 'y' && fifthAnswer != 'n') {
        fifthAnswer = prompt("Do i have BA. COMPUTER SCIENCE degree ? [y,n]");
    }
    if (fifthAnswer.toLowerCase() == "y") {
        alert("Exactly ")
        count += 1;
    }

    else alert("mmm , i guess you  never know me");
}
fifthAnswer();


function sixthAnswer() {
    var countAttempt = 0;
    var number = 5;
    const maxAttempt = 4;

    while (countAttempt != maxAttempt) {
        var userGuess = parseInt(prompt("guess number between 1 and 10"));
        if (userGuess == number) {
            alert("exactly");
            count += 1;
            break;
        }//end ef
        else if (userGuess < 5) {
            alert("too low");
        }
        else if (userGuess > 5) {
            alert("too high");
        }
        countAttempt++;
    }//end while
        alert('The correct answer is: ' + number);


    }//end fun
    sixthAnswer();


    function sevenAnswer() {
        var arr2 = [1, 2, 3, 5, 7, 9];
        var countAttempt = 0;
        var continue1= true;

        while (countAttempt < 6 && continue1) {
            var userGuess = parseInt(prompt("guess a primary number less than  20"));
            for (let i = 0; i < arr2.length; i++) {
                if (userGuess == arr2[i]) {
                    alert("That's  Correct");
                    continue1=false;
                    count += 1;
                    break;
                }
            
            } // end for
            alert('The correct answers are: ' + arr2);

            countAttempt++;

        }//end wh
        alert('you final score is: ' + count);
    
} // end fun


sevenAnswer();


