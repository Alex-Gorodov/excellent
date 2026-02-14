import { store } from "../store";
import { User } from "./user";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataState = {
  isUsersLoading: boolean;
  users: User[];
  
}
