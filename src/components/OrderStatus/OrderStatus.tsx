import { OrderStatuses } from "../../const";
import { ReactComponent as Arrow } from "../../assets/img/icons/arrow-down.svg";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeOrderStatus } from "../../store/actions";
import { Order } from "../../types/order";

interface OrderStatusProps {
  order: Order;
  isInteractive?: boolean;
}

export function OrderStatus({ order, isInteractive }: OrderStatusProps) {
  const dispatch = useDispatch();
  const [isStatusListOpened, setStatusListOpened] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(e.target as Node)) {
        setStatusListOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allStatuses = Object.values(OrderStatuses);

  const sortedStatuses = [
    order.orderStatus,
    ...allStatuses.filter((s) => s !== order.orderStatus),
  ];

  const formatClass = (s: string) =>
    `status status--${s.toLowerCase().replace(/\s+/g, "-")}`;

  const handleChangeStatus = (newStatus: OrderStatuses) => {
    order && dispatch(changeOrderStatus({
      order: order,
      status: newStatus
    }))

    setStatusListOpened(false);
  };

  return isInteractive ? (
    <div className="status__close-handler" ref={wrapperRef}>
      <div className="status__wrapper">
        <button
          className={formatClass(order.orderStatus)}
          onClick={() => setStatusListOpened((prev) => !prev)}
        >
          <span>{order.orderStatus}</span>
          <Arrow />
        </button>

        {isStatusListOpened && (
          <ul className={`status__list status__list--${order.orderStatus.toLowerCase().replace(/\s+/g, "-")}`}>
            {sortedStatuses.map((s) => (
              <li key={s} className="status__list-item">
                <button
                  type="button"
                  className={`${formatClass(s)} status--no-border`}
                  onClick={() => handleChangeStatus(s)}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ) : (
    <div className={formatClass(order.orderStatus)}>
      <span>{order.orderStatus}</span>
    </div>
  );
}
