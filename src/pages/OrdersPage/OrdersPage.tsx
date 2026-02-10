import Layout from "../../components/Layout/Layout";
import { ReactComponent as List } from "../../assets/img/icons/sort-list.svg";
import { ReactComponent as Grid } from "../../assets/img/icons/sort-grid.svg";
import { useState } from "react";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import { orders } from "../../assets/mocks/orders";
import { OrderItemLine } from "../../components/OrderItemLine/OrderItemLine";

export function OrdersPage() {
  const [sortView, setSortView] = useState<'list' | 'grid'>('list');

  return (
    <Layout>
      <div className="section">
        <div className="section_header orders_header">
          <h1 className="title">All orders</h1>
          <div className="orders_buttons">
            <div className="orders_half-buttons">
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
        <div className="section_wrapper orders_wrapper">
          <div className="order_table table">
            <div className="order_table-header table_header table_line">
              <div className="table_checkbox-wrapper">
                <CustomCheckbox/>
                <span className="table_column-name">№</span>
              </div>
              <span className="table_column-name">Company</span>
              <span className="table_column-name">Customer</span>
              <span className="table_column-name">Ordered</span>
              <span className="table_column-name">Delivery date</span>
              <span className="table_column-name">Products ordered</span>
              <span className="table_column-name">Total cost</span>
              <span className="table_column-name">Order status</span>
            </div>
            {
              orders.map((o, _index) => (
                <OrderItemLine order={o} number={_index + 1}/>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}
