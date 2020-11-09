import { combineReducers } from "redux";
import { todoapp } from "./Reducers";
export const rootReducer = combineReducers({ todoapp: todoapp });