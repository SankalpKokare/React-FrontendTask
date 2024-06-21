import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Components/UserData/FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
