"use strict";

/* ------ Default Parameters ------ */
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 800, 150);
// createBooking("LH123", 2);
// // trick to skip parameter
// createBooking("LH123", undefined, 1000);

/* ------ Pass by Value vs Reference ------ */
// const flight = "LH123";
// const hoang = {
//   name: "Do Thien Hoang",
//   passport: 19092001
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH456";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 19092001) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, hoang);
// console.log(flight);
// console.log(hoang);

// const newPassport = function (person) {
//   person.passport = Math.floor(Math.random() * 1000000000000);
// };

// newPassport(hoang);
// checkIn(flight, hoang);

/* ------ Functions Accepting Callback Functions ------ */
// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, func) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${func(str)}`);
//   console.log(`Transformed by: ${func.name}`);
// };
// transformer("Javascript is fun", oneWord);
// transformer("Javascript is fun", upperFirstWord);

/* ------ Functions Returning Functions ------ */
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Hoang");
// greet("Hello")("Jonas");

// // Use arrow function
// const greetArrow = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greetArrow("Hello")("Hoang");

/* ------ Call, apply and bind ------ */
// // Call method
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat at ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name
//     });
//   }
// };

// lufthansa.book(239, "Hoang");
// lufthansa.book(635, "Jonas");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: []
// };

// const book = lufthansa.book;
// // Error because this keyword is undefined due to the regular function call
// // book(234, "Andrei");
// book.call(eurowings, 234, "Andrei");
// console.log(eurowings);
// book.call(lufthansa, 235, "Brad");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss",
//   iataCode: "LX",
//   bookings: []
// };
// book.call(swiss, 101, "Max");
// console.log(swiss);

// // Apply method
// const flightData = [200, "John"];
// book.apply(swiss, flightData);
// console.log(swiss);
// // We rarely use apply method nowadays, because we can use spread operator in modern JS instead
// book.call(swiss, ...flightData);
// console.log(swiss);

// // Bind method
// const bookLH = book.bind(lufthansa);
// const bookEW = book.bind(eurowings);
// const bookSW = book.bind(swiss);

// bookEW(202, "Angela");
// console.log(eurowings);
// bookSW(300, "Yihua");
// console.log(swiss);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Adam");
// console.log(eurowings);

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addTax1 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const a = addTax1(0.1);
// console.log(a(200));
// console.log(addTax1(0.23)(200));

/* ------ Immediately Invoked Function Expression (IIFE) ------ */
// // Traditional function expression, we can invoke it multiple times
// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();
// runOnce();
// runOnce();

// (function () {
//   console.log("This will never run again");
// })();

// (() => {
//   console.log("This will ALSO never run again");
// })();

// ((name) => {
//   console.log(`Hi ${name}`);
// })("Hoang");

/* ------ Closure ------ */
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(passengerCount + " passengers");
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// // More examples on Closure
// // Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// // Re-assign f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers.`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds.`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);
