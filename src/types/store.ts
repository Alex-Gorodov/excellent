import { store } from "../store";
import { Order } from "./order";
import { Product } from "./product";
import { User } from "./user";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataState = {
  isUsersLoading: boolean;
  users: User[];
  isOrdersLoading: boolean;
  orders: Order[];
  isProductsLoading: boolean;
  products: Product[];
}
