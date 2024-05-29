import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar">
      <div className="container container__navbar">
        <div className="logo">
          <a href="#">W.</a>
        </div>
        <div className={`nav__list ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#New">New</a>
          <a href="#Popular">Popular</a>
          <a href="#Trending">Trending</a>
          <a href="#Categories">Categories</a>
        </div>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>
      </div>
    </nav>
  );
}
