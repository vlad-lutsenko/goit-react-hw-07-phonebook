//--------------action creators з redux toolkit--------------

import { createAction } from "@reduxjs/toolkit";
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT_LIST } from "../types";
import {
  contactPushLoaderActivator,
  contactPushLoaderDeactivator,
  contactDeleteLoaderActivator,
  contactDeleteLoaderDeactivator,
  setContactListLoaderActivator,
  setContactListLoaderDeactivator,
} from "./loader";
import { post, remove, get } from "../../../utils/fetcher";
import {
  setError,
  resetError,
  deleteRequestError,
  setContactsRequestError,
} from "./error";

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const setContactList = createAction(SET_CONTACT_LIST);

export const asyncAddContact = ({ name, number }) => async (dispatch) => {
  dispatch(contactPushLoaderActivator());
  const contact = { name, number };
  try {
    dispatch(resetError());
    const result = await post(contact);
    dispatch(addContact(result.data));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(contactPushLoaderDeactivator());
  }
};

export const asyncDeleteContact = (id) => async (dispatch) => {
  dispatch(contactDeleteLoaderActivator());
  try {
    dispatch(resetError());
    await remove(id);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(deleteRequestError());
  } finally {
    dispatch(contactDeleteLoaderDeactivator());
  }
};

export const asyncSetContactList = () => async (dispatch) => {
  dispatch(setContactListLoaderActivator());
  try {
    dispatch(resetError());
    const result = await get();
    dispatch(setContactList(result.data));
  } catch (error) {
    dispatch(setContactsRequestError());
  } finally {
    dispatch(setContactListLoaderDeactivator());
  }
};
