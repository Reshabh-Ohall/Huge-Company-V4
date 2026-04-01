import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Download from "./Pages/Download"
import 'tachyons';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Download" element={<Download />} />
      </Routes>
    </>
  )
}

export default App