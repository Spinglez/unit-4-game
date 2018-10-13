var goalNum = 0;
var skullNum = [null,null,null,null];
var wins = 0;
var loss = 0;
var guessNum = 0;
var gameOn = true;

reset = function(){
  goalNum = 0;
  skullNum = [null,null,null,null];
  guessNum = 0;
  start();
}

function goalGen() {
  goalNum = Math.floor(Math.random() * 100) + 19;
  return goalNum;
  console.log(goalNum);
}

function skullGen() {
    for (var i = 0; i < skullNum.length; i++) {
      skullNum[i] = Math.floor(Math.random() * 11) + 1;
  }
}

function setup(){
  $('#random').html('<h2>'+goalNum+'</h2>');
  $('#wins').html('Total Wins: ' + wins);
  $('#loss').html('Total Losses: ' + loss);
  $('#score').html('<h2>'+guessNum+'</h2>');
}

function start() {
  goalGen();
  skullGen();
  setup();
}

function increaseNum(num) {
  guessNum += num;
  if (guessNum == goalNum) {
    wins++;
    $('#announce').html('<p>You WIN!</p>');
    reset();
  }
  else if (guessNum > goalNum) {
    loss++;
    $('#announce').html('<p>You LOSE!</p>');
    reset();
  }
  else {
  }
console.log(goalNum,skullNum);
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

console.log(guessNum);
