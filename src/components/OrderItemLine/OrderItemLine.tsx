import { Order } from "../../types/order";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";

interface OrderItemProps {
  order: Order;
  number: number | 0;
}

export function OrderItemLine({order, number}: OrderItemProps) {
  return (
    <div className="table_content">
      <div className="table_line">
        <div className="table_checkbox-wrapper">
        <CustomCheckbox/>
        <span className="table_column-number">{number}</span>
      </div>
      <div className="table_company-wrapper">
        <img src={order.company.logo} alt={order.company.name} width={40} height={40}/>
        <span className="table_column-name">{order.company.name}</span>
      </div>
      <div className="table_company-wrapper">

        <img src={order.customer.avatar} alt={order.customer.name} width={40} height={40}/>
        <span className="table_column-name">{order.customer.name}</span>
      </div>
      <span className="table_column-name">{order.ordered.getUTCDate()}</span>
      <span className="table_column-name">{order.ordered.getUTCDate()}</span>
      <span className="table_column-name">{order.productsOrdered}</span>
      <span className="table_column-name">${order.totalCost}</span>
      <span className={`table_column-status table_column-status--${order.orderStatus.toLowerCase().replace(' ', '-')}`}>{order.orderStatus}</span>
      </div>
    </div>
  )
}
