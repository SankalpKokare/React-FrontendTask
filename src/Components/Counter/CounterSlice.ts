import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    setCounterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCounterValue } = counterSlice.actions;
export default counterSlice.reducer;
