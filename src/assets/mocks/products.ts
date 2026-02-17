import { Product } from "../../types/product";

import apple from "../../assets/img/products/apple.png";
import chocolate from "../../assets/img/products/chocolate.png";
import avocado from "../../assets/img/products/avocado.png";

import banana from "../../assets/img/products/banana.png";
import beef from "../../assets/img/products/beef.png";
import chicken from "../../assets/img/products/chicken.png";
import bread from "../../assets/img/products/bread.png";
import coffee from "../../assets/img/products/coffee.png";
import milk from "../../assets/img/products/milk.png";
import orangeJuice from "../../assets/img/products/orange-juice.png";
import salmon from "../../assets/img/products/salmon.png";
import tomato from "../../assets/img/products/tomato.png";
export const products: Product[] = [
  {
    id: "SW8211",
    name: "Apples",
    description: "Fresh and juicy red apples, perfect for snacks, desserts, and baking.",
    image: apple,
    price: 1.57,
    marginPrice: 30,
    stock: 15,
    unit: "kg",
  },
  {
    id: "S0704",
    name: "Avocado",
    description: "Ripe avocados with creamy texture, ideal for salads, toast, and guacamole.",
    image: avocado,
    price: 1,
    marginPrice: 30,
    stock: 105,
    unit: "each",
  },
  {
    id: "OB7702",
    name: "Chocolate",
    description: "Rich and smooth chocolate bar, great for desserts or a quick sweet treat.",
    image: chocolate,
    price: 1.6,
    marginPrice: 30,
    stock: 87,
    unit: "each",
  },
  {
    id: "BN1201",
    name: "Banana",
    description: "Sweet ripe bananas, perfect for smoothies, breakfasts, and healthy snacks.",
    image: banana,
    price: 1.2,
    marginPrice: 30,
    stock: 120,
    unit: "kg",
  },
  {
    id: "BF3302",
    name: "Beef",
    description: "High-quality fresh beef, ideal for steaks, roasting, and hearty meals.",
    image: beef,
    price: 8.5,
    marginPrice: 30,
    stock: 40,
    unit: "kg",
  },
  {
    id: "CH4403",
    name: "Chicken",
    description: "Fresh chicken meat, versatile for frying, grilling, or baking dishes.",
    image: chicken,
    price: 6.2,
    marginPrice: 30,
    stock: 65,
    unit: "kg",
  },
  {
    id: "BR5504",
    name: "Bread",
    description: "Soft freshly baked bread, perfect for sandwiches and breakfasts.",
    image: bread,
    price: 2.1,
    marginPrice: 30,
    stock: 90,
    unit: "each",
  },
  {
    id: "CF6605",
    name: "Coffee",
    description: "Aromatic ground coffee with rich flavor to start your day right.",
    image: coffee,
    price: 4.8,
    marginPrice: 30,
    stock: 70,
    unit: "each",
  },
  {
    id: "MK7706",
    name: "Milk",
    description: "Fresh dairy milk, great for drinking, cereals, and cooking.",
    image: milk,
    price: 1.4,
    marginPrice: 30,
    stock: 110,
    unit: "each",
  },
  {
    id: "OJ8807",
    name: "Orange Juice",
    description: "Refreshing orange juice packed with vitamins and natural taste.",
    image: orangeJuice,
    price: 3.2,
    marginPrice: 30,
    stock: 55,
    unit: "each",
  },
  {
    id: "SM9908",
    name: "Salmon",
    description: "Premium fresh salmon fillet, perfect for grilling or healthy dinners.",
    image: salmon,
    price: 12.5,
    marginPrice: 30,
    stock: 30,
    unit: "kg",
  },
  {
    id: "TM1010",
    name: "Tomato",
    description: "Ripe red tomatoes, ideal for salads, sauces, and everyday cooking.",
    image: tomato,
    price: 2.3,
    marginPrice: 30,
    stock: 140,
    unit: "kg",
  },
];
