import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <div className="logo">
              <ImCart size={25} />
            </div>
          </Link>
          <span></span>
        </div>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/login" className="navbar__link">
            Login
          </Link>
          <Link to="/signup" className="navbar__link">
            SignUp
          </Link>
          <Link to="/cart" className="navbar__link">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
