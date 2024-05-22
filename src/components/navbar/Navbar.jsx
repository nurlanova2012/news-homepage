import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="container container__navbar">
        <div className="logo">
          <a href="#">W.</a>
        </div>
        <div className="nav__list">
          <a href="#">Home</a>
          <a href="#New">New</a>
          <a href="#Popular">Popular</a>
          <a href="#Trending">Trending</a>
          <a href="#Categories">Categories</a>
        </div>
      </div>
    </nav>
  );
}
