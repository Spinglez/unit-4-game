var goalNum = 0;
var skullNum = [null,null,null,null];
var wins = 0;
var loss = 0;
var guessNum = 0;
var gameOn = true;
var winSound = new Audio('assets/sounds/veryImpressive.mp3');
var loseSound = new Audio('assets/sounds/skeletorLaughs.mp3');
var startSound = new Audio('assets/sounds/powerBall.mp3')

// resets variables after game is completed thanks scott for pointing out my syntax errors
reset = function(){
  goalNum = 0;
  skullNum = [null,null,null,null];
  guessNum = 0;
  start();
}

// Generates a random goal number
function goalGen() {
  goalNum = Math.floor(Math.random() * 100) + 19;
  return goalNum;
  console.log(goalNum);
}

// generates an array containing each skulls secret number
function skullGen() {
    for (var i = 0; i < skullNum.length; i++) {
      skullNum[i] = Math.floor(Math.random() * 11) + 1;
  }
}

// displays player information on the page
function setup(){
  $('#random').html('<h2>'+goalNum+'</h2>');
  $('#wins').html('Total Wins: ' + wins);
  $('#loss').html('Total Losses: ' + loss);
  $('#score').html('<h2>'+guessNum+'</h2>');
}

// begins the game and also starts it again after it is finished
function start() {
  goalGen();
  skullGen();
  setup();
}

// adds the player guess to the guessNum variable and continues to add it while
// looking for victory or loss conditions also increments the score which is then displayed by setup.

function increaseNum(num) {
  guessNum += num;
  if (guessNum == goalNum) {
    wins++;
    $('#announce').html('<p>You WIN!</p>');
    winSound.play();
    reset();
  }
  else if (guessNum > goalNum) {
    loss++;
    $('#announce').html('<p>You LOSE!</p>');
    loseSound.play();
    reset();
  }
  else {
  }
}

// on click events are below
  $('#skull1').on('click', function(){
    increaseNum(skullNum[0]);
    $('#score').html('<h2>'+guessNum+'</h2>');
  })

  $('#skull2').on('click', function(){
    increaseNum(skullNum[1]);
    $('#score').html('<h2>'+guessNum+'</h2>');
  })

  $('#skull3').on('click', function(){
    increaseNum(skullNum[2]);
    $('#score').html('<h2>'+guessNum+'</h2>');
  })

  $('#skull4').on('click', function(){
    increaseNum(skullNum[3]);
    $('#score').html('<h2>'+guessNum+'</h2>');
  })

start();
setTimeout(function(){
  startSound.play();
},1000);
