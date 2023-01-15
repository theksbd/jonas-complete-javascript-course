"use strict";

/* -------------------- Coding Challenge 1 -------------------- */

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

// const bmw = new Car("BMW", 120);
// console.log(bmw);
// bmw.accelerate();
// console.log(bmw);
// bmw.brake();
// console.log(bmw);

/* -------------------- Coding Challenge 2 -------------------- */
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const ford = new CarCl("Ford", 120);
// console.log(ford);
// ford.accelerate();
// console.log(ford);
// ford.brake();
// console.log(ford);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford.speedUS);
// console.log(ford);

/* -------------------- Coding Challenge 3 -------------------- */

/* -------------------- Coding Challenge 4 -------------------- */
