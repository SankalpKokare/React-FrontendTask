import "./App.css";
import Counter from "./Components/Counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./Components/UserData/UserData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
