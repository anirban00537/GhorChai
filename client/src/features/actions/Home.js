import { postHome } from "../../api/home";
import { SET_HOME } from "../constants/actionType";

export const HomeAction = (homeData) => async (dispatch) => {
  try {
    const { data } = await postHome(homeData);
    dispatch({ type: SET_HOME, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
