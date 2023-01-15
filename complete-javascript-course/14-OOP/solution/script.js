"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

// 1. New empty object {} was created
// 2. Function is called, this = {}
// 3. {} linked to Prototype
// 4. Function automatically return {}

const hoang = new Person("Hoang", 2001);
// console.log(hoang);
// console.log(hoang instanceof Person);

// Prototypes
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// Static methods
// Person.hey = function () {
//   console.log("Hey");
// };

// Person.hey();

// hoang.calcAge();

// console.log(hoang.__proto__);
// console.log(hoang.__proto__ === Person.prototype);

Person.prototype.species = "Human";
// console.log(hoang);
// console.log(hoang.species);
// console.log(hoang.hasOwnProperty("firstName"));
// console.log(hoang.hasOwnProperty("birthYear"));
// console.log(hoang.hasOwnProperty("species"));

const arr = [1, 2, 2, 3, 4, 5, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector("h1");
// console.dir(h1);

/*-------------------- ES6 Classes --------------------*/
// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hi ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there");
  }
}

const jonas = new PersonCl("Jonas Schmedtmann", 1991);
// console.log(jonas);
// jonas.calcAge();

// console.log(jonas.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hi ${this.firstName}`);
// };

// jonas.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizens (can be passed to the function)
// 3. Classes are executed in strict mode

// PersonCl.hey();

/*-------------------- Setters and Getters --------------------*/
// const account = {
//   owner: "Hoang",
//   movements: [100, -30, 300, 500, -70],

//   get latest() {
//     return this.movements.at(-1);
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// console.log(account.latest);
// account.latest = 600;
// console.log(account.latest);

// Getters and Setters of class PersonCl are above
// console.log(jonas.age);
// console.log(jonas.fullName);

/*-------------------- Object.create --------------------*/
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 1999;
// console.log(steven);
// steven.calcAge();
// console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 2003);
// sarah.calcAge();

/*-------------------- Inheritance Between "Classes": Constructor Functions --------------------*/

/*-------------------- Inheritance Between "Classes": ES6 Classes --------------------*/

/*-------------------- Inheritance Between "Classes": Object.create --------------------*/

