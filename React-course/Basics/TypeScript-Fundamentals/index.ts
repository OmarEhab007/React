// function add(a: number, b: number): number {
//   return a + b;
// }

// function timeout(n: number) {
//   return new Promise((res) => setTimeout(res, n));
// }

// export async function addNumbers(a: number, b: number) {
//   await timeout(500);
//   return a + b;
// }

// (async () => {
//   console.log(await addNumbers(1, 2));
// })();

//--------------------------- Variables ---------------------------
// literal types
// let c: number;
// let d: string;
// let e: boolean;
// let f: any;
// let g: null;
// let h: undefined;
// let i: number[] = [1, 2, 3];
// let j: string[] = ['a', 'b', 'c'];
// let k: any[] = [1, 'a', true];
// let l: [number, string, boolean] = [1, 'a', true]; // tuple
// enum Color {
//   Red = 5,
//   Green = 7,
//   Blue = 6,
// }
// let m: Color;
// m = Color.Green;
// let n: any = 'a';
// let o = (<string>n).endsWith('a');
// let p = (n as string).endsWith('a');

//------------------------------ Type Categories ------------------------------
// 1. Primitives / Value Types
//    1.1. String Types
//    1.2. Number Types
//    1.3. Boolean Types

// 2. Reference Types
//    2.1. Array Types
//    2.2. Object Types
//    2.3. Function Types

// 3. Union Types
// 4. Function Types
// 5. Object Types
// 6. Array Types
// 7. Tuple Types
// 8. Enum Types
// 9. Generics

//--------------------------- Functions ---------------------------
// function add(a: number, b: number): number {
//   return a + b;
// }

// function timeout(n: number) {
//   return new Promise((res) => setTimeout(res, n));
// }

//----------------------------- Union Types ---------------------------
// function flipCoin(): "heads" | "tails" {
//   if (Math.random() > 0.5) return "heads";
//   return "tails";
// }

// function maybeGetUserInfo():
//   | ["error", Error]
//   | ["success", { name: string; email: string }] {
//   if (flipCoin() === "heads") {
//     return ["success", { name: "John Doe", email: "jdoe@me.com" }];
//   } else {
//     return ["error", new Error("User not found.")];
//   }
// }
// const outcome = maybeGetUserInfo();
// // console.log(outcome);
// const [first, second] = outcome;

// if (second instanceof Error) {
//   console.log(second.message);
// } else {
//   console.log(second.name);
// }

//------------------------------ intersection types ------------------------------

// const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
// function makeWeak():Date & {end : Date} {
//   const start = new Date();
//   const end = new Date(start.valueOf() + ONE_WEEK);
//   return {...start, end};
// }

// const thisWeek = makeWeak();
// thisWeek.toISOString();
// thisWeek.end.toISOString();

//------------------------------ Interface and type Aliases --------------------------------------------

// export type AppProps = { // type alias
//   name: string;
//   age: number;
//   email: string;
// }

// function sendEmail(info: AppProps) {
//   console.log(info.name + ' ' + info.age + ' ' + info.email);
// }
// sendEmail({ name: 'John Doe', age: 30, email: 'jdoe@me.com' });

// type specialDAte =  Date &{getReason(): string}

// const newYearEve: specialDAte = {
//   ...new Date(),
//   getReason() {
//     return 'NRE';
//   }
// }

// interface
// interface userInfo{
//   name: string;
//   age: number;
//   email: string;
// }

// function sendEmail(info: userInfo) {
//   console.log(info.name + ' ' + info.age + ' ' + info.email);
// }
// // sendEmail({ name: 'John Doe', age: 30, email: 'jdoe@me.com' });

// // inheritance

// class User implements userInfo{
//   name: string;
//   age: number;
//   email: string;
//   constructor(name: string, age: number, email: string) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
// }
// const user = new User('John Doe', 30, 'jdoe@me.com');
// sendEmail(user);

//------------------------------ Functions --------------------------------------------
// Callable types
// interface TwoNumberCalculator {
//   (x: number, y: number): number;
// }

// type TwoNumberCalc = (x: number, y: number) => number;

// const add: TwoNumberCalculator = (x, y) => {
//   return x + y;
// };
// const subtract: TwoNumberCalc = (x, y) => {
//   return x - y;
// };

// function overload
// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: any, y: any): any {
//   return x + y;
// }

// override

// class Vehicle {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Car extends Vehicle {
//   constructor(public wheels: number) {
//     super();
//   }
//   drive() {
//     console.log('Driving a car...');
//     super.drive();
//   }
// }

// this type

// function myClickHandler(
//   this: HTMLButtonElement,
//   event: Event
// ) {
//   this.disabled = true;
// }
// const button = document.querySelector('button')!;
// const boundHandler = myClickHandler.bind(button);
// boundHandler(new Event('click'));
// myClickHandler.call(button, new Event('click'));

// ------------------------------- Classes ------------------------------------
// class Car {
//   make: string;
//   model: string;
//   year: number;
//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// }

// // using access modifiers
// class Car2 {
//   public make: string;
//   private model: string;
//   protected year: number;
//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   protected drive() {
//     console.log('Driving...');
//   }
//   public honk() {
//     console.log('Beep');
//   }
//   private park() {
//     console.log('Parking...');
//   }
// }

//---------------------------- Types and values --------------------------------
// top types "any" and "unknown"
// let x: any;
// let y: unknown;
// // bottom types
// let z: never;

// ----------------------------- Generics ---------------------------------
// function getArray<T>(items: T[]): T[] {
//   return new Array().concat(items);
// }

// let numArray = getArray<number>([1, 2, 3]);
// let strArray = getArray<string>(['a', 'b', 'c']);

// class GenericNumber<T> {
//   zeroValue: T | undefined;
//   add: ((x: T, y: T) => T) | undefined;
// }

// const number = new GenericNumber<number>();
// number.zeroValue = 0;
// number.add = (x, y) => x + y;

// const string = new GenericNumber<string>();
// string.zeroValue = '';
// string.add = (x, y) => x + y;

// // dictionary
// interface Dictionary<T> {
//   [key: string]: T;
// }

