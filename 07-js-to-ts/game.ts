// Cards: from 1-13, where 1: Ace, 11: Jack, 12: Queen, 13: King
// Suits: hearts, dimonds, clubs, spades -> h, d, c, s
// Therefore 1S is the Ace of Spades, 11H is the Jack of Hearts, 7C is the Seven of Clubs --> remember: http://youtu.be/1iwC2QljLn4

export interface Table {
  cards: Card[];
}

export type Card = string;

export class Game {
  deck: Card[];
  table: Table = {
    cards: [],
  };

  constructor() {
    // this.deck = this.shuffledeck(this.createdeck());
    this.deck = this.createdeck();
  }

  private createdeck(): Card[] {
    const suits = ['H', 'C', 'S', 'D'];
    const deck: Card[] = [];
    const n = 52;
    const index = n / suits.length;
    let deckCount = 0;
    for (let i = 0; i <= 3; i++)
      for (let j = 1; j <= index; j++) {
        deck[deckCount++] = String(j) + suits[i];
      }
    const finaldeck: Card[] = deck.concat(deck);
    return finaldeck;
  }

  private shuffledeck(deck: Card[]): Card[] {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  drawCard(amount: number, hand?: Card[], initial?: boolean): Card[] {
    let cards: Card[] = [];
    cards = this.deck.slice(0, amount);
    this.deck.splice(0, amount);
    if (!initial && hand) {
      hand.push(...cards);
    }
    return cards;
  }

  playFirstCardToTable(): void {
    const card = this.deck.splice(0, 1);
    this.table.cards.push(...card);
  }

  lastCardOnTable(): Card {
    return this.table.cards[this.table.cards.length - 1];
  }

  isCardPlayable(card: Card, cards: Card[], lastCardOnTable: Card): boolean {
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

  playCard(index: number, hand: Card[], table: Table): void {
    const playedCard = hand.splice(index, 1);
    table.cards.push(...playedCard);
  }

  cardsOnTable(card: Card): Card[] {
    return this.table.cards.concat(card);
  }
}
