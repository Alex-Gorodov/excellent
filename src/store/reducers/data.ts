import { DataState } from "../../types/store";
import { createReducer } from "@reduxjs/toolkit";
import { loadUsers } from "../actions";

const initialState: DataState = {
  isUsersLoading: true,
  users: [],
}

export const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers, (state, action) => {
      state.users = action.payload.users;
    })
})
