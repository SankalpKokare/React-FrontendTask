import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedFormData = localStorage.getItem("formData");
  const storedEditorData = localStorage.getItem("editorData");
  return {
    data: storedFormData
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
      state.data = action.payload;
      localStorage.setItem("formData", JSON.stringify(state.data));
      localStorage.setItem("editorData", JSON.stringify(state.data));
    },
    setRichText: (state, action) => {
      const cleanedData = action.payload.replace(/<\/?[^>]+(>|$)/g, "");
      state.editorData = action.payload.replace(/<\/?p>/g, "");
      state.data = JSON.parse(cleanedData);
      localStorage.setItem("editorData", state.editorData);
      localStorage.setItem("formData", cleanedData);
    },
  },
});

export const { setFormData, setRichText } = formSlice.actions;

export default formSlice.reducer;
