import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "./FormSlice";
import { TextField, Button } from "@mui/material";
import "./UserData.css";
const UserData = () => {
  const [formData, setFormDataState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setFormData(formData));
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserData;
