import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ImCart } from "react-icons/im";
import Loading from "../Accessory/Loading";

function Header() {
  const [loading, setLoading] = useState(false);
  const [isLogged, setIslogged] = useState(false);
  const reload = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    if (!isLogged) {
      setLoading(false);
    }
  }, [isLogged]);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [localStorage.getItem("userId")]);

  return (
    <div className="header">
      {loading && reload ? (
        <Loading />
      ) : (
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
            {!isLogged ? (
              <Link to="/login" className="navbar__link">
                Login
              </Link>
            ) : (
              <div className="navbar__link">
                {localStorage.getItem("user")
                  ? "Hi " + JSON.parse(localStorage.getItem("user"))
                  : "Hi User"}
              </div>
            )}
            {!isLogged ? (
              <Link to="/signup" className="navbar__link">
                SignUp
              </Link>
            ) : (
              <div
                style={{ cursor: "pointer" }}
                className="navbar__link"
                onClick={
                  isLogged
                    ? () => {
                        localStorage.clear();
                        setLoading(true);
                        window.location.reload();
                      }
                    : null
                }
              >
                Logout
              </div>
            )}
            <Link to="/cart" className="navbar__link">
              Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
