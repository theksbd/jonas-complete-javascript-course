"use strict";

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// console.log(describeCountry("Viet Nam", 925, "Hanoi"));
// console.log(describeCountry("Finland", 6, "Helsinki"));
// console.log(describeCountry("Japan", 100, "Tokyo"));

// function percentageOfWorld1(population) {
//   const populationOfWorld = 7900;
//   return `${(population / populationOfWorld) * 100}%`;
// }

// console.log(percentageOfWorld1(1440));

// const percentageOfWorld2 = function (population) {
//   const populationOfWorld = 7900;
//   return `${(population / populationOfWorld) * 100}%`;
// };

// console.log(percentageOfWorld2(1440));

// const percentageOfWorld3 = (population) => {
//   const populationOfWorld = 7900;
//   return `${(population / populationOfWorld) * 100}%`;
// };

// console.log(percentageOfWorld3(1440));

// const describePopulation = (country, population) => {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld3(
//     population
//   )} of the world`;
// };

// console.log(describePopulation("Viet Nam", 925));

// const populations = [925, 110, 6, 1440];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// const neighbors = ["Thailand", "Laos", "Cambodia"];
// console.log(neighbors);
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// if (neighbors.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }
// // Method 1: use findIndex
// neighbors[neighbors.findIndex((neighbor) => neighbor === "Laos")] = "Sweden";
// console.log(neighbors);
// // Method 2: use indexOf
// neighbors[neighbors.indexOf("Laos")] = "Sweden";
// console.log(neighbors);

// const myCountry = {
//   country: "Viet Nam",
//   capital: "Ha Noi",
//   language: "Vietnamese",
//   population: 925,
//   neighbors: ["Thailand", "Laos", "Cambodia"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this["population"]} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbors.length === 0;
//     return this.isIsland;
//   },
// };

// console.log(
//   `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
// );

// myCountry.describe();
// console.log(myCountry.checkIsland());

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// const populations = [925, 110, 6, 1440];
// const percentage2 = [];
// for (let i = 0; i < populations.length; i++) {
//   const population = populations[i];
//   percentage2.push(percentageOfWorld1(population));
// }

// console.log(percentage2);

// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   const neighbors = listOfNeighbors[i];
//   for (let j = 0; j < neighbors.length; j++) {
//     const neighbor = neighbors[j];
//     console.log(`Neighbor: ${neighbor}`);
//   }
// }

// const populations = [925, 110, 6, 1440];
// const percentage3 = [];
// let i = 0;
// while (i < populations.length) {
//   const population = populations[i];
//   percentage3.push(percentageOfWorld1(population));
//   i++;
// }

// console.log(percentage3);
