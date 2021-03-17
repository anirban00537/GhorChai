import { getHome, getUserHome, deleteHouse, postHome } from "../../api/home";
import {
  DELETE_HOME,
  SET_HOME,
  SET_USER_HOME,
  CREATE_HOME,
} from "../constants/actionType";

export const HomeAction = (id) => async (dispatch) => {
  try {
    const { data } = await getHome(id);
    console.log("all home by user", data);
    dispatch({ type: SET_HOME, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
export const createHome = (home, img) => async (dispatch) => {
  try {
    const { data } = await postHome(home, img);
    console.log(data, "printed");
    dispatch({ type: CREATE_HOME, payload: data });
  } catch (error) {
    console.log(error.message);
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

export const DeleteHomeAction = (id) => async (dispatch) => {
  try {
    const { data } = await deleteHouse(id);
    dispatch({ type: DELETE_HOME, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
