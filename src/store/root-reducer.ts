import { combineReducers } from "redux";
import { dataReducer } from "./reducers/data";

export const rootReducer = combineReducers({
  data: dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
