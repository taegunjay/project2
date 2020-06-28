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
      console.log(card);
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
  console.log(newCard);
  
  //------------- dividing cars to payers--------------//

let player1 = { cards: [] };
let player2 = { cards: [] };

player1.cards = deck.slice(0, 26);
player2.cards = deck.slice(26, 52);

console.log(player1.cards);
console.log(player2.cards);

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

function battle() {
    
    let playingCard = [];
    while (player1.cards.length > 0 && player2.cards.length > 0){
    

    if (player1.cards[0].value > player2.cards[0].value) {
        let loseCard = player2.cards.shift();
        let loseCards = player1.cards.shift();
        //  console.log(player2.cards[0]);
        console.log(loseCard);
        player1.cards.push(loseCard);
        player1.cards.push(loseCards);

        console.log("player1 win");
        console.log(player1.cards);
        console.log(player2.cards);
      } 

      else if (player2.cards[0].value > player1.cards[0].value) {
        let loseCard1 = player1.cards.shift();
        let loseCard2 = player2.cards.shift();
        console.log(loseCard1);
        player2.cards.push(loseCard2);
        player2.cards.push(loseCard1);
        console.log("player2 win");
        console.log(player1.cards);
        console.log(player2.cards);
      }
      else if (player1.cards[0].value === player2.cards[0].value) { 
           let i = 0
            while ( player1.cards[i].value == player2.cards[i].value && player1.cards.length >= (i+ 4) && player2.cardsletngth >= 
            (i +4)){
                i += 4; 

        if ( player2.cards[i].value > player1.cards[i].value){
        let tieLose = player1.cards.splice(0,5);
        console.log(tieLose);
        player2.cards = player2.cards.concat(tieLose);
        console.log("player2 win");
        console.log(player1.cards);
        console.log(player2.cards);
        } 
    
        else if ( player1.cards[4].value > player2.cards[4].value){
            let tieLose1 = player2.cards.splice(0,5);
            console.log(tieLose1);
            player1.cards = player1.cards.concat(tieLose1);
            console.log()
            console.log("player1 win");
            console.log(player1.cards);
            console.log(player2.cards);
            }
        
        
      }
      

    }



}
}
battle()