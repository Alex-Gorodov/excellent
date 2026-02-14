import { createAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { Order } from "../types/order";
import { ChatMessage } from "../types/chatMessage";

export const loadUsers = createAction<{users: User[]}>('data/loadUsers');

export const addMessage = createAction<{order: Order, message: ChatMessage}>('');