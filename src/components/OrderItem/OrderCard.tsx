import { useState } from "react";
import { Order } from "../../types/order"
import { ItemWithImage } from "../ItemWithImage/ItemWithImage";
import { CustomerItem } from "../CustomerItem/CustomerItem";
import { OrderFull } from "./OrderFull";
import { ReactComponent as Message } from "../../assets/img/icons/mail.svg"

interface OrderCardProps {
  order: Order;
  number: number;
}

export function OrderCard({order, number}: OrderCardProps) {
  const [isOrderOpened, setOrderOpened] = useState(false);

  return (
    <>
      <div className="order-card" role="button" onClick={(e) => {setOrderOpened(true)}}>
        <div className="order-card__top">
          <span className="order-card__title">{number}</span>
          {
            order.comment
            &&
            <Message title={order.comment}/>
          }
        </div>
        <ItemWithImage image={order.company.logo} text={order.company.name}/>
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





