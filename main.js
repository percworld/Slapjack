var dialogue = document.querySelector('.dialogue');
var deck1 = document.getElementById('player-1');
var deck2 = document.getElementById('.player2');
var stack = document.getElementById('stack');
var player1Wins = document.querySelector('.player-1-win-num');
var player2Wins = document.querySelector('.player-2-win-num');
//All DOM manipulation lives here in Main

var game;
// Event Listeners

window.addEventListener('load', function(){
  game = new Game();
  game.dealDeck();
});


window.addEventListener("keydown", function(event) {
  if (event.key === 'f') {
    game.slapStack(event);
  } else if (event.key === 'j') {
    game.slapStack(event);
  } else if (event.key === 'q' && game.player1Turn()) {
    game.dealCard();
  } else if (event.key === 'p' && !game.player1Turn()) {
    game.dealCard();
  };
  updateStack();
}, true);

// Event handling

function updateStack() {
  if (game.stack[0]) {
    stack.innerHTML = <img class="face-card" src=`./assets/${game.stack[0]}`);
  } else stack.innerHTML = "";
}
//Code End
