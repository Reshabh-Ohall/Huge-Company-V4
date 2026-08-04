import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Pages/Home"
import DownloadP from "./Pages/Download"
import LoginP from "./Pages/Login"
import RegisterP from "./Pages/Register"
import NotFound from "./Pages/NotFound"
import InquiryP from "./Pages/Inquiry"
import 'tachyons';
import './App.css';
import './Fonts.css';

function BioRedirect() {
  window.location.replace('https://bio.hugecompany.in/')
  return null
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/download" element={<DownloadP />} />
        <Route path="/login" element={<LoginP />} />
        <Route path="/register" element={<RegisterP />} />
        <Route path="/bio" element={<BioRedirect />} />
        <Route path="/inquiry" element={<InquiryP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
