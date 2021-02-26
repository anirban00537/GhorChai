import { SET_USER } from "../constants/actionType";

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
