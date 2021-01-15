// game should include card images? (Line 7)
// or input type="file" in HTML, appendChild

class Game {
  constructor() {
    this.player1 = new Player(?, wins, hand) //array must be empty, only half of cards and shuffle method after?
    this.Player2 = new Player(?, wins, hand);
    this.playDeck = [{num: 'K', suit: 'gold', img: "goldking.png", orImage: new Image("goldking.png"), {51}]; //or createElement later?
    //this.stack = [];
    //this.slapBoo where 0 = false/ 1 = true **no declaration?**
  }
  shuffle(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
      var otherIndex = Math.floor(Math.randon() * i);
      var wav = cards[i];           // three lines switch cards
      cards[i] = cards[otherIndex];
      cards[otherIndex] = wav;
    };
  };
  updateStack(currentCard) {
    this.stack.unshift(currentCard);
    //when card is played, unshift array to keep all showing cards at index 0?

  };
  dealDeck() {
    this.playdeck.shuffle;  //calling method internally
    player1.hand = this.playDeck.slice(0, 25);
    player1.hand = this.playDeck.slice(26); // need an end #? Maybe
  };
  determineWhoseTurn() {
    // if slapped, opposite player
    if (this.slapBoo === true) {
      player1.myTurn = true;
    }
  };
  dealCard() {
    var playedCard = player1.hand[0]
    player1.hand.splice(0,1)
  };
  slapStack() {
    this.slapBoo = !this.slapBoo //exchange a boolean?
     //update slap boolean for turn determining
  };
  updateWinsCount(player) {
    if (player.id === 0) {
      player1.wins++
    } else player2.wins++;
  };
  resetGame() {
    this.playDeck.shuffle;
    this.dealDeck;
    //call an update to main
  };
};
//tracking cards

// USE CLASS TO CHANGE DATA
