console.log('Exporting');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added`);
};

const totalPrice = 237;
let totalQuantity = 23;

export { totalPrice, totalQuantity };
