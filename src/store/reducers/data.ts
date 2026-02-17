import { DataState } from "../../types/store";
import { createReducer } from "@reduxjs/toolkit";
import { addMessage, changeOrderStatus, loadOrders, loadProducts, loadUsers } from "../actions";

const initialState: DataState = {
  isUsersLoading: true,
  users: [],
  isOrdersLoading: true,
  orders: [],
  isProductsLoading: true,
  products: [],
}

export const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers, (state, action) => {
      state.users = action.payload.users;
    })
    .addCase(loadOrders, (state, action) => {
      state.orders = action.payload.orders
    })
    .addCase(loadProducts, (state, action) => {
      state.products = action.payload.products
    })
    .addCase(addMessage, (state, action) => {
      const order = state.orders.find((o) => o.id === action.payload.order.id)
      order?.chat.push(action.payload.message);
    })
    .addCase(changeOrderStatus, (state, action) => {
      const order = state.orders.find((o) => o.id === action.payload.order.id);

      if (order) {
        order.orderStatus = action.payload.status;
      }
    })
})
