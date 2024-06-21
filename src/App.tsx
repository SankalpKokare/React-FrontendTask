import "./App.css";
import Counter from "./Components/Counter/Counter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserData from "./Components/UserData/UserData";
import RichTextEditor from "./Components/TextEditor/RichTextEditor";
import Navbar from "./Components/NavigationBar/Navbar";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import SignIn from "./Components/Auth0/SignIn/Signin";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoutes from "./Components/Auth0/SignIn/PriveteRoutes";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/texteditor" element={<RichTextEditor />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
