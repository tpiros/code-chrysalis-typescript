// parameter typing and return type
// function greet(name: string) {
//   console.log(name);

//   return {
//     name: 'hi',
//     age: 11
//   };
// }

// void requires no return & optional params
// function hi(name: string, lang?: string): void {
//   console.log();
// }

// hi('john')

// default parameters

// function hi(name: string, lang = 'en'): void {
//   console.log();
// }

// hi('john');

// [1,2,3].map((item, idx) => console.log(item, idx));

// function map(
//   arr: any[],
//   callback: (arg: any, index?: number) => void
// ) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }
// map('1', ())
// map([1, 2, 3], (items) => console.log(items));
// map([1, 2, 3], (items, idx) => console.log(items, idx));

// return type can be "complex"

// function calculate(
//   n: number,
//   m: number
// ): { added: number; multiplied: number, x: string } {
//   return {
//     added: n + m,
//     multiplied: n * m,
//     x: 'a'
//   };
// }

// arrow functions are the same

// const calculate = (
//   n: number,
//   m: number
// ): { added: number; multiplied: number } => ({
//   added: n + m,
//   multiplied: n + m,
// });

// calculate(2, 3);

// ------------------------ //
// function greet(who: Person): { message: string; confirmed: boolean } {
//   return {
//     message: `Hello ${who.name}`,
//     confirmed: true,
//   };
// }

// const greet = (who: Person): { message: string; confirmed: boolean } => ({
//   message: `Hello ${who.name}`,
//   confirmed: true,
// });

// function overloads
// let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

// function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number): { suit: string; card: number };
// function pickCard(x: any): any {
//   if (typeof x === 'object') {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   } else if (typeof x == 'number') {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [
//   { suit: 'diamonds', card: 2 },
//   { suit: 'spades', card: 10 },
//   { suit: 'hearts', card: 4 },
// ];

// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);

// generics in functions

// function firstElementWithValidType(arr: any[]) {
//   return arr[0];
// }

// console.log(firstElementWithValidType([1, 2]));

// function firstElementWithValidType<Type>(arr: Type[]): Type {
//   return arr[0];
// }

// console.log(firstElementWithValidType(['a', 'b']));
