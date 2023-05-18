interface IHuman {
  name: string;
  age: number;
}
// verbose
// class Person implements IHuman {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// access modifiers
// public
// protected
// private

// class Person implements IHuman {
//   constructor(public name: string = 'John Doe', public age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person implements IHuman {
//   public address: string = '1 Main St';
//   constructor(public name: string = 'John Doe', public age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person implements IHuman {
//   constructor(public name: string = 'John Doe', public age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// abstract class AbstractPerson implements IHuman {
//   constructor(public name: string, public age: number) {}
//   abstract greet(): void;
// }

// class MyPerson extends AbstractPerson {
//   constructor(public name: string, public age: number) {
//     super(name, age);
//   }
//   greet() {
//     return `Hi ${this.name}!`;
//   }
// }
