class Player {
  constructor(id, wins, hand) {
    this.id = id; 
    this.wins = wins;
    this.hand = hand;
  };

  playCard() {
    this.hand.shift();
  };

  saveWinsToStorage() {

      //ref this.id to update this.wins on local storage
  };

  shuffleHand() {
    var cards = this.hand;
    for (var i = cards.length - 1; i > 0; i--) {
      var otherIndex = Math.floor(Math.random() * i);
      var wav = cards[i];
      cards[i] = cards[otherIndex];
      cards[otherIndex] = wav;
    };
  };
};
