'use strict'


/*var userName=prompt("Tell me your name please ");
alert("Welcome "+userName+" to my page ");
var firstAnswer=prompt("is motasem meqbel my name ? [y,n]");
//console.log(firstAnswer);
(firstAnswer.toLowerCase()=="y") ? alert("mmm , exactly , you know my name ") : alert("mmm , however my name is motasem mrqbel ") ;
var seconedAnswer=prompt("Am i intrested in software developing ? [y,n]");
//console.log(seconedAnswer);
(seconedAnswer.toLowerCase()=="y") ?alert("oops , you know so much thing about me ") : alert("there are nothing else  interst me  ");
var thirdAnswer=prompt("Do i live jordan ? [y,n]");
//console.log(thirdAnswer);
(thirdAnswer.toLowerCase()=="y") ? alert("mm, ok i  was born in jordan and i have not recived any travel chance yet ") : alert("I wich your answer correct , however i live in jordan");
var fourthAnswer=prompt("Do i like online teaching ? [y,n]");
//console.log(fourthAnswer);
(fourthAnswer.toLowerCase()=="y") ? alert("of course i like it , true") : alert("mmm, i like to study and work remotly , try again");
var fifthAnswer=prompt("Do i have BA. COMPUTER SCIENCE degree ? [y,n]");
//console.log(fifthAnswer);
(fifthAnswer.toLowerCase()=="y") ? alert("Exactly ") : alert("mmm , i guess you  never know me");
*/
var number = 5;
var userGuess=parseInt(prompt("guess number between 1 and 10"));
const maxAttempt=5;
var count=0;
while(userGuess != number){
    if(count==maxAttempt+1){
        break;
        alert("false");
    }//end ef
    if(userGuess<3)alert("too low");
    if(userGuess>6)alert("too high");
   count++;
   userGuess=parseInt(prompt("guess number between 1 and 10"));
}//end while

if(userGuess==number) alert("exactly");
count=0;

var arr1=["red","orange","green","blue","indigo","violet"];//rainbow color
var arr2=[1,2,3,5,7,9];
var arr3=[1,3,6,9];



var continueGuess=true;
var answerValid=false;
var validAnswerCount=0;
while(continueGuess){
    // first question validation
    var ans1=prompt("write a rainbow color");
    count++;
    if(count==maxAttempt)
        continueGuess=false;
    for(var i=0;i<arr1.length;i++){//validation
            if(ans1.toLowerCase()==arr1[i]){
                answerValid=true;
                alert("true");
                break;
            }//end if
    }//end for
    if(answerValid!=true)
        alert("false");
    else 
        validAnswerCount++;
    answerValid=false;
    // seconed question validation
    var ans2=parseInt(prompt("write a primary number less than 10"));
    for(var i=0;i<arr2.length;i++){//validation
            if(ans2==arr2[i]){
                answerValid=true;
                alert("true");
                break;
            }//end if
    }//end for
    if(answerValid!=true)
        alert("false");
    else 
        validAnswerCount++;
    answerValid=false;
    // third question validation
    var ans3=parseInt(prompt("write a primary number less than 10 and accept division by 3 with no Remainder"));
    for(var i=0;i<arr2.length;i++){//validation
          if(ans3==arr3[i]){
              answerValid=true;
              alert("true");
                 break;
             }//end if
     }//end for
    if(answerValid!=true)
        alert("false");
    else 
        validAnswerCount++; 
    answerValid=false;
    
    
}//end while

alert(" great you solve "+validAnswerCount+" question correctly")








