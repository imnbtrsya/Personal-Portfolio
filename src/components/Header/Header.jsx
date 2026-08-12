import "./Header.css";

import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      {/* LOGO */}
      <a href="#home" className="logo" onClick={closeMenu}>
        Nur Iman Batrisya
      </a>

      {/* DESKTOP NAV */}
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* BURGER BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* MOBILE / TABLET MENU */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>Certifications</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

    </header>
  );
}

export default Header;