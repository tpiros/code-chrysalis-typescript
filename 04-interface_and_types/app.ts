/* TYPES */
// Union types vs Intersection
// https://ivov.dev/notes/typescript-and-set-theory

// let val: number | string;

// give it a name too! ("type alias")
// type NoS = number | string;
// let val2: NoS;

// type Card = {
//   value: number;
//   suit: string;
// };

// const card: Card = {
//   value: 1,
//   suit: 'H',
// };

// const cards: Card[] = [
//   { value: 1, suit: 'H' },
//   { value: 2, suit: 'H' },
// ];

// literal type
// function contact(type: "email" | "phone") {

// }

// contact("email");

// Type Assertion
// <canvas id="my_canvas">

// // const drawCanvas = document.getElementById('my_canvas'); // HTMLElement
// const drawCanvas = document.getElementById('my_canvas') as HTMLCanvasElement; // HTMLCanvasElement
// // const drawCanvas = <HTMLCanvasElement>document.getElementById('my_canvas'); // HTMLCanvasElement
// drawCanvas.

/* INTERFACES */
// interface Login {
//   isAdmin: boolean;
//   login: string;
// }

// const a: Login = {

// }

// interface Car {
//   make: string;
//   model: string;
// }

// interface Truck {
//   make: string;
//   wheels: number;
// }

/* Legit question: what's the difference between Type and Interface? They are very similar, but ... types can't be changed once the yare created */

// let vehicle: Car | Truck =
//   Math.random() > 0.5
//     ? {
//         make: 'Volvo',
//         model: 'XC40',
//       }
//     : {
//         make: 'Volvo',
//         wheels: 18,
//       };

// vehicle.

// intersection types
// let vehicle: Car & Truck = {
//   make: 'Volvo',
//   model: 'XC40',
//   // wheels: 4,
// };

// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

// type Card = 'club' | 'heart';

// function playCard(card: Card) {
//   switch (card) {
//     case 'club': {
//       return '♣';
//     }
//     case 'heart': {
//       return '♥';
//     }
//     default: {
//       const shouldNeverHappen: never = card;
//       return shouldNeverHappen;
//     }
//   }
// }

// interface Person {
//   myname: string;
// }

// interface Superhero extends Person {
//   power: string;
//   attack(value: number): void;
// }

// let batman: Superhero = {
//   //yname: 'Bruce',
//   power: 'rich',
//   attack(value: 10) {
//     console.log(`Batman attacks for ${value}`);
//   },
// };

// interface AddressDictionary {
//   [property: string]: {
//     houseNumber: number;
//     street: string;
//   };
// }

// interface AddressDictionary {
//   home: {
//     houseNumber: number;
//     street: string;
//   },
//   work: {
//     houseNumber: number;
//     street: string;
//   };
// }

// const a: AddressDictionary = {
//   home: {
//     houseNumber: 1,
//     street: 'Main St',
//   },
//   work: {
//     houseNumber: 2,
//     street: 'Office St',
//   },
// };

// a.
// a.home;
// a.work;

// interface Person {
//   readonly name: string;
// }

// const p: Person = {
//   name: 'John',
// };

// p.name = 'J';

type Person = {
  name: string;
};

type Superhero = {
  power: string;
};

// type PersonOrSuperhero = Person | Superhero;

// const a1: PersonOrSuperhero = {
//   name: 'Batman',
// };

// const a2: PersonOrSuperhero = {
//   power: 'rich',
// };

// const a3: PersonOrSuperhero = {
//   name: 'Batman',
//   power: 'rich',
// };

// type PersonAndSuperhero = Person & Superhero;

// const b1: PersonAndSuperhero = {
//   name: 'Batman',
// };

// const b2: PersonAndSuperhero = {
//   power: 'rich',
// };

// const b3: PersonAndSuperhero = {
//   name: 'Batman',
//   power: 'rich',
// };

// any, unknown, never
// any -> disables type checking
// unknown -> allows for type checking, set of all possible values

// let data: unknown = 1;
// if (typeof data === 'number') {
//   data++;
// }
// if (typeof data === 'string') {
//   data.toUpperCase();
// }

// never -> empty set of possible values

// type Wine = 'white' | 'red' | 'rose';

// function order(wine: Wine) {
//   switch (wine) {
//     case 'white':
//       return '🍸';
//     case 'red':
//       return '🍷';
//     default:
//       const weshouldnotseethisever = wine;
//       throw 'no such wine type';
//   }
// }

// console.log(order('rose'));

// undefined -> returned by the JS runtime
// null -> uninitialised vs unavailable -> explicitly represent an absence of a value

let x;
