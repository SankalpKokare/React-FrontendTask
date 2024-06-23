import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  console.log("isAuthenticated" + isAuthenticated);

  return (
    <AppBar
      position="sticky"
      variant="elevation"
      className="navbar"
      sx={{ borderRadius: "10px", display: "flex", flexWrap: "wrap", '@media (max-width: 767px)': {
        position: 'absolute'} }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , minWidth: "20px", mx: "10px" }}>
          My App
        </Typography>
        <div className="nav-button">
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
        {isAuthenticated && (
           <Button
           color="inherit"
           onClick={() => navigate("/dashboard")}
           className="nav-link"
         >
           DashBoard
         </Button>
        )}
        {isAuthenticated ? (
          <Button color="inherit" onClick={handleLogout}  sx={{ border: "2px solid white" }}>
            Log Out
          </Button>
        ) : (
          <Button color="inherit" onClick={handleLogin}   sx={{ border: "1px solid white" }} >
            Log In
          </Button>
        )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
