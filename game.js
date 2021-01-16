// game should include card images? (Line 7)
// or input type="file" in HTML, appendChild

//who are players?
// whose turn is it anyway?
class Game {
  constructor() {
    this.player1 = new Player(0, wins, hand) //array must be empty, only half of cards and shuffle method after?
    this.player2 = new Player(1, wins, hand);
    this.playDeck = [{order: '1', img: "blue-01.png"}, {order: '2', img: "blue-02.png"}, {order: '3', img: "blue-03.png"}, {order: '4', img: "blue-04.png"}, {order: '5', img: "blue-05.png"}, {order: '6', img: "blue-06.png"}, {order: '7', img: "blue-07.png"}, {order: '8', img: "blue-08.png"}, {order: '9', img: "blue-09.png"}, {order: '10', img: "blue-010.png"}, {order: 'J', img: "blue-jack.png"}, {order: 'Q', img: "blue-queen.png"}, {order: 'K', img: "blue-king.png"},
                    {order: '1', img: "gold-01.png"}, {order: '2', img: "gold-02.png"}, {order: '3', img: "gold-03.png"}, {order: '4', img: "gold-04.png"}, {order: '5', img: "gold-05.png"}, {order: '6', img: "gold-06.png"}, {order: '7', img: "gold-07.png"}, {order: '8', img: "gold-08.png"}, {order: '9', img: "gold-09.png"}, {order: '10', img: "gold-010.png"}, {order: 'J', img: "gold-jack.png"}, {order: 'Q', img: "gold-queen.png"}, {order: 'K', img: "gold-king.png"},
                    {order: '1', img: "green-01.png"}, {order: '2', img: "green-02.png"}, {order: '3', img: "green-03.png"}, {order: '4', img: "green-04.png"}, {order: '5', img: "green-05.png"}, {order: '6', img: "green-06.png"}, {order: '7', img: "green-07.png"}, {order: '8', img: "green-08.png"}, {order: '9', img: "green-09.png"}, {order: '10', img: "green-010.png"}, {order: 'J', img: "green-jack.png"}, {order: 'Q', img: "green-queen.png"}, {order: 'K', img: "green-king.png"},
                    {order: '1', img: "red-01.png"}, {order: '2', img: "red-02.png"}, {order: '3', img: "red-03.png"}, {order: '4', img: "red-04.png"}, {order: '5', img: "red-05.png"}, {order: '6', img: "red-06.png"}, {order: '7', img: "red-07.png"}, {order: '8', img: "red-08.png"}, {order: '9', img: "red-09.png"}, {order: '10', img: "red-010.png"}, {order: 'J', img: "red-jack.png"}, {order: 'Q', img: "red-queen.png"}, {order: 'K', img: "red-king.png"}];
    this.stack = [];
    this.currentPlayer = this.player1;

  }
  shuffle() {
    for (var i = cards.length - 1; i > 0; i--) {
      var otherIndex = Math.floor(Math.randon() * i);
      var wav = cards[i];           // three lines switch cards
      cards[i] = cards[otherIndex];
      cards[otherIndex] = wav;
    };
  };
  dealDeck() {
    this.playdeck.shuffle;  //calling method internally
    player1.hand = this.playDeck.slice(0, 25);
    player2.hand = this.playDeck.slice(26);
    cosole.log(player1.hand);
  };
    updateStack() {
      this.stack.unshift(currentCard);
      //when card is played, unshift array to keep all showing cards at index 0?
      //then deletion player's hand
  };
  player1Turn() { //returns boo determination
    if (currentPlayer === this.player1) {
      return true;
    } ekse return false;
    // if slapped, opposite player
    // if (this.slapBoo === true) {
    //   player1.myTurn = true;
    // }
    ////Udate current player, called after each deal
  };
  dealCard() {
    var playedCard = player1.hand[0]
    //player1.hand.slice(0,1);  //toggle turn
  };
  slapStack() {
    this.slapped = !this.slapped //exchange a boolean?
     //update slap boolean for turn determining  //checkwin
     if (this.checkSlap) {
       currentplayer.hand.push(this.stack);  //ADD TO BOTTOM DECK
       this.shuffle;
     };
  };
  checkSlap() { //return true
    var topCard = this.stack[0].order;
    if (topCard === 'J' || topCard === this.stack[1].order || topCard === this.stack[2].order) {
      return true;
    }
  };
  updateWinsCount(player) {
    if (player.id === 0) {
      player1.wins++
    } else player2.wins++;
  };
  resetGame() {
    this.playDeck.shuffle;
    this.dealDeck;
    //call an update to main *From main?
  };
};
//tracking cards

// USE CLASS TO CHANGE DATA
