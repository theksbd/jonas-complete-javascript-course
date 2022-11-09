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
const flight = "LH123";
const hoang = {
  name: "Do Thien Hoang",
  passport: 19092001
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH456";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 19092001) {
    alert("Check in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, hoang);
console.log(flight);
console.log(hoang);

const newPassport = function (person) {
  person.passport = Math.floor(Math.random() * 1000000000000);
};

newPassport(hoang);
checkIn(flight, hoang);
