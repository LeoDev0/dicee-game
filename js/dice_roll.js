var dices = {
  '1':"images/dice1.png",
  '2':"images/dice2.png",
  '3':"images/dice3.png",
  '4':"images/dice4.png",
  '5':"images/dice5.png",
  '6':"images/dice6.png"
};

function randomObjectValue(obj) {
  var keys = Object.keys(obj);
  return obj[keys[Math.floor(Math.random() * keys.length)]];
  // or
  // return obj[keys[ keys.length * Math.random() << 0]];
  // or
  // return obj[keys[Math.floor(keys.length * Math.random())]];
}

function pointWinner(player) {
  document.getElementById("result").innerHTML = "Jogador "+player+" venceu!";
  document.querySelectorAll('.dados p')[player-1].style.fontWeight = "bold";
  document.querySelectorAll('.dados p')[player-1].style.fontSize = "40px";
  document.querySelectorAll('.dados p')[player-1].style.textShadow = "2px 4px rgba(0, 0, 0, 0.5)";
}

var dado1 = randomObjectValue(dices);
var dado2 = randomObjectValue(dices);

document.getElementById("image1").setAttribute("src", dado1);
document.getElementById("image2").setAttribute("src", dado2);

if (dado1 == dado2){
  document.getElementById("result").innerHTML = "Empate";
} else if (dado1 > dado2) {
  // document.getElementById("result").innerHTML = "🚩 Jogador 1 venceu!";
  pointWinner(1);
} else {
  // document.getElementById("result").innerHTML = "Jogador 2 venceu! 🚩";
  pointWinner(2);
}
