var dialogue = document.querySelector('.dialogue');
var deck1 = document.getElementById('player-1');
var deck2 = document.getElementById('player2');
var stack = document.getElementById('stack');
var player1Wins = document.querySelector('.player-1-win-num');
var player2Wins = document.querySelector('.player-2-win-num');

var game;

window.addEventListener('load', function(){
  game = new Game();
  game.dealDeck();
});

window.addEventListener("keydown", function(event) { //
  if (event.key === 'f') {
    game.slapStack(event);
  } else if (event.key === 'j') {
    game.slapStack(event);
  } else if (event.key === 'q' && game.player1Turn()) {
    game.dealCard();
  } else if (event.key === 'p' && !game.player1Turn()) {
    game.dealCard();
  } else return;
  updateDialogue();
  updateStack();
  updateWins();
}, true);


function updateDialogue() {
  dialogue.innerText = `${game.text}`;
};

function updateStack() {
  if (game.stack[0]) {
    stack.innerHTML = `<img class="face-card" src="./assets/${game.stack[0].img}"/>`;
  } else stack.innerHTML = "";
  updateStackColor(game.currentPlayer.id);
};

function updateWins() {
  player1Wins.innerText = `${game.player1.wins} Wins`;
  player2Wins.innerText = `${game.player2.wins} Wins`;
};

function updateStackColor(id) {
  var card = document.querySelector('.face-card');
  if (id === 1 && card) {
    card.classList.add('stack-1');
  };
  if (id === 2 && card) {
    card.classList.add('stack-2');
  };
};
