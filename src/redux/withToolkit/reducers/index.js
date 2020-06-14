import { combineReducers } from "redux";
import { filterReducer } from "../reducers/filterReducer";
import { contactListReducer } from "../reducers/contactListReducer";
import loader from "./loader";
import error from "./error";

const rootReducer = combineReducers({
  contacts: contactListReducer,
  filter: filterReducer,
  loader,
  error,
});

export default rootReducer;
