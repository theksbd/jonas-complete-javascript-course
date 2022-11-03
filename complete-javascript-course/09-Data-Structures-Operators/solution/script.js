"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderHuTieu: function (ing1, ing2, ing3) {
    console.log(`We use ${ing1}, ${ing2} and ${ing3} to make Hu Tieu for you`);
  },

  orderMyTron: function (mainIngredient, ...ingredients) {
    console.log(mainIngredient);
    console.log(ingredients);
  }
};

/* -------- Destructuring Array -------- */

// const arr = [1, 2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [first, , third] = restaurant.categories;
// console.log(first, third);
// [first, third] = [third, first];
// console.log(first, third);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nestedArray = [2, 4, [5, 6]];
// const [i, , [j1, j2]] = nestedArray;
// console.log(i, j1, j2);

// // Default value
// const [x = 1, y = 1, z = 1] = [8, 9];
// console.log(x, y, z);

/* -------- Destructuring Object -------- */
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// // Change name of property
// const {
//   name: restaurantName,
//   categories: restaurantCategories,
//   openingHours: restaurantOpeningHours
// } = restaurant;
// console.log(restaurantName, restaurantCategories, restaurantOpeningHours);

// // Default value
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Mutating variables
// let a = 1;
// let b = 5;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested object
// const {
//   fri: { open, close }
// } = openingHours;
// console.log(open, close);

// // Destructuring parameters in method
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2
// });

/* -------- Spread Operator -------- */
// const arr = [3, 4, 5];
// const newArr = [1, 2, ...arr, 6, 7];
// console.log(arr, newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Banh mi"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Merge array
// const mergedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mergedMenu);

// // Function
// const ingredients = ["Bo vien", "Gio heo", "Hanh phi"];
// restaurant.orderHuTieu(...ingredients);

// // Iterables
// // String
// const str = "Hoang";
// const letters = [...str];
// console.log(letters);
// // Object
// const newRestaurant = { ...restaurant };
// console.log(newRestaurant);

/* -------- Rest Operator -------- */
// SPREAD, because three dots are at RIGHT side of assignment
const newArr = [...[1, 2, 3], 4, 5];

// REST, because three dots are at LEFT side of assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Spread vs Rest
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Function
const add = function (...numbers) {
  console.log(numbers);
  console.log(numbers.reduce((total, current) => total + current));
};

add(1, 2);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7, 8);
const x = [1, 2, 3];
add(...x);

restaurant.orderMyTron("Xuc xich", "Bo vien", "Bo xao", "Op la");
restaurant.orderMyTron("Xuc xich");
