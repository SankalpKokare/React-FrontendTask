import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedFormData = localStorage.getItem("formData");
  return storedFormData
    ? JSON.parse(storedFormData)
    : {
        userDate: { firstName: "", lastName: "", phoneNumber: "", email: "" },
      };
};

export const formSlice = createSlice({
  name: "form",
  initialState: {
    data: getInitialState(),
  },
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("formData", JSON.stringify(state.data));
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
