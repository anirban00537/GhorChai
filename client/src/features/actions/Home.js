import { getHome, getUserHome } from "../../api/home";
import { SET_HOME, SET_USER_HOME } from "../constants/actionType";

export const HomeAction = (id) => async (dispatch) => {
  try {
    const { data } = await getHome(id);
    console.log("all home by user", data);
    dispatch({ type: SET_HOME, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const UserHomeAction = () => async (dispatch) => {
  try {
    const { data } = await getUserHome();
    console.log("all home by user");
    dispatch({ type: SET_USER_HOME, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
