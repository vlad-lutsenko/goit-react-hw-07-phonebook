import { createAction } from "@reduxjs/toolkit";
import {
  PUSH_REQUEST_ERROR,
  ERROR_RESET,
  DELETE_REQUEST_ERROR,
  SET_CONTACT_LIST_REQUEST_ERROR,
} from "../types";

export const setError = createAction(PUSH_REQUEST_ERROR);
export const deleteRequestError = createAction(DELETE_REQUEST_ERROR);
export const setContactsRequestError = createAction(
  SET_CONTACT_LIST_REQUEST_ERROR
);
export const resetError = createAction(ERROR_RESET);
