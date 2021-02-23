import { SET_USER } from "../constants/actionType";
import { signin, signup } from "../../api/user";

export const signinAction = (user, token, role) => async (dispatch) => {
  try {
    // const { data } = await signin();
    dispatch({
      type: SET_USER,
      payload: { user: user, token: token, role: role },
    });
  } catch (error) {
    console.log(error.message);
  }
};
