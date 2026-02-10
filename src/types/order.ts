import { OrderStatuses } from "../const";
import { User } from "./user";

export type Order = {
  id: string;
  company: {
    name: string,
    logo: string;
  };
  customer: User;
  ordered: Date;
  productsOrdered: number;
  totalCost: number;
  orderStatus: OrderStatuses;
}
