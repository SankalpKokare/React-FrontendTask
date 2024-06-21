import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Components/UserData/FormSlice";
import CounterSlice from "./Components/Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    counter: CounterSlice,
  },
});
