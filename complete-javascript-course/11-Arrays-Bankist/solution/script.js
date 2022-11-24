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
          <div class="movements__value">${mov} EUR</div>
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
  });
};

createUserName(accounts);

const calculateAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (total, current) => total + current,
    0
  );
  labelBalance.innerText = account.balance + " EUR";
};

const calculateAndDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((total, current) => total + current, 0);
  labelSumIn.innerText = incomes + " EUR";

  const outcomes = account.movements
    .filter((mov) => mov < 0)
    .reduce((total, current) => total + current, 0);
  labelSumOut.innerText = outcomes + " EUR";

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((total, current) => total + current, 0);
  labelSumInterest.innerText = interest + " EUR";
};

const updateUI = function (account) {
  // Display movements
  displayMovement(account.movements);
  // Display balance
  calculateAndDisplayBalance(account);
  // Display summary
  calculateAndDisplaySummary(account);
};

// Event handler
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("Authenticated successfully");
    // Display UI and welcome message
    labelWelcome.innerText = `Welcome back, ${currentAccount.owner
      .split(" ")
      .at(0)}`;
    containerApp.style.opacity = 100;
    // Clear the input field
    inputLoginUsername.value = "";
    inputLoginPin.value = "";

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  inputTransferAmount.value = "";
  inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiver &&
    amount <= currentAccount.balance &&
    receiver?.username !== currentAccount.username
  ) {
    console.log("Transfer successfully!");
    currentAccount.movements.push(amount * -1);
    receiver.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  const usernameClose = inputCloseUsername.value;
  const pinClose = Number(inputClosePin.value);

  if (
    usernameClose === currentAccount.username &&
    pinClose === currentAccount.pin
  ) {
    const indexClose = accounts.findIndex(
      (account) => account.username === usernameClose
    );
    // Delete account
    accounts.splice(indexClose, 1);
    // Hide UI
    containerApp.style.opacity = 0;
    // Update welcome message
    labelWelcome.innerText = `Log in to get started`;
  }
  inputCloseUsername.value = "";
  inputClosePin.value = "";
});

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

// const deposits = movements.filter((mov) => mov > 0);
// console.log(deposits);
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce((total, current) => total + current, 0);
// console.log(balance);
// // Max value
// const maxAmount = movements.reduce((maxValue, currentValue) => {
//   return maxValue > currentValue ? maxValue : currentValue;
// }, movements[0]);
// console.log(maxAmount);

// // Chaining method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((total, current) => total + current, 0);
// console.log(totalDepositsUSD);

// // find
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find((account) => account.owner === "Jessica Davis");
// console.log(account);

// // some and every
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// const allDeposits = movements.every((mov) => mov > 0);
// console.log(allDeposits);

// // flat and flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// // Using flat
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((total, current) => total + current, 0);
// console.log(overallBalance);
// // Using flatMap
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((total, current) => total + current, 0);
// console.log(overallBalance2);
