// /*
// // deck has 52 cards
// // deck has 4 types of suit
// // dealing 26 card each to player 1 and 2
// // has to randomly deal

// creating deck

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
    // console.log(card);
    deck.push(card);
  }
}

//------------------ shuffle deck------------------//

let shuffleDeck = function (deck) {
  let newPos, temp;

  for (let i = deck.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[newPos];
    deck[newPos] = temp;
  }
  return deck;
};

let newCard = shuffleDeck(deck);
// console.log(newCard);

//------------- dividing cars to payers--------------//

let player1 = { cards: [] };
let player2 = { cards: [] };

player1.cards = deck.slice(0, 26);
player2.cards = deck.slice(26, 52);

console.log("player1 cards: " + player1.cards);
console.log("player2 cards: " + player2.cards);

//-------------- cardgame ----------------------------//
// players both match the first cards and check value to see who wins. winner takes the card and put them into array last.  other player loose the card.
function battle(player1, player2) {
  let playingCard = [];
  // for (let i = player1.cards.length - 1; i > 0; i--){};
  // for (let k = player2.cards.length - 1; k > 0; k--){};

  let initialNumberOfGames = player1.cards.length;

  for (let i = 0; i < initialNumberOfGames; i++) {
    cardGame(player1.cards[i], player2.cards[i], player1, player2, i);
  }
}
function war(i) {

  console.log("tie round war has been declared");
  console.log("player1 has " + player1.cards.length);
  console.log("player2 has " + player2.cards.length);


  console.log(i);
  if (player1.cards.length > i && player2.cards.length > i) {
    // console.log("player2 = " + player2.cards[i].value);
    // console.log("player1 = " + player1.cards[i].value);
    if (player2.cards[i].value > player1.cards[i].value) {

      // console.log(player2.cards[i].value);
      let tieLose = player1.cards.splice(0, i + 1);
      // console.log(tieLose);
      player2.cards = player2.cards.concat(tieLose);
      console.log("player2 win");
      // console.log(player1.cards);
      // console.log(player2.cards);
    }

    else if (player1.cards[i].value > player2.cards[i].value) {
      let tieLose1 = player2.cards.splice(0, i + 1);
      // console.log(tieLose1);
      player1.cards = player1.cards.concat(tieLose1);
      console.log("player1 win");
      // console.log(player1.cards);
      // console.log(player2.cards);
      return
    }
    else {

      if (player1.cards.length > i + 4 || player2.cards.length > i + 4) {
        console.log("!!!!!!!!!!!!!!WARAGAIN!!!!!!!!!!!!!!!!!!!!!!")
        war(i + 4);
      }
      else {
        if (player1.cards.length < i) {
          console.log("player2 win");
          return;
        }
        else {
          console.log("player1 win");
          return;
        }
        return;

      }



    }
  }
  else if (player1.cards.length < i || player2.cards.length < i
  ) {
    if (player1.cards.length < i) {
      console.log("player2 is winner");
      let tieLose2 = player1.cards.splice(0, player1.cards.length);
      player2.cards = player2.cards.concat(tieLose2);

      return;
    }
    else {
      console.log("player1 is winnner");
      let tieLose3 = player2.cards.splice(0, player2.cards.length);
      player1.cards = player1.cards.concat(tieLose3);
      return;
    }
    return;
  }
  return;
}
function battle() {


  let playingCard = [];
  let counter = 0;


  while (player1.cards.length > 0 && player2.cards.length > 0) {
    counter++;
    if (counter === 10000) {
      break;
    }


    if (player1.cards[0].value > player2.cards[0].value) {
      let loseCard = player2.cards.shift();
      let loseCards = player1.cards.shift();
      //  console.log(player2.cards[0]);
      // console.log(loseCard);
      player1.cards.push(loseCard);
      player1.cards.push(loseCards);
      console.log("player1 played with " + loseCards.rank + " player2 played with " + loseCard.rank);
      console.log("player1 win round" + counter + " player1 has " + player1.cards.length + "cards left.  player2 has " + player2.cards.length);
      // console.log(player1.cards);
      // console.log(player2.cards);

    }

    else if (player2.cards[0].value > player1.cards[0].value) {
      // console.log(loseCard1);
      if (player2.cards.length == 0 || player1.cards.length == 0) {
        if (player2.cards.length == 0) {
          console.log("player1 win")
          return
        }
        else {
          console.log("player2 win")
          return
        }
      }
      else {
        if (player2.cards.length == 0 || player1.cards.length == 0) {
          if (player2.cards.length == 0) {
            console.log("player1 win")
            return
          }
          else {
            console.log("player2 win")
            return
          }
        }
        else {
          let loseCard1 = player1.cards.shift();
          let loseCard2 = player2.cards.shift();
          player2.cards.push(loseCard2);
          player2.cards.push(loseCard1);
          console.log("player1 played with " + loseCard1.rank + " player2 played with " + loseCard2.rank);
          console.log("player2 win round" + counter + " player2 has " + player2.cards.length + "cards left.  player1 has " + player1.cards.length);

          // console.log(player1.cards);
          // console.log(player2.cards);
        }
      }
    }



    else if (player1.cards[0].value === player2.cards[0].value) {
      war(4);

    }
  }
  if (player2.cards.length == 0) {

    console.log("player1 is winner!!")
    return;
  };
  if (player1.cards.length == 0) {

    console.log("player2 is winner!!")
    return;
  };


  console.log(counter);

}


battle();
