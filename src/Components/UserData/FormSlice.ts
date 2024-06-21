import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedFormData = localStorage.getItem("UserData");
  const storedEditorData = localStorage.getItem("editorData");
  return {
    UserData: storedFormData
      ? JSON.parse(storedFormData)
      : {
          userDate: { firstName: "", lastName: "", phoneNumber: "", email: "" },
        },
    editorData: storedEditorData ? storedEditorData : "",
  };
};

export const formSlice = createSlice({
  name: "form",
  initialState: getInitialState(),
  reducers: {
    setFormData: (state, action) => {
      state.UserData = action.payload;
      localStorage.setItem("UserData", JSON.stringify(state.UserData));
      localStorage.setItem("editorData", JSON.stringify(state.UserData));
    },
    setRichText: (state, action) => {
      const cleanedData = action.payload.replace(/<\/?[^>]+(>|$)/g, "");
      state.editorData = action.payload.replace(/<\/?p>/g, "");
      state.UserData = JSON.parse(cleanedData);
      localStorage.setItem("editorData", state.editorData);
      localStorage.setItem("UserData", cleanedData);
    },
  },
});

export const { setFormData, setRichText } = formSlice.actions;

export default formSlice.reducer;
