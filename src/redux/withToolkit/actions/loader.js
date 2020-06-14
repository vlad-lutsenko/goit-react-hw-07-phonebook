import { createAction } from "@reduxjs/toolkit";
import {
  CONTACT_PUSH_REQUEST_START,
  CONTACT_PUSH_REQUEST_SUCCESS,
  CONTACT_DELETE_REQUEST_START,
  CONTACT_DELETE_REQUEST_SUCCESS,
  SET_CONTACT_LIST_REQUEST_START,
  SET_CONTACT_LIST_REQUEST_SUCCESS,
} from "../types";

export const contactPushLoaderActivator = createAction(
  CONTACT_PUSH_REQUEST_START
);
export const contactPushLoaderDeactivator = createAction(
  CONTACT_PUSH_REQUEST_SUCCESS
);

export const contactDeleteLoaderActivator = createAction(
  CONTACT_DELETE_REQUEST_START
);

export const contactDeleteLoaderDeactivator = createAction(
  CONTACT_DELETE_REQUEST_SUCCESS
);

export const setContactListLoaderActivator = createAction(
  SET_CONTACT_LIST_REQUEST_START
);

export const setContactListLoaderDeactivator = createAction(
  SET_CONTACT_LIST_REQUEST_SUCCESS
);
