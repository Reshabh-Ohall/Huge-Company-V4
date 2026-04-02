import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import DownloadP from "./Pages/Download"
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
      </Routes>
    </>
  )
}

export default App