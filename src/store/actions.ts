import { createAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { Order } from "../types/order";
import { ChatMessage } from "../types/chatMessage";
import { OrderStatuses } from "../const";

export const loadUsers = createAction<{users: User[]}>('data/loadUsers');
export const loadOrders = createAction<{orders: Order[]}>('data/loadOrders');

export const addMessage = createAction<{order: Order, message: ChatMessage}>('data/addMessage');

export const changeOrderStatus = createAction<{order: Order, status: OrderStatuses}>('data/changeOrderStatus');
