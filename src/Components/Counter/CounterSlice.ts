import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    countHistory: number[];
  }

  
const initialState: CounterState = {
    value: 0,
    countHistory: [],
  };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounterValue: (state, action : PayloadAction<number>) => {
      state.value = action.payload;
      state.countHistory.push(action.payload);
    },
  },
});

export const { setCounterValue } = counterSlice.actions;
export default counterSlice.reducer;
