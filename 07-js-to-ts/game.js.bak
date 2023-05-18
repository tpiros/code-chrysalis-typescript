// Cards: from 1-13, where 1: Ace, 11: Jack, 12: Queen, 13: King
// Suits: hearts, dimonds, clubs, spades -> h, d, c, s
// Therefore 1S is the Ace of Spades, 11H is the Jack of Hearts, 7C is the Seven of Clubs --> remember: http://youtu.be/1iwC2QljLn4

class Game {
  table = {
    cards: [],
  };

  deck = [];

  constructor(deck) {
    this.deck = this.#shuffledeck(this.#createdeck());
  }

  #createdeck() {
    const suits = ['H', 'C', 'S', 'D'];
    const deck = [];
    const n = 52;
    const index = n / suits.length;
    let deckCount = 0;
    for (let i = 0; i <= 3; i++)
      for (let j = 1; j <= index; j++) {
        deck[deckCount++] = j + suits[i];
      }
    const finaldeck = deck.concat(deck);
    return finaldeck;
  }

  #shuffledeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  drawCard(amount, hand = [], initial) {
    let cards = [];
    cards = this.deck.slice(0, amount);
    this.deck.splice(0, amount);
    if (!initial) {
      hand.push(...cards);
    }
    return cards;
  }

  playFirstCardToTable() {
    const card = this.deck.splice(0, 1);
    this.table.cards.push(...card);
  }

  lastCardOnTable() {
    return this.table.cards[this.table.cards.length - 1];
  }

  isCardPlayable(card, cards, lastCardOnTable) {
    if (cards.includes(card)) {
      const cardNumber = parseInt(card);
      const cardSuite = card[card.length - 1];
      const lastCardNumber = parseInt(lastCardOnTable);
      const lastCardSuite = lastCardOnTable[lastCardOnTable.length - 1];
      if (cardNumber === lastCardNumber || cardSuite === lastCardSuite) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  playCard(index, hand, table) {
    const playedCard = hand.splice(index, 1);
    table.push(...playedCard);
  }

  cardsOnTable(card) {
    this.table.cards.concat(card);
  }
}

module.exports = Game;
