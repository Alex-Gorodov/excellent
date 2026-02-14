import { OrderStatuses } from "../../const";
import { ReactComponent as Arrow } from "../../assets/img/icons/arrow-down.svg";
import { useState } from "react";

interface OrderStatusProps {
  status: OrderStatuses;
  isInteractive?: boolean;
}

export function OrderStatus({ status, isInteractive }: OrderStatusProps) {
  const [isStatusListOpened, setStatusListOpened] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const allStatuses = Object.values(OrderStatuses);

  const sortedStatuses = [
    currentStatus,
    ...allStatuses.filter((s) => s !== currentStatus),
  ];

  const formatClass = (s: string) =>
    `status status--${s.toLowerCase().replace(/\s+/g, "-")}`;

  const handleChangeStatus = (newStatus: OrderStatuses) => {
    setCurrentStatus(newStatus);
    setStatusListOpened(false);
  };

  return isInteractive ? (
    <div className="status__wrapper">
      <button
        className={formatClass(currentStatus)}
        onClick={() => setStatusListOpened((prev) => !prev)}
      >
        <span>{currentStatus}</span>
        <Arrow />
      </button>

      {isStatusListOpened && (
        <ul className={`status__list status__list--${currentStatus.toLowerCase().replace(/\s+/g, "-")}`}>
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
  ) : (
    <div className={formatClass(currentStatus)}>
      <span>{currentStatus}</span>
    </div>
  );
}
