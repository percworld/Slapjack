class Game {
  constructor() {
    this.playDeck = [{order: '1', img: "blue-01.png"}, {order: '2', img: "blue-02.png"}, {order: '3', img: "blue-03.png"}, {order: '4', img: "blue-04.png"}, {order: '5', img: "blue-05.png"}, {order: '6', img: "blue-06.png"}, {order: '7', img: "blue-07.png"}, {order: '8', img: "blue-08.png"}, {order: '9', img: "blue-09.png"}, {order: '10', img: "blue-10.png"}, {order: 'J', img: "blue-jack.png"}, {order: 'Q', img: "blue-queen.png"}, {order: 'K', img: "blue-king.png"},
                    {order: '1', img: "gold-01.png"}, {order: '2', img: "gold-02.png"}, {order: '3', img: "gold-03.png"}, {order: '4', img: "gold-04.png"}, {order: '5', img: "gold-05.png"}, {order: '6', img: "gold-06.png"}, {order: '7', img: "gold-07.png"}, {order: '8', img: "gold-08.png"}, {order: '9', img: "gold-09.png"}, {order: '10', img: "gold-10.png"}, {order: 'J', img: "gold-jack.png"}, {order: 'Q', img: "gold-queen.png"}, {order: 'K', img: "gold-king.png"},
                    {order: '1', img: "green-01.png"}, {order: '2', img: "green-02.png"}, {order: '3', img: "green-03.png"}, {order: '4', img: "green-04.png"}, {order: '5', img: "green-05.png"}, {order: '6', img: "green-06.png"}, {order: '7', img: "green-07.png"}, {order: '8', img: "green-08.png"}, {order: '9', img: "green-09.png"}, {order: '10', img: "green-10.png"}, {order: 'J', img: "green-jack.png"}, {order: 'Q', img: "green-queen.png"}, {order: 'K', img: "green-king.png"},
                    {order: '1', img: "red-01.png"}, {order: '2', img: "red-02.png"}, {order: '3', img: "red-03.png"}, {order: '4', img: "red-04.png"}, {order: '5', img: "red-05.png"}, {order: '6', img: "red-06.png"}, {order: '7', img: "red-07.png"}, {order: '8', img: "red-08.png"}, {order: '9', img: "red-09.png"}, {order: '10', img: "red-10.png"}, {order: 'J', img: "red-jack.png"}, {order: 'Q', img: "red-queen.png"}, {order: 'K', img: "red-king.png"}];
    this.playerIsOut = false;
  };
  
  shuffle() {
    var cards = this.playDeck;
    for (var i = cards.length - 1; i > 0; i--) {
      var otherIndex = Math.floor(Math.random() * i);
      var wav = cards[i];
      cards[i] = cards[otherIndex];
      cards[otherIndex] = wav;
    };
  };

  constructPlayers(hand1, hand2) {
    this.player1 = new Player(1, 0, hand1);
    this.player2 = new Player(2, 0, hand2);
  };

  dealDeck() {
    this.shuffle();
    var hand1 = this.playDeck.slice(0, 26);
    var hand2 = this.playDeck.slice(26);
    if (!this.player1) {
      this.constructPlayers(hand1, hand2);
    } else {
      this.player1.hand = hand1;
      this.player2.hand = hand2;
    };
    this.stack = [];
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
    if (this.checkHand()) {
      this.card = this.currentPlayer.hand[0];
      this.currentPlayer.playCard();
      this.updateStack();
      this.text = " ";
      console.log(`Player: ${this.currentPlayer.id} Card: ${this.card.order} Cards Left: ${this.currentPlayer.hand.length}`)
      this.switchPlayers();
    };
    if (this.playerIsOut) {
      this.swapAndRefresh();
    };
  };

  swapAndRefresh() {  // last round error handling
    this.switchPlayers();
    if (!this.checkHand()) {
      this.switchPlayers();
      if (!this.checkHand()) {
        this.retrieveStack();
      };
    };
  };

  checkHand() {
    if (!this.currentPlayer.hand[0]) {
      this.playerIsOut = true;
      //console.log(`Player ${this.currentPlayer.id} is out of cards.`)
      return false;
    } else return true;
  };

  slapStack(event) {
    if (event.key === 'f') {
      this.currentPlayer = this.player1;
    };
    if (event.key === 'j') {
      this.currentPlayer = this.player2;
    };
    if (!this.playerIsOut) {  // If noone's out of cards
      this.applyPlayRuleSlap();
    } else this.applyFinishRuleSlap();
  };


  checkSlap() {
    if (this.stack[0]) {  // if a card exists in the stack
      var topCard = this.stack[0].order;
      if (this.isJackSlap(topCard) || this.isDouble(topCard) || this.isSandwich(topCard)) {
        return true;
      };
    };
    return false;
  };

  isJackSlap(topCard) {
    if (topCard === 'J') {
      this.text = `SLAPJACK! Player ${this.currentPlayer.id} takes the pile!`;
      console.log(`Player ${this.currentPlayer.id} takes the stack with a Jack!`);
      return true;
    } else return false;
  };

  isDouble(topCard) {
    if (this.stack[1]) {
      if (topCard === this.stack[1].order) {
        this.text = `DOUBLE! Player ${this.currentPlayer.id} takes the pile!`;
        console.log(`Player ${this.currentPlayer.id} snags a Double!`)
        return true;
      };
    };
    return false;
  };

  isSandwich(topCard) {
    if (this.stack[2]) {
      if (topCard === this.stack[2].order) {
        this.text = `SANDWICH! Player ${this.currentPlayer.id} takes the pile!`;
        console.log(`Oooh Player ${this.currentPlayer.id} that's a Sandwich!!`)
        return true;
      };
    };
    return false;
  };

  applyPlayRuleSlap() {
    if (this.checkSlap()) {
      this.retrieveStack();
    } else {
      this.slapError();
      this.switchPlayers();
    };
    console.log(`Player ${this.currentPlayer.id} Cards: ${this.currentPlayer.hand.length}`);
    this.switchPlayers();
    console.log(`Player ${this.currentPlayer.id} Cards: ${this.currentPlayer.hand.length}`);
  };

  checkFinishRuleSlap() {
    if (this.stack[0]) {   // if stack contains a card
      var topCard = this.stack[0].order;
      if (topCard === 'J') {
        if (!this.checkHand()) { //current is out
          this.playerIsOut = false; //he's back in
          this.text = `Player ${this.currentPlayer.id} is back in the game! Player ${this.currentPlayer.id} takes the pile!`;
          console.log(`Player ${this.currentPlayer.id} takes the stack with a Jack! Back in the game!`)
        };
      } else return false;
    } else return false;
    return true;
  };

  applyFinishRuleSlap() {
      if (this.checkFinishRuleSlap()) {
        this.retrieveStack();
        if (this.playerIsOut) {
          this.updateWinsCount();
          return;
        };
      } else if (!this.checkHand()) { //player has no cards on Bad Slap
          this.switchPlayers();
          this.updateWinsCount();
        } else {this.slapError();}
      console.log(`Player: ${this.currentPlayer.id} Cards: ${this.currentPlayer.hand.length}`);
      this.switchPlayers();
      console.log(`Player: ${this.currentPlayer.id} Cards: ${this.currentPlayer.hand.length}`);
    };

  retrieveStack() {
    for (var i = 0; i < this.stack.length; i++) {
      this.currentPlayer.hand.push(this.stack[i]);
    };
    this.stack = [];
    this.currentPlayer.shuffleHand();
    console.log(`Player ${this.currentPlayer.id} takes the Pile!`);
  };

  slapError() {
    var reward = this.currentPlayer.hand[0];
    if (this.stack[0]) {
      this.currentPlayer.hand.shift();
      this.text = `BAD SLAP! Player ${this.currentPlayer.id} forfeits a card to Player `;
      console.log(`Totally Your Bad Player ${this.currentPlayer.id}! Give your top card.`)
      this.switchPlayers();  //just to add card
      this.text += `${this.currentPlayer.id}!`;
      this.currentPlayer.hand.push(reward);
      this.currentPlayer.shuffleHand();
      this.switchPlayers();
    };
  };

  updateWinsCount() {
    this.text = `Player ${this.currentPlayer.id} Wins!`;
    this.currentPlayer.wins++;
    this.currentPlayer.saveWinsToStorage();
    console.log(`Player ${this.currentPlayer.id} with ${this.currentPlayer.wins} Wins!`)
    this.resetGame();
  };

  resetGame() {
    this.playerIsOut = false;
    this.dealDeck();
  };

  switchPlayers() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else this.currentPlayer = this.player1;
  };
};
