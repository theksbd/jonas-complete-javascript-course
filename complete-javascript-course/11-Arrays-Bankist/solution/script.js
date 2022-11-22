"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovement = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const createUserName = function (accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
    console.log(acc.username);
  });
};

displayMovement(account1.movements);
createUserName(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// // Slice
// console.log(arr.slice(1));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-1));

// // Splice
// // console.log(arr.splice(1));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// arr = ["a", "b", "c", "d", "e"];

// // Reverse
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);
// console.log(arr);

// // Join
// console.log(arr.join(" + "));
// console.log(arr);

// // At
// console.log(arr[0]);
// console.log(arr.at(0));
// // Get last element using traditional method
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// // Get last element using new at method
// console.log(arr.at(-1));

// // For each
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach((movement, index, array) => {
//   movement > 0
//     ? console.log(`Movement ${index + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${index + 1}: You withdrew ${movement * -1}`);
// });

// // Map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"]
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`Key ${key}: ${value}`);
// });

// // Set
// const currenciesSet = new Set([
//   "USD",
//   "EUR",
//   "GBP",
//   "USD",
//   "EUR",
//   "GBP",
//   "USD",
//   "EUR",
//   "GBP"
// ]);

// currenciesSet.forEach((value, key, set) => {
//   console.log(`Key ${key}: ${value}`);
// });

// // map, filter and reduce
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);
