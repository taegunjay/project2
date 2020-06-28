// /*
// // deck has 52 cards
// // deck has 4 types of suit
// // dealing 26 card each to player 1 and 2
// // has to randomly deal

// creating deck

const deck = () => {

    let numbers = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
      ];
      let suits = ["Spade", "Diamond", "Heart", "Club"];
      let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      
      let deck = [];
      
      for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          let card = {
            suit: suits[i],
            rank: numbers[j],
            value: value[j],
          };
          deck.push(card);
        }
      }
      log('Create Deck');
      return deck;
};
  
  //------------------ shuffle deck------------------//

  let shuffleDeck = (deck) => {
    let newPos, temp;
  
    for (let i = deck.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[newPos];
      deck[newPos] = temp;
    }
    log('Shuffling');
    return deck;
  };

//-------------- cardgame ----------------------------//
// players both match the first cards and check value to see who wins. winner takes the card and put them into array last.  other player loose the card.

function battle(player1, player2) {
    let playingCard = [];
    // for (let i = player1.cards.length - 1; i > 0; i--){};
    // for (let k = player2.cards.length - 1; k > 0; k--){};

    let initialNumberOfGames = player1.cards.length;

    for(let i = 0; i < initialNumberOfGames; i++) {
        cardGame(player1.cards[i], player2.cards[i], player1, player2, i);
    }
}

function cardGame(card_a, card_b, player1, player2, gameNo) {
    console.log('-'.repeat(50));
    console.log('Game #' + (gameNo + 1));
    if (card_a.value > card_b.value) {
        let loseCard = player2.cards.shift();
        player1.cards.push(loseCard);
        console.log('Player 1 Card: ' + card_a.rank + " " + card_a.suit);
        console.log('Player 2 Card: ' + card_b.rank + " " + card_b.suit);
        console.log('Result: Player 1 Wins');
    }
    else if (card_b.value > card_a.value) {
        let loseCard1 = player1.cards.shift();
        player2.cards.push(loseCard1);
        console.log('Player 1 Card: ' + card_a.rank + " " + card_a.suit);
        console.log('Player 2 Card: ' + card_b.rank + " " + card_b.suit);
        console.log('Result: Player 2 Wins');
    }
    else if (card_a.value === card_b.value) { 
        console.log('Player 1 Card: ' + card_a.rank + " " + card_a.suit);
        console.log('Player 2 Card: ' + card_b.rank + " " + card_b.suit);
        console.log('Result: Tie');
        // cardGame(player1.cards[gameNo], player2.cards[gameNo]);
    }
}

function log(message) {
    console.log("=".repeat(50));
    console.log(message);
    console.log("-".repeat(50));
}

function splitCardsToPlayers(deck) {
    let player1 = { cards: [] };
    let player2 = { cards: [] };
    
    player1.cards = deck.slice(0, 26);
    player2.cards = deck.slice(26, 52);

    return {
        player1: player1,
        player2: player2
    };
}

function gameWinLog(player, card) {
}


let cards = deck();
let shuffledCards = shuffleDeck(cards);
let playerCards = splitCardsToPlayers(shuffledCards);
console.log(playerCards);

battle(playerCards.player1, playerCards.player2);
