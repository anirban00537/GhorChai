import { SET_HOME, DELETE_HOME, CREATE_HOME } from "../constants/actionType";

const initialState = { home: [] };

export default (state = initialState.home, action) => {
  switch (action.type) {
    case SET_HOME:
      return action.payload;
    case CREATE_HOME:
      return [...state, action.payload];
    case DELETE_HOME:
      return state.filter((home) => home._id !== action.payload);
    default:
      return state;
  }
};
