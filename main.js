var instructions = document.querySelector('.instructions');
var instructionsButton = document.querySelector('.instructions-button');
var dialogue = document.querySelector('.dialogue');
var deck1 = document.getElementById('player-1');
var deck2 = document.getElementById('player2');
var stack = document.getElementById('stack');
var player1Wins = document.querySelector('.player-1-win-num');
var player2Wins = document.querySelector('.player-2-win-num');
var player1CardCount = document.querySelector('.player-1-card-count');
var player2CardCount = document.querySelector('.player-2-card-count');

var game;

instructionsButton.addEventListener('click', showInstructions);
window.addEventListener('load', startGame);
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
  updateCardCount();
}, true);

function startGame() {
  game = new Game();
  getPlayers();
  updateWins();
  game.dealDeck();
};

function updateDialogue() {
  dialogue.innerText = `${game.text}`;
};

function updateStack() {
  if (game.stack[0]) {
    stack.innerHTML = `<img class="face-card" src="./assets/${game.stack[0].img}" alt="${game.stack[0].order} Card"/>`;
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
    card.classList.add('stack-2');
  };
  if (id === 2 && card) {
    card.classList.add('stack-1');
  };
  if (!game.player1.hand[0] && card) {
    card.classList.add('stack-2');
  };
  if (!game.player2.hand[0] && card) {
    card.classList.add('stack-1');
  };
};

function updateCardCount() {
  player1CardCount.innerText = `${game.player1.hand.length}`;
  player2CardCount.innerText = `${game.player2.hand.length}`;
};

function getPlayers() {
  var localPlayer1 = localStorage.getItem("player1");
  var localPlayer2 = localStorage.getItem("player2");
  if (localPlayer1) {
    game.player1 = JSON.parse(localPlayer1);
    game.player2 = JSON.parse(localPlayer2);
  }
};

function showInstructions() {
  instructions.classList.toggle('hidden');

};
