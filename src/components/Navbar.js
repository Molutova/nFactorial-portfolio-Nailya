import React from "react";
import { Link } from "react-router-dom";
import "../components/style.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="nav_container">
        <div>
          <Link to="/" className="nav_button">
            Home
          </Link>
          <Link to="/about" className="nav_button">
            About
          </Link>
          <Link to="/experience" className="nav_button">
            Experience
          </Link>
          <Link to="/projects" className="nav_button">
            Projects
          </Link>
        </div>
        <div className="contact_btn">
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}
