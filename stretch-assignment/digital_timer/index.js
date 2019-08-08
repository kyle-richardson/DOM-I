


let first = document.getElementById("secondTens");
let second = document.getElementById("secondOnes");
let colon = document.getElementById("colon");
let third = document.getElementById("msHundreds");
let fourth = document.getElementById("msTens");
let timerFull = document.querySelector("digits");

var start = new Date();
var num = 0;
var numString = "";
let firstTemp= "0";
let secondTemp= "0";
let thirdTemp= "0";
let fourthTemp= "0";

var x = setInterval(function() {

  // Get today's date and time
  var delta = Date.now() - start;

  num = Math.floor(delta/ 10);
  numString = num.toString();
  if (num <10){
    fourthTemp = numString[0];
  }
  else if (num <100) {
    thirdTemp = numString[0];
    fourthTemp = numString[1];
  }
  else if (num <1000) {
    secondTemp = numString[0];
    thirdTemp = numString[1];
    fourthTemp = numString[2];
  }
  else {
    firstTemp = numString[0]
    secondTemp = numString[1];
    thirdTemp = numString[2];
    fourthTemp = numString[3];
  }
  //change each reference to document in DOM
first.textContent = firstTemp;
second.textContent = secondTemp;
third.textContent = thirdTemp;
fourth.textContent = fourthTemp;
    
//stop timer at 10:00 and change to red
  if (num > 999) {
    clearInterval(x);
    
    first.classList.add("redDigit");
    second.classList.add("redDigit");
    third.classList.add("redDigit");
    fourth.classList.add("redDigit");
    colon.classList.add("redDigit");
  }
}, 10);