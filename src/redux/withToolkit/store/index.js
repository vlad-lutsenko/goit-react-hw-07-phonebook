import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleWare = [thunk];

const compose = composeWithDevTools(applyMiddleware(...middleWare));

const store = createStore(rootReducer, compose);

export default store;
