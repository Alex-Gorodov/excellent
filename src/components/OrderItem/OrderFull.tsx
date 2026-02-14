import { Order } from "../../types/order"
import { ReactComponent as Close } from "../../assets/img/icons/close.svg";
import { ReactComponent as Attach } from "../../assets/img/icons/attachment.svg";
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { CustomerItem } from "../CustomerItem/CustomerItem";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import { OrderChatMessage } from "../OrderChatMessage/OrderChatMessage";
import { useEffect } from "react";

interface OrderFullProps {
  order: Order;
  number: number;
  onClose: () => void;
}

export function OrderFull({order, number, onClose}: OrderFullProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="order__wrapper" onClick={onClose}>
      <div
        className="order"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="order__header">
          <h2>Order № {number}</h2>
          <button className="order__close-btn" onClick={onClose}>
            <Close/>
          </button>
        </div>
        <div className="order__content">
          <div className="order__table order__table--products">
            <div className="order__table-scroll">
              <div className="order__table-header">
                <p>№</p>
                <p>Product</p>
                <p>Ordered</p>
                <p>Stock</p>
                <p>Unit Price</p>
                <p>Total Price</p>
                <p>Margin Price</p>
              </div>
              {order.products.map((p) => {
                return (
                  <div className="product">
                    <div className="product__name-container">
                      <img src={p.product.image} alt={p.product.name} width={40} height={40}/>
                      <p className="product__name-wrapper">
                        <span className="product__id">{p.product.id}</span>
                        <span className="product__name">{p.product.name}</span>
                      </p>
                    </div>
                    <p className="product__quantity">
                      {p.quantity} {p.product.unit}
                    </p>
                    <p className="product__stock">{p.product.stock}</p>
                    <p className="product__price">${p.product.price} / {p.product.unit}</p>
                    <p className="product__total-price">${(p.product.price * p.quantity).toFixed(2)}</p>
                    <p className="product__margin-price">{p.product.marginPrice}%</p>

                  </div>
                )
              })}
            </div>
            <div className="order__table-footer">
              <p>Total cost:</p>
              <p>
                ${
                  order.products.reduce(
                    (sum, item) => sum + item.product.price * item.quantity,
                    0
                  ).toFixed(2)
                }
              </p>
            </div>
          </div>
          <div className="message order__table order__table--new-message">
            <textarea className="message__field" name="new-message" rows={6}></textarea>
            <div className="message__buttons">
              <button className="message__attach-btn">
                <Attach/>
              </button>
              <button className="button">Send</button>
            </div>
          </div>
          <div className="chat">
            {
              order.chat.map((m) => (
                <OrderChatMessage message={m}/>
              ))
            }
          </div>
          <div className="customer order__table order__table--customer">
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Company</span>
              <CompanyItem image={order.company.logo} text={order.company.name} />
            </p>
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Customer</span>
              <CustomerItem image={order.customer.avatar} text={order.customer.name}/>
            </p>
            <p className="customer__item-wrapper customer__order-status">
              <span className="customer__item-label">Order status</span>
              <OrderStatus status={order.orderStatus} isInteractive/>
            </p>
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Delivery adress</span>
              <span className="customer__item-value">{order.customer.adress}</span>
            </p>
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Delivery date</span>
              <span className="customer__item-value">{order.deliveryEstimatedDate?.toLocaleDateString()}</span>
            </p>
            {
              order.deliveryEstimatedDate
              &&
              <p className="customer__item-wrapper">
                <span className="customer__item-label">Delivery time</span>
                <span className="customer__item-value">{order.deliveryEstimatedDate.getHours()}:00 - {order.deliveryEstimatedDate.getHours() + 2}:00</span>
              </p>
            }
            {
              order.comment
              &&
              <p className="customer__item-wrapper">
                <span className="customer__item-label">Comment</span>
                <span className="customer__item-value">{order.comment}</span>
              </p>
            }
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Phone number</span>
              <span className="customer__item-value">{order.customer.phone || 'No data'}</span>
            </p>
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Ordered</span>
              <span className="customer__item-value">{order.ordered.toLocaleDateString()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
