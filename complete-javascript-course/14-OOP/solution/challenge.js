'use strict';

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
const CarEV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

CarEV.prototype = Object.create(Car.prototype);

CarEV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

CarEV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new CarEV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();

/* -------------------- Coding Challenge 4 -------------------- */
class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }

  brake() {
    this.speed -= 10;
    this.#charge -= 1;
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian.brake();
rivian.chargeBattery(50);
rivian.accelerate().accelerate().brake().chargeBattery(80).accelerate();
console.log(rivian);
