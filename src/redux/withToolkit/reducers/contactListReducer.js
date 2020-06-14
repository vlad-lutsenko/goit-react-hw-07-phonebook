//-----------reducers без redux toolkit--------------
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  setContactList,
} from "../actions/contactList";

const initialState = [];

export const contactListReducer = createReducer(initialState, {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [setContactList]: (state, action) => [...action.payload],
});
