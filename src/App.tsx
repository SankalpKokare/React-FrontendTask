import "./App.css";
import Counter from "./Components/Counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./Components/UserData/UserData";
import RichTextEditor from "./Components/TextEditor/RichTextEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/texteditor" element={<RichTextEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
