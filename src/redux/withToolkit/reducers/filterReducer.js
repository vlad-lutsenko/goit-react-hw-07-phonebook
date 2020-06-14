// -----------reducers без redux toolkit--------------
import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "../actions/filter";

const initialState = "";

export const filterReducer = createReducer(initialState, {
  [setFilter]: (state, action) => action.payload,
});
