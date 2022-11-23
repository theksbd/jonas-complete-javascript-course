/* ------ Coding Challenge 1 ------ */
// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice();
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   console.log(dogsJulia);
//   console.log(dogsJuliaCopy);
//   const dogs = dogsJuliaCopy.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach((dog, i) => {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// dogsJulia = [9, 16, 6, 8, 3];
// dogsKate = [10, 5, 6, 1, 4];
// checkDogs(dogsJulia, dogsKate);

/* ------ Coding Challenge 2 ------ */
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age > 2 ? 16 + age * 4 : age * 2));
//   console.log(humanAges);
//   const agesGreaterEqualThan18 = humanAges.filter((age) => age >= 18);
//   console.log(agesGreaterEqualThan18);
//   const averageAdultAges =
//     agesGreaterEqualThan18.reduce((total, current) => total + current, 0) /
//     agesGreaterEqualThan18.length;
//   console.log(averageAdultAges);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/* ------ Coding Challenge 3 ------ */
// const calcAverageHumanAge = (ages) => {
//   return ages
//     .map((age) => (age > 2 ? 16 + age * 4 : age * 2))
//     .filter((age) => age >= 18)
//     .reduce((total, current, i, arr) => total + current / arr.length, 0);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
