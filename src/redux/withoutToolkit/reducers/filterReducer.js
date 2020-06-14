// -----------reducers без redux toolkit--------------
import { SET_FILTER } from "../types";

const initialState = "";

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};
