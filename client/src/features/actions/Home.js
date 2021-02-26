import { getHome } from "../../api/home";
import { SET_HOME } from "../constants/actionType";

export const HomeAction = (id) => async (dispatch) => {
  try {
    const { data } = await getHome(id);
    console.log("all home by user", data);
    dispatch({ type: SET_HOME, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
