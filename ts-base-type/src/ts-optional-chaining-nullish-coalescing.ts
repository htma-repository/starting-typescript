const product = {
  title: "leopold keyboard",
  description: "keyboard mechanical",
  "ready-stock": true,
  details: {
    price: 1500000,
    color: "white",
  },
};

// Optional Chaining
const title = product?.title;
const desc = product?.description;
const color = product?.details?.color;

//Nullish Coalescing
const price = product?.details ?? product?.details?.price;

console.log(price);
