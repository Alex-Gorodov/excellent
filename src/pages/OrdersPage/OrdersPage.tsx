import Layout from "../../components/Layout/Layout";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import { ReactComponent as List } from "../../assets/img/icons/sort-list.svg";
import { ReactComponent as Grid } from "../../assets/img/icons/sort-grid.svg";
import { ReactComponent as Prev } from "../../assets/img/icons/arrow-prev.svg";
import { ReactComponent as Next } from "../../assets/img/icons/arrow-next.svg";
import { InlineOrderItem } from "../../components/OrderItem/InlineOrderItem";
import { useEffect, useState } from "react";
import { getPagination } from "../../utils/getPagination";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import { OrderStatuses } from "../../const";
import { OrderCard } from "../../components/OrderItem/OrderCard";

export function OrdersPage() {
  const orders = useSelector((state: RootState) => state.data.orders);
  const [sortView, setSortView] = useState<'list' | 'grid'>('list');

  const pageSize = 10;
  const totalPages = Math.ceil(orders.length / pageSize);
  const isMultiPage = totalPages > 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [delta, setDelta] = useState(2);

  useEffect(() => {
    const updateDelta = () => {
      const width = window.innerWidth;

      if (width < 600) setDelta(1);
      else if (width < 1024) setDelta(2);
      else setDelta(3);
    };

    updateDelta();
    window.addEventListener('resize', updateDelta);
    return () => window.removeEventListener('resize', updateDelta);
  }, []);

  const pages =
    totalPages <= 15 && delta >= 3
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : getPagination(currentPage, totalPages, delta);


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const getOrderNumber = (orderId: string) =>
    orders.findIndex(o => o.id === orderId) + 1;

  return (
    <Layout>
      <div className="section orders">
        <div className="section__header orders__header">
          <h1 className="title">All orders</h1>
          <div className="orders__buttons">
            <div className="orders__half-buttons">
              <button className={`half-button half-button--left ${sortView === 'list' ? 'half-button--active' : ''}`} onClick={() => setSortView('list')}>
                <List/>
              </button>
              <button className={`half-button half-button--right ${sortView === 'grid' ? 'half-button--active' : ''}`} onClick={() => setSortView('grid')}>
                <Grid/>
              </button>
            </div>
            <button className="button">Export</button>
          </div>
        </div>
        {
          sortView === 'list'
          ?
          <div className="section__wrapper orders__wrapper">
            <div className="table">
              <div className="table__scroll">
                <div className="table__header table__line">
                  <div className="table__checkbox-wrapper">
                    <CustomCheckbox/>
                    <span className="table__column-name">№</span>
                  </div>
                  <span className="table__column-name">Company</span>
                  <span className="table__column-name">Customer</span>
                  <span className="table__column-name">Ordered</span>
                  <span className="table__column-name">Delivery date</span>
                  <span className="table__column-name">Products ordered</span>
                  <span className="table__column-name">Total cost</span>
                  <span className="table__column-name">Order status</span>
                </div>
                {
                  orders.slice(startIndex, endIndex).map((o, __index) => (
                    <InlineOrderItem key={o.id} order={o} number={getOrderNumber(o.id)}/>
                  ))
                }
              </div>
            </div>
            {
              isMultiPage && (
                <div className="pagination">
                  <button className={`pagination__btn ${currentPage > 1 ? 'pagination__btn--available' : ''}`} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    <Prev/>
                  </button>

                  {pages.map((p, i) =>
                    p === "..." ? (
                      <span key={i} className="pagination__dots">...</span>
                    ) : (
                      <button
                        key={i}
                        className={`pagination__btn ${currentPage === p ? 'pagination__btn--active' : ''}`}
                        onClick={() => setCurrentPage(Number(p))}
                      >
                        {p}
                      </button>
                    )
                  )}

                  <button className={`pagination__btn ${currentPage < totalPages ? 'pagination__btn--available' : ''}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <Next/>
                  </button>

                </div>
              )
            }
          </div>
          :
          <div className="section__wrapper orders__wrapper orders__wrapper--grid">
            <div className="table-grid">
              {Object.values(OrderStatuses).map((status) => (
                <div key={status} className="table-grid__column">

                  <h2
                    className={`table-grid__title table-grid__title--${status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {status}
                  </h2>

                  <div className="table-grid__group">
                    {orders
                      .filter((order) => order.orderStatus === status)
                      .map((order, __index) => (
                        <OrderCard key={order.id} order={order} number={getOrderNumber(order.id)}/>
                      ))
                      }
                  </div>

                </div>
              ))}
            </div>

          </div>
        }
      </div>
    </Layout>
  )
}
