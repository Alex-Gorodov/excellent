import { Order } from "../../types/order";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { useState } from "react";
import { OrderFull } from "./OrderFull";
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { CustomerItem } from "../CustomerItem/CustomerItem";
import { OrderStatus } from "../OrderStatus/OrderStatus";

interface OrderItemProps {
  order: Order;
  number: number | 0;
}

export function InlineOrderItem({order, number}: OrderItemProps) {
  const [isOrderOpened, setOrderOpened] = useState(false);

  return (
    <>
      <div className="table__line">
        <div className="table__checkbox-wrapper">
          <CustomCheckbox/>
          <button className="table__column-number" onClick={() => setOrderOpened(true)}>{number}</button>
        </div>
        <CompanyItem image={order.company.logo} text={order.company.name} />
        <CustomerItem image={order.customer.avatar} text={order.customer.name} comment={order.comment}/>

        <span className="table__column-name">{order.ordered.toLocaleString().slice(0,-3)}</span>
        <span className="table__column-name">{order.deliveryEstimatedDate?.toLocaleDateString()}</span>
        <span className="table__column-name">{
          order.products.reduce(
            (sum, item) => sum + item.quantity,
            0
          )
        }
        </span>
        <span className="table__column-name">${
          order.products.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
          ).toFixed(2)
        }
        </span>
        <OrderStatus order={order}/>
      </div>
      {
        isOrderOpened
        &&
        <OrderFull order={order} number={number} onClose={() => setOrderOpened(false)}/>
      }
    </>
  )
}
