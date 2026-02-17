import { Order } from "../../types/order"
import { ReactComponent as Close } from "../../assets/img/icons/close.svg";
import { ReactComponent as Attach } from "../../assets/img/icons/attachment.svg";
import { ItemWithImage } from "../ItemWithImage/ItemWithImage";
import { CustomerItem } from "../CustomerItem/CustomerItem";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import { OrderChatMessage } from "../OrderChatMessage/OrderChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/actions";
import { RootState } from "../../store/root-reducer";

interface OrderFullProps {
  order: Order;
  number: number;
  onClose: () => void;
}

export function OrderFull({order, number, onClose}: OrderFullProps) {
  const users = useSelector((state: RootState) => state.data.users)
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const sortedChat = [...order.chat].reverse();

  const handleSendMessage = () => {
    message.length >= 0 && dispatch(addMessage({
      order: order,
      message: {
        id: 'message-' + new Date().getMilliseconds(),
        date: new Date(),
        orderId: order.id,
        message: message,
        author: users[0],
        viewed: false
      }
    }))
    setMessage('')
  }

  const rawPhone = order.customer.phone;

  const formattedPhone = rawPhone
    ? rawPhone.replace(/[^\d+]/g, '')
    : '';

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
                  <div className="order-product">
                    <div className="order-product__name-container">
                      <img src={p.product.image} alt={p.product.name} width={40} height={40}/>
                      <p className="order-product__name-wrapper">
                        <span className="order-product__id">{p.product.id}</span>
                        <span className="order-product__name">{p.product.name}</span>
                      </p>
                    </div>
                    <p className="order-product__quantity">
                      {p.quantity} {p.product.unit}
                    </p>
                    <p className="order-product__stock">{p.product.stock}</p>
                    <p className="order-product__price">${p.product.price} / {p.product.unit}</p>
                    <p className="order-product__total-price">${(p.product.price * p.quantity).toFixed(2)}</p>
                    <p className="order-product__margin-price">{p.product.marginPrice}%</p>

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
            <textarea className="message__field" name="new-message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className="message__buttons">
              <button className="message__attach-btn">
                <Attach/>
              </button>
              <button className="button" onClick={() => handleSendMessage()}>Send</button>
            </div>
          </div>
          <div className="chat">
            {
              sortedChat.map((m) => (
                <OrderChatMessage message={m}/>
              ))
            }
          </div>
          <div className="customer order__table order__table--customer">
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Company</span>
              <ItemWithImage image={order.company.logo} text={order.company.name} />
            </p>
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Customer</span>
              <CustomerItem image={order.customer.avatar} text={order.customer.name}/>
            </p>
            <p className="customer__item-wrapper customer__order-status">
              <span className="customer__item-label">Order status</span>
              <OrderStatus order={order} isInteractive/>
            </p>
            <p className="customer__item-wrapper">
              <span className="customer__item-label">Delivery adress</span>
              <address className="customer__item-value">{order.customer.adress}</address>
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
            {
              order.customer.phone
              &&
              <p className="customer__item-wrapper">
                <span className="customer__item-label">Phone number</span>
                <a href={`tel:${formattedPhone}`} className="customer__item-value">{order.customer.phone}</a>
              </p>
            }
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
