import { useDispatch, useSelector } from "react-redux";
import { signinAction } from "../features/actions/user";

export const FetchUserWithoutLogin = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("jwt");
  const role = localStorage.getItem("role");
  const dispatch = useDispatch();
  if (user) {
    dispatch(signinAction(user, token, role));
  } else {
  }
};
