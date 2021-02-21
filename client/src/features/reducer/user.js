import { SET_USER } from "../constants/actionType";

const initialState = { userInfo: {} };

export default (state = initialState.userInfo, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
