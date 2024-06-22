import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "./FormSlice";
import { TextField, Button } from "@mui/material";
import "./UserData.css";
const UserData = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  };

  const [formData, setFormDataState] = useState(initialFormData);

  const [isSaved, setIsSaved] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setIsSaved(false);
    const { name, value } = e.target;
    setFormDataState((prev:any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setFormData(formData));
    setIsSaved(true);
    setFormDataState(initialFormData);
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isSaved) {
        const message = "You have unsaved changes";
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSaved]);

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>User Data Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserData;
