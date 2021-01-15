var dialogue = document.querySelector('.dialogue');
var deck1 = document.getElementById('player-1');
var deck2 = document.getElementById('.player2');
var stack = document.getElementById('stack');
var player1Wins = document.querySelector('.player-1-win-num');
var player2Wins = document.querySelector('.player-2-win-num');
//All DOM manipulation lives here in Main

// Event Listeners
// do I need to name functions like so or is anonymous ok here?
//document.addEventListener('keydown', logKey);

// function logKey(e) {
//   code = e.code
// }

window.addEventListener("keydown", function(event) {
  if (event.key === 'f') {
    player1Slap();
  } else if (event.key === 'j') {
    player2Slap();
  } else if (event.key === 'q') {
    player1Deal();
  } else if (event.key === 'p') {
    player2Deal();
  }
}, true);

// Event handling
function player1Slap() {
  console.log('player1Slap');
}
function player2Slap() {
  console.log('player2Slap');
}
function player1Deal() {
  console.log('player1Deal');
}
function player2Deal() {
  console.log('player2Deal');
}
//Code End
