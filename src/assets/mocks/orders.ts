import { OrderStatuses } from "../../const";
import { Order } from "../../types/order";
import { getRandomDate } from "../../utils/getRandomDate";
import { getRandomProductsForOrder } from "../../utils/getRandomProducts";
import { users } from "./users";

const statuses = Object.values(OrderStatuses);

export const orders: Order[] = Array.from({ length: 130 }, (_, i) => {
  const user = users[i % users.length];

  return {
    id: `order-${i}`,
    company: {
      name: user.company.name,
      logo: user.company.logo,
    },
    customer: user,
    ordered: getRandomDate(0, -5),
    deliveryEstimatedDate: getRandomDate(new Date().getDate(), 29),
    products: getRandomProductsForOrder(),
    orderStatus: statuses[i % statuses.length],
    chat: [],
    ...(i % 4 === 0 && {
      comment: "Please let me know if the product is out of stock",
    }),
  };
});
