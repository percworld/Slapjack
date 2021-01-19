# Slapjack
Card Game - final assessment and solo project at Turing/1-module

### Slapjack - a traditional game that given the current climate we may be safer playing with a machine.
### This version of slapjack is utilizing basic javaScript functionality, CSS stylings and HTML script to simulate an old favorite.

### This card game is meant for two players on either one keyboard or a utilizing separate paired keyboards.

### Keyboard operators are keys 'q' and 'f' for player 1, 'p' and 'j' for player 2.
### Each player is dealt half of a deck of shuffled cards and their card count is located under their color coded deck.

## Rules of the game may vary from house to house so here is a guide to get you started:
![Screen Shot 2021-01-19 at 10 24 42 AM](https://user-images.githubusercontent.com/71858456/105070564-b837bf00-5a40-11eb-97e1-b66410d867ef.png)

### Rules:
### 1. Players take turns dealing a card. Player 1's deal key is the letter 'q' and player 2's is the letter 'p'.
### 2. If a player correctly slaps the central pile they may take it and add it to their hand. Player 1's slap is the letter' f' and player 2's slap is the letter  'j' on your keyboard.
### 3. A correct slap is either a Jack card, two cards of the same value in a row, or two cards of the same value sandwiched by another card.
### 4. Once a player runs out of cards they may redeem themselves and get back in the game but only with a Jack slap!
### 5. Both players must abide by this end-of-game extra rule.

### line 128 0f game.js may be commented out to toggle off an additional feature that now determines that if a player makes a good slap, there is an extra punishment that the other player must deal first.  To deal a card is to lose a card (undesired).

### Number of wins persist in local storage on users's machine. 

# Enjoy playing Slapjack!

#### A new to me technology that was used is the WAVE auditing tool for evaluating code for individuals with visual disabilities. It available as a chrome extension and I will highly recommend it to others for accessibility: [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

#### This project was a crucial turning point for me in understanding the intricacies of class structure and how information is transferred, where the source of truth should be assigned, and how to manage the dom only within the main file, while keeping a data model living inside each class.

#### The game class has access to the player but the player class only knows it's own methods. The main.js file passes in user input and manipulates the DOM.  This was an excellent final project to begin to practice the fundamentals of how to implement this kind of design.

#### My biggest win in this project was that I thought it was impossible to have only one variable declaration in main.js besides query selectors.  Not only was it possible but when it came time to create that variable, game, it was entirely logical that it was the only variable needed!



