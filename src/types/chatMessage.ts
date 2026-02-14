import { User } from "./user";

export type ChatMessage = {
  id: string;
  date: Date;
  orderId: string;
  message: string;
  author: User;
  viewed: boolean;
}
