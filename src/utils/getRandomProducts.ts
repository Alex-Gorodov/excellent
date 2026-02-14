import { products } from "../assets/mocks/products";

export const getRandomProductsForOrder = (min = 1, max = 50) => {
  const count =
    Math.floor(Math.random() * (max - min + 1)) + min;

  const shuffled = [...products].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count).map((product) => ({
    product,
    quantity: Math.floor(Math.random() * 5) + 1,
  }));
};
