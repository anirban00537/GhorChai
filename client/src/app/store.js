import { configureStore } from "@reduxjs/toolkit";
import home from "../features/reducer/home";
import user from "../features/reducer/user";
import userHome from "../features/reducer/userHome";

export default configureStore({
  reducer: {
    user: user,
    home: home,
    userHome: userHome,
  },
});
