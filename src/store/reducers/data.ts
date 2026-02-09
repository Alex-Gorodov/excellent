import { DataState } from "../../types/store";
import { createReducer } from "@reduxjs/toolkit";

const initialState: DataState = {
  isDataLoading: true,
  data: [],
}

export const dataReducer = createReducer(initialState, (builder) => {

})
