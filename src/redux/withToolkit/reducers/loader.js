import { createReducer } from "@reduxjs/toolkit";
import {
  contactPushLoaderActivator,
  contactPushLoaderDeactivator,
  contactDeleteLoaderActivator,
  contactDeleteLoaderDeactivator,
  setContactListLoaderActivator,
  setContactListLoaderDeactivator,
} from "../actions/loader";

const initialState = false;

export default createReducer(initialState, {
  [contactPushLoaderActivator]: () => true,
  [contactPushLoaderDeactivator]: () => false,
  [contactDeleteLoaderActivator]: () => true,
  [contactDeleteLoaderDeactivator]: () => false,
  [setContactListLoaderActivator]: () => true,
  [setContactListLoaderDeactivator]: () => false,
});
