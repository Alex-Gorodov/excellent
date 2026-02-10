import { OrderStatuses } from "../../const";
import { Order } from "../../types/order";
import { users } from "./users";

export const orders: Order[] = [
  {
    id: "order-0",
    company: {
      name: users[0].company.name,
      logo: users[0].company.logo,
    },
    customer: users[0],
    ordered: new Date(),
    productsOrdered: 3,
    totalCost: 5.11,
    orderStatus: OrderStatuses.Created
  },
  {
    id: "order-1",
    company: {
      name: users[1].company.name,
      logo: users[1].company.logo,
    },
    customer: users[1],
    ordered: new Date(),
    productsOrdered: 10,
    totalCost: 56.34,
    orderStatus: OrderStatuses.Shipping
  },
  {
    id: "order-2",
    company: {
      name: users[2].company.name,
      logo: users[2].company.logo,
    },
    customer: users[2],
    ordered: new Date(),
    productsOrdered: 23,
    totalCost: 45.32,
    orderStatus: OrderStatuses.Shipping
  },
  {
    id: "order-3",
    company: {
      name: users[3].company.name,
      logo: users[3].company.logo,
    },
    customer: users[3],
    ordered: new Date(),
    productsOrdered: 6,
    totalCost: 5.11,
    orderStatus: OrderStatuses.PartialDelivered
  },
  {
    id: "order-4",
    company: {
      name: users[4].company.name,
      logo: users[4].company.logo,
    },
    customer: users[4],
    ordered: new Date(),
    productsOrdered: 10,
    totalCost: 56.34,
    orderStatus: OrderStatuses.Canceled
  },
  {
    id: "order-5",
    company: {
      name: users[5].company.name,
      logo: users[5].company.logo,
    },
    customer: users[5],
    ordered: new Date(),
    productsOrdered: 23,
    totalCost: 45.32,
    orderStatus: OrderStatuses.Delivered
  },
  {
    id: "order-6",
    company: {
      name: users[6].company.name,
      logo: users[6].company.logo,
    },
    customer: users[6],
    ordered: new Date(),
    productsOrdered: 6,
    totalCost: 5.11,
    orderStatus: OrderStatuses.Delivered
  },
]
