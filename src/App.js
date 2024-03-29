import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import AnimatedForm from "./home/animatedForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<AnimatedForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
