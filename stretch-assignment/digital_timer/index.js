let first = document.getElementById("secondTens");
let second = document.getElementById("secondOnes");
let colon = document.getElementById("colon");
let third = document.getElementById("msHundreds");
let fourth = document.getElementById("msTens");
let timerFull = document.querySelector("digits");

// var start = new Date();
var start = 0;
var num = 0;
var numString = "";
let firstTemp= "0";
let secondTemp= "0";
let thirdTemp= "0";
let fourthTemp= "0";
var x = "";

var myFunction = function() {
  setBase(num);
  ++num;
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
    num = 0;
    first.classList.add("redDigit");
    second.classList.add("redDigit");
    third.classList.add("redDigit");
    fourth.classList.add("redDigit");
    colon.classList.add("redDigit");
    enableStart();
  }
}

let enableStart = function() {
  startTimer.setAttribute('onclick', 'this.disabled = false;');
}
let setBase = function(num) {
  if(num==0){
    reset();
  }
  
}
let reset = function() {
  num=0;
  first.textContent = "0";
  second.textContent = "0";
  third.textContent = "0";
  fourth.textContent = "0";
  firstTemp = "0";
  secondTemp = "0";
  thirdTemp = "0";
  fourthTemp = "0";
  first.classList.remove("redDigit");
  second.classList.remove("redDigit");
  third.classList.remove("redDigit");
  fourth.classList.remove("redDigit");
  colon.classList.remove("redDigit");
}


document.querySelector("body").appendChild(document.createElement("button"));
let startTimer = document.querySelector("button");
startTimer.classList.add(".start");
startTimer.textContent = "Start";
startTimer.setAttribute('onclick', 'x = setInterval(myFunction, 10);this.disabled = true;');

document.querySelector("body").appendChild(document.createElement("button"));
let stopTimer = document.querySelectorAll("button")[1];
stopTimer.classList.add(".end");
stopTimer.textContent = "Stop";
stopTimer.setAttribute('onclick', 'clearInterval(x);');

document.querySelector("body").appendChild(document.createElement("button"));
let resetTimer = document.querySelectorAll("button")[2];
resetTimer.classList.add(".reset");
resetTimer.textContent = "Reset";
resetTimer.setAttribute('onclick', 'reset(); clearInterval(x);');