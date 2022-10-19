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
//   capital: "Ha noi",
//   language: "Vietnamese",
//   population: 925,
//   neighbors: ["Thailand", "Laos", "Cambodia"],
// };
