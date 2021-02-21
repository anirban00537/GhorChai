import { configureStore } from "@reduxjs/toolkit";
import user from "../features/reducer/user";

export default configureStore({
  reducer: {
    user: user,
  },
});
