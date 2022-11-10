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
//   // return func(str);
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
