class Player {
  constructor(id, wins, hand) {
    this.id = id; // find a way to increment i
    this.wins = wins;
    this.hand = hand; //array assigned during (Game).shuffle
    if (id = 0) {  //
      this.myTurn  = true;
    } else this.Myturn = false;                          //called from main
  };
  playCard() {
    //cards holding !


  };
  saveWinsToStorage() {

  };
};
// whose turn is it anyway?
// what in a class determines where things move to?
// when to play card (is really something like updateHand)?
//     hand updated @ (Game).updateStack? {Helper function just for player update}
