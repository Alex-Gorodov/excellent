import { User } from "./user";

export type ChatMessage = {
  id: string;
  date: Date;
  message: string;
  author: User;
  viewed: boolean;
}
