import React, { useState } from "react";
import "./nav.css";
import CLogo from "./logo.png";
import { Link } from "react-router-dom";
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
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/home/'>Home</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/about/'>About</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/platform/'>Platform</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/service/'>Service</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/product/'>Product</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/market/'>Market</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/login/'>Login</Link></li>
          <li className="menu-hover"><Link className='Menu-Links-Tag BC-DBlue' to='/contact/'>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}
