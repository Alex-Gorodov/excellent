export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  marginPrice: number;
  stock: number;
  unit: 'each' | 'kg';
}
