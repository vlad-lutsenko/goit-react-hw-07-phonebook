import { createReducer } from "@reduxjs/toolkit";
import {
  setError,
  deleteRequestError,
  setContactsRequestError,
  resetError,
} from "../actions/error";
const initialState = false;

export default createReducer(initialState, {
  [setError]: () => true,
  [deleteRequestError]: () => true,
  [setContactsRequestError]: () => true,
  [resetError]: () => false,
});
