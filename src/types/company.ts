import { OrderStatuses } from "./orderStatuses";
import { User } from "./user";

export type Company = {
  id: string;
  name: string;
  customers: User[];
  stats: OrderStatuses;
}
