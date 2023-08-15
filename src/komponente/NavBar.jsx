import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "#f2f2f2",
  padding: "10px",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
  marginRight: "10px",
};

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul>
        <li>
          <Link to="/" style={linkStyle}>
            Aplikacije u ponudi
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
