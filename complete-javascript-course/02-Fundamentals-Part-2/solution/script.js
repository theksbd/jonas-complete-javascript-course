"use strict";

// // Coding Challenge 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsScore = calcAverage(85, 54, 41);
// const koalasScore = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${dolphinsScore} vs. ${koalasScore})`;
//   }
//   if (avgKoalas >= avgDolphins * 2)
//     return `Koalas win (${koalasScore} vs. ${dolphinsScore})`;
//   return "No one wins";
// };

// console.log(checkWinner(dolphinsScore, koalasScore));

// // Coding Challenge 2
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(total);

// // Coding Challenge 3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (john.BMI > mark.BMI) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
//   );
// }

// // Coding Challenge 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const bill = bills[i];
//   const tip = calcTip(bill);
//   tips.push(tip);
//   total.push(tip + bill);
// }

// console.log(bills);
// console.log(tips);
// console.log(total);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element;
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(total));
