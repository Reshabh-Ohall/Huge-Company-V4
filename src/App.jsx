import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import DownloadP from "./Pages/Download"
import LoginP from "./Pages/Login"
import RegisterP from "./Pages/Register"
import NotFound from "./Pages/NotFound"
import 'tachyons';
import './App.css';
import './Fonts.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/download" element={<DownloadP />} />
        <Route path="/login" element={<LoginP />} />
        <Route path="/register" element={<RegisterP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App