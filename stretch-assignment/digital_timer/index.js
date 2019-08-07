


// let secondTens = document.getElementById("secondTens");
// let secondOnes = document.getElementById("secondOnes");
// let colon = document.getElementById("colon");
// let msHundreds = document.getElementById("msHundreds");
// let msTens = document.getElementById("msTens");

// var start = Date.now();
// setInterval(function() {
//     var delta = Date.now() - start; // milliseconds elapsed since start
//     output(Math.floor(delta / 1000)); // in seconds
//     // alternatively just show wall clock time:
//     output(new Date().toUTCString());
// }, 1000); // update about every second

var start = new Date();
var secondTens = 0;
var secondOnes = 0;
var ms = 0;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var delta = Date.now() - start;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  secondTens = Math.floor(delta / 10000);
  secondOnes = Math.floor(delta / 1000);
  ms = Math.floor(delta / 10);

    console.log("0" + secondOnes + ":" + ms);
    
  // If the count down is over, write some text 
  if (secondTens == 1) {
    clearInterval(x);
    // document.querySelector("digits").innerHTML = "10:00";
  }
}, 100);