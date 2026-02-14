import { OrderStatuses } from "../const";
import { ChatMessage } from "./chatMessage";
import { Product } from "./product";
import { User } from "./user";

type OrderItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  company: {
    name: string,
    logo: string;
  };
  customer: User;
  ordered: Date;
  deliveryEstimatedDate?: Date;
  orderStatus: OrderStatuses;
  products: OrderItem[];
  comment?: string;
  chat: ChatMessage[];
}
