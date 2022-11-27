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

/* ------ Coding Challenge 4 ------ */
// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] }
// ];

// const getEatStatus = (curFood, recommendedFood) => {
//   let status = -1; // Eat too little
//   if (curFood > recommendedFood * 0.9 && curFood < recommendedFood * 1.1) {
//     status = 0; // Eat okay
//   } else if (curFood >= recommendedFood * 1.1) {
//     status = 1; // Eat too much
//   }
//   return status;
// };

// // Ex1
// dogs.forEach((dog) => {
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
// });
// console.log(dogs);
// // Ex2
// dogs.forEach((dog) => {
//   if (dog.owners.includes("Sarah")) {
//     const status = getEatStatus(dog.curFood, dog.recommendedFood);
//     if (status === 0) {
//       console.log(`Sarah's dog eats okay`);
//     } else if (status === -1) {
//       console.log(`Sarah's dog eats too little`);
//     } else {
//       console.log(`Sarah's dog eats too much`);
//     }
//   }
// });
// // Ex3
// const ownersEatTooMuch = dogs
//   .filter((dog) => getEatStatus(dog.curFood, dog.recommendedFood) === 1)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
//   .filter((dog) => getEatStatus(dog.curFood, dog.recommendedFood) === -1)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooLittle);
// // Ex4
// console.log(ownersEatTooMuch.join(" and ") + "'s dogs eat too much!");
// console.log(ownersEatTooLittle.join(" and ") + "'s dogs eat too little!");
// // Ex5
// console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
// // Ex6
// console.log(
//   dogs.some((dog) => getEatStatus(dog.curFood, dog.recommendedFood) === 0)
// );
// // Ex7
// console.log(
//   dogs.filter((dog) => getEatStatus(dog.curFood, dog.recommendedFood) === 0)
// );

// // Ex8
// const shallowCopyDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(shallowCopyDogs);
