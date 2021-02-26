import { SET_HOME } from "../constants/actionType";

const initialState = { home: [] };

export default (state = initialState.home, action) => {
  switch (action.type) {
    case SET_HOME:
      return action.payload;
    default:
      return state;
  }
};
