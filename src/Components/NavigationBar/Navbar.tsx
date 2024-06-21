import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate(); // Using useNavigate hook from react-router-dom

  return (
    <AppBar position="sticky" variant="elevation" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button
          color="inherit"
          onClick={() => navigate("/")}
          className="nav-link"
        >
          Counter
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/userdata")}
          className="nav-link"
        >
          User Data
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/texteditor")}
          className="nav-link"
        >
          Text Editor
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
