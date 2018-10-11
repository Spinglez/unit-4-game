var goalNum = "";
var skullNum = [null,null,null,null];
var wins = 0;
var loss = 0;
var guessNum = "";

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
  start();
}

function increment(x){
  x++;
}

function start(){
  goalGen();
  skullGen();
  $('#skull1').val(skullNum[0]);
  $('#skull2').val(skullNum[1]);
  $('#skull3').val(skullNum[2]);
  $('#skull4').val(skullNum[3]);
}

start();
console.log(goalNum,skullNum);
