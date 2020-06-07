import { combineReducers } from "redux";
import SiddurReducer from "./siddur_reducer";

export default combineReducers({
  siddur: SiddurReducer
});
