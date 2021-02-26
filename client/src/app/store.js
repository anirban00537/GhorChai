import { configureStore } from "@reduxjs/toolkit";
import home from "../features/reducer/home";
import user from "../features/reducer/user";

export default configureStore({
  reducer: {
    user: user,
    home: home,
  },
});
