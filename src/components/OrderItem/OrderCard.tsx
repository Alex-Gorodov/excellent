import { useState } from "react";
import { Order } from "../../types/order"
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { CustomerItem } from "../CustomerItem/CustomerItem";
import { OrderFull } from "./OrderFull";

interface OrderCardProps {
  order: Order;
  number: number;
}

export function OrderCard({order, number}: OrderCardProps) {
  const [isOrderOpened, setOrderOpened] = useState(false);

  return (
    <>
      <div className="order-card" role="button" onClick={(e) => {setOrderOpened(true)}}>
        <button className="order-card__title">{number}</button>
        <CompanyItem image={order.company.logo} text={order.company.name}/>
        <CustomerItem image={order.customer.avatar} text={order.customer.name}/>
      </div>
      {
        isOrderOpened
        &&
        <OrderFull order={order} number={number} onClose={() => setOrderOpened(false)}/>
      }
    </>
  )
}





