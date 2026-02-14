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
    image: apple,
    price: 1.57,
    marginPrice: 30,
    stock: 15,
    unit: "kg",
  },
  {
    id: "S0704",
    name: "Avocado",
    image: avocado,
    price: 1,
    marginPrice: 30,
    stock: 105,
    unit: "each",
  },
  {
    id: "OB7702",
    name: "Chocolate",
    image: chocolate,
    price: 1.6,
    marginPrice: 30,
    stock: 87,
    unit: "each",
  },
  {
    id: "BN1201",
    name: "Banana",
    image: banana,
    price: 1.2,
    marginPrice: 30,
    stock: 120,
    unit: "kg",
  },
  {
    id: "BF3302",
    name: "Beef",
    image: beef,
    price: 8.5,
    marginPrice: 30,
    stock: 40,
    unit: "kg",
  },
  {
    id: "CH4403",
    name: "Chicken",
    image: chicken,
    price: 6.2,
    marginPrice: 30,
    stock: 65,
    unit: "kg",
  },
  {
    id: "BR5504",
    name: "Bread",
    image: bread,
    price: 2.1,
    marginPrice: 30,
    stock: 90,
    unit: "each",
  },
  {
    id: "CF6605",
    name: "Coffee",
    image: coffee,
    price: 4.8,
    marginPrice: 30,
    stock: 70,
    unit: "each",
  },
  {
    id: "MK7706",
    name: "Milk",
    image: milk,
    price: 1.4,
    marginPrice: 30,
    stock: 110,
    unit: "each",
  },
  {
    id: "OJ8807",
    name: "Orange Juice",
    image: orangeJuice,
    price: 3.2,
    marginPrice: 30,
    stock: 55,
    unit: "each",
  },
  {
    id: "SM9908",
    name: "Salmon",
    image: salmon,
    price: 12.5,
    marginPrice: 30,
    stock: 30,
    unit: "kg",
  },
  {
    id: "TM1010",
    name: "Tomato",
    image: tomato,
    price: 2.3,
    marginPrice: 30,
    stock: 140,
    unit: "kg",
  },
];
