var goalNum = null;
var skullNum = [null,null,null,null];
var wins = 0;
var loss = 0;
var guessNum = 0;
var gameOn = true;

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

reset = function(){
  var goalNum = "";
  var skullNum = [null,null,null,null];
  var guessNum = "";
  start()
}

function increment(x){
  x++;
  return x;
}

function start(){
  goalGen();
  skullGen();
  $('#random').html('<h2>'+goalNum+'</h2>');
  $('#wins').html('Total Wins: ' + wins);
  $('#loss').html('Total Losses: ' + loss);
  $('#score').html('<h2>'+guessNum+'</h2>');
}

// trying to build my if statements
if (guessNum == goalNum) {
  increment(wins);
  $('#announce').html('<p>You WIN!</p>');
  reset();
}
else {
  increment(loss);
  $('#announce').html('<p>You LOSE!</p>');
  reset();
}

start();
console.log(goalNum,skullNum);

// on click events are below
  $('#skull1').on('click', function(){
    guessNum = guessNum + skullNum[0];
    $('#score').html('<h2>'+guessNum+'</h2>');
  })

  $('#skull2').on('click', function(){
    guessNum = guessNum + skullNum[1];
    $('#score').html('<h2>'+guessNum+'</h2>');
  })

  $('#skull3').on('click', function(){
    guessNum = guessNum + skullNum[2];
    $('#score').html('<h2>'+guessNum+'</h2>');
  })
  $('#skull4').on('click', function(){
    guessNum = guessNum + skullNum[3];
    $('#score').html('<h2>'+guessNum+'</h2>');
  })
