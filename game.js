// card images (Line 7) input type="file" in HTML, appendChild?

class Game {
  constructor() {
    this.playDeck = [{order: '1', img: "blue-01.png"}, {order: '2', img: "blue-02.png"}, {order: '3', img: "blue-03.png"}, {order: '4', img: "blue-04.png"}, {order: '5', img: "blue-05.png"}, {order: '6', img: "blue-06.png"}, {order: '7', img: "blue-07.png"}, {order: '8', img: "blue-08.png"}, {order: '9', img: "blue-09.png"}, {order: '10', img: "blue-010.png"}, {order: 'J', img: "blue-jack.png"}, {order: 'Q', img: "blue-queen.png"}, {order: 'K', img: "blue-king.png"},
                    {order: '1', img: "gold-01.png"}, {order: '2', img: "gold-02.png"}, {order: '3', img: "gold-03.png"}, {order: '4', img: "gold-04.png"}, {order: '5', img: "gold-05.png"}, {order: '6', img: "gold-06.png"}, {order: '7', img: "gold-07.png"}, {order: '8', img: "gold-08.png"}, {order: '9', img: "gold-09.png"}, {order: '10', img: "gold-010.png"}, {order: 'J', img: "gold-jack.png"}, {order: 'Q', img: "gold-queen.png"}, {order: 'K', img: "gold-king.png"},
                    {order: '1', img: "green-01.png"}, {order: '2', img: "green-02.png"}, {order: '3', img: "green-03.png"}, {order: '4', img: "green-04.png"}, {order: '5', img: "green-05.png"}, {order: '6', img: "green-06.png"}, {order: '7', img: "green-07.png"}, {order: '8', img: "green-08.png"}, {order: '9', img: "green-09.png"}, {order: '10', img: "green-010.png"}, {order: 'J', img: "green-jack.png"}, {order: 'Q', img: "green-queen.png"}, {order: 'K', img: "green-king.png"},
                    {order: '1', img: "red-01.png"}, {order: '2', img: "red-02.png"}, {order: '3', img: "red-03.png"}, {order: '4', img: "red-04.png"}, {order: '5', img: "red-05.png"}, {order: '6', img: "red-06.png"}, {order: '7', img: "red-07.png"}, {order: '8', img: "red-08.png"}, {order: '9', img: "red-09.png"}, {order: '10', img: "red-010.png"}, {order: 'J', img: "red-jack.png"}, {order: 'Q', img: "red-queen.png"}, {order: 'K', img: "red-king.png"}];
    this.stack = [];
    this.playerIsOut = false;
  }
  shuffle() {
    var cards = this.playDeck;
    for (var i = cards.length - 1; i > 0; i--) {
      var otherIndex = Math.floor(Math.random() * i);
      var wav = cards[i];
      cards[i] = cards[otherIndex];
      cards[otherIndex] = wav;
    };
  };

  dealDeck() {
    this.shuffle();
    var hand1 = this.playDeck.slice(0, 26);
    var hand2 = this.playDeck.slice(26);
    this.player1 = new Player(1, 0, hand1);
    this.player2 = new Player(2, 0, hand2);
    this.currentPlayer = this.player1;
  };

  updateStack() {
    this.stack.unshift(this.card);
  };

  player1Turn() {
    if (this.currentPlayer === this.player1) {
      return true;
    } else return false;
  };

  dealCard() {
    if (!this.currentPlayer.hand) {
      this.playerIsOut = true;
      console.log(`Player ${this.currentPlayer.id} is out of cards.`)
      switchPlayers();
      console.log(`Go ahead and deal Player ${this.currentPlayer.id}`)
    };
    this.card = this.currentPlayer.hand[0];
    this.currentPlayer.playCard();
    this.updateStack();
    console.log(`Player: ${this.currentPlayer.id} Card: ${this.card.order} Cards Left: ${this.currentPlayer.hand.length}`)
    this.switchPlayers();
  };

  slapStack(event) {
    if (event.key === 'f') {
      this.currentPlayer = this.player1;
    } else this.currentPlayer = this.player2;
    //if (this.playerIsOut === false) {  // If noone's out of cards
      if (this.checkSlap()) {
        this.addStack();
      } else this.slapError();
      console.log(`Player: ${this.currentPlayer.id} Cards: ${this.currentPlayer.hand.length}`);
      this.switchPlayers();
      this.stack = [];
      console.log(`Player: ${this.currentPlayer.id} Cards: ${this.currentPlayer.hand.length}`);
    //} else applyFinishRuleSlap();
  };

  addStack() {
    for (var i = 0; i < this.stack.length; i++) {
      this.currentPlayer.hand.push(this.stack[i]);
    };
    this.currentPlayer.shuffleHand();
    console.log(`Snagged by Player ${this.currentPlayer.id}`);
  };

  checkSlap() {
    var topCard = this.stack[0].order;
    if (topCard === 'J') {
      console.log(`Player ${this.currentPlayer.id} takes the stack with a Jack!`)
    } else if (topCard === this.stack[1].order) {
      console.log(`Player ${this.currentPlayer.id} snags a Double!`)
    } else if (topCard === this.stack[2].order) {
      console.log(`Oooh Player ${this.currentPlayer.id} that's a Sandwich!!`)
    } else return false;
    return true;
  };

  slapError() {
    var reward = this.currentPlayer[0];
    this.currentPlayer.hand.shift();
    this.switchPlayers();
    this.currentPlayer.hand.push(reward);
    this.switchPlayers();  //back to fouled player
    console.log(`Totally Your Bad Player ${this.currentPlayer.id}!`)
  };

  updateWinsCount() {
    if (this.player.id === 0) {
      this.player1.wins++;
    } else this.player2.wins++;
  };

  resetGame() {
    this.playDeck.shuffle;
    this.dealDeck;
    //call an update to main *From main?
  };

  switchPlayers() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else this.currentPlayer = this.player1; //toggle turn
  };
};


//tracking cards

// USE CLASS TO CHANGE DATA
