import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import MainMenu from "./layouts/MainMenu/MainMenu";

//Pages
import Home from "./pages/home";
import About from "./pages/about";
import SignUp from "./pages/Auth/signUpPage";

function App() {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
