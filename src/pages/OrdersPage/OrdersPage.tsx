import Layout from "../../components/Layout/Layout";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import { ReactComponent as List } from "../../assets/img/icons/sort-list.svg";
import { ReactComponent as Grid } from "../../assets/img/icons/sort-grid.svg";
import { ReactComponent as Prev } from "../../assets/img/icons/arrow-prev.svg";
import { ReactComponent as Next } from "../../assets/img/icons/arrow-next.svg";
import { InlineOrderItem } from "../../components/OrderItem/InlineOrderItem";
import { useState } from "react";
import { orders } from "../../assets/mocks/orders";

export function OrdersPage() {
  const [sortView, setSortView] = useState<'list' | 'grid'>('list');

  const pageSize = 10;
  const totalPages = Math.ceil(orders.length / pageSize);
  const isMultiPage = totalPages > 1;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <Layout>
      <div className="section">
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
                  <InlineOrderItem order={o} number={startIndex + __index + 1}/>
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

                {Array.from({ length: totalPages }, (__, i) => (
                  <button key={i} className={`pagination__btn ${currentPage === i + 1 ? 'pagination__btn--active' : ''}`} onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                ))}

                <button className={`pagination__btn ${currentPage < totalPages ? 'pagination__btn--available' : ''}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  <Next/>
                </button>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}
