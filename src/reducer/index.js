import counterReducer from "./counter";
import reducerLain from "./reducerLain";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  lain: reducerLain,
});

export default allReducer;
