import {
  addToCart,
  totalPrice as price,
  totalQuantity
} from './shoppingCart.js';

console.log(this);
console.log('Importing');

addToCart('Banh My', 1);
console.log(price, totalQuantity);

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);