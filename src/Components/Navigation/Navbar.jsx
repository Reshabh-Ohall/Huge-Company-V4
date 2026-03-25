import React, { useState } from "react";
import "./nav.css";
import CLogo from "./logo.png";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-brand bcard-hover">
          <img src={CLogo} alt="Logo" className="nav-logo" />
          <span className="nav-title">
            <h1 className="effra BC-DBlue">
              <strong className="effra-800">Huge</strong> Company
            </h1>
          </span>
        </div>

        {/* Mobile Actions: Search + Hamburger */}
        <div className="mobile-actions ">
          <div className="nav-search">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Menu */}
        <ul className={`nav-menu effra-500 BC-DBlue ${menuOpen ? "active" : ""}`}>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Home'>Home</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/About'>About</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Platform'>Platform</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Service'>Service</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Product'>Product</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Market'>Market</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Login'>Login</a></li>
          <li className="menu-hover"><a className='Menu-Links-Tag BC-DBlue' href='https://hugecompany.in/Contact'>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
