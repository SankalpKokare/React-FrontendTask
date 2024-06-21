import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";
import { useDispatch, useSelector } from "react-redux";
import { setRichText } from "../UserData/FormSlice";
import { Button } from "@mui/material";

function RichTextEditor() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const formData = useSelector((state: any) => state.form.editorData);

  useEffect(() => {
    if (!formData) {
      return;
    }
    setValue(formData);
  }, []);

  const modules = {
    toolbar: [["bold", "italic", "underline"]],
  };

  function handleSave() {
    dispatch(setRichText(value));
  }

  function handleChange(value: string) {
    setValue(value);
    console.log(value);
  }

  return (
    <div className="editor-container">
      <div className="editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e) => handleChange(e)}
        className="editor-input"
        modules={modules}
      />
      <Button onClick={handleSave} variant="outlined" color="primary" size="small">Save</Button>
    </div>
    </div>
  );
}

export default RichTextEditor;
