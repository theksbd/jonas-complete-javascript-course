"use strict";

// const a = 1;
// first();

// function first() {
//   if (true) {
//     var b = 2;
//   }
//   second();
//   function second() {
//     const c = 3;
//     third();
//   }
// }

// function third() {
//   const d = 4;
//   console.log(a, b, c, d);
// }

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `You are ${age} and you are born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Hoang";
// calcAge(2001);

// console.log(me);

// var me = "Hoang";
// let job = "student";
// const year = 2001;

// console.log(addExpr(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

const hoang = {
  firstName: "Hoang",
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(this.year);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isGenZ = function () {
    //   console.log(self);
    //   console.log(`${self.year >= 2000 && self.year <= 2020}`);
    // };
    // isGenZ();

    // Solution 2
    const isGenZ = () => {
      console.log(`${this.year >= 2000 && this.year <= 2020}`);
    };
    isGenZ();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  }
};

// hoang.calcAge();
// hoang.greet();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

// addExpr(1, 2);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// addArrow(1, 2);

// let age = 20;
// let oldAge = age;
// age = 21;
// console.log(age, oldAge);

const me = {
  name: "Hoang",
  age: 20,
  family: ["Alice", "Bob"]
};

// const friend = me;
// friend.age = 27;
// console.log(friend);
// console.log(me);

// const friend = Object.assign({}, me);
// friend.age = 27;
// friend.family.push("Dave");
// console.log(friend);
// console.log(me);

const friend = { ...me };
friend.age = 27;
friend.family.push("Dave");
console.log(friend);
console.log(me);
