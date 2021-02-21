import { SET_USER } from "../constants/actionType";
import { signin, signup } from "../../api/user";

export const signinAction = (user) => async (dispatch) => {
  try {
    // const { data } = await signin();
    dispatch({
      type: SET_USER,
      payload: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};
