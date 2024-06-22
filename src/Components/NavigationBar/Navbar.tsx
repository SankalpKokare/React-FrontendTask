import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      sx={{ borderRadius: "10px" }}
    >
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
          <Button color="inherit" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Button color="inherit" onClick={handleLogin}>
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
