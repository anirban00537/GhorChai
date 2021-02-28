import { SET_USER_HOME } from "../constants/actionType";

const initialState = { userHome: [] };

export default (state = initialState.userHome, action) => {
  switch (action.type) {
    case SET_USER_HOME:
      return action.payload;
    default:
      return state;
  }
};
