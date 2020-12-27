import React from "react";
import { Link } from "gatsby";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid justify-content-md-end justify-content-center">
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/speaking" className="nav-link">
              Speaking
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
