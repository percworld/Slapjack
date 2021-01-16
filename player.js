class Player {
  constructor(id, wins, hand) {
    this.id = id; // find a way to increment i
    this.wins = wins;
    this.hand = hand;

  };
  playCard() {
    // Game.dealCard in JS?
    this.hand.shift();
    //interface with deck
    //update hand but not stack


  };
  saveWinsToStorage() {
      //ref id to update
  };
};

// what in a class determines where things move to?
// when to play card (is really something like updateHand)?
//     hand updated @ (Game).updateStack? {Helper function just for player update}
