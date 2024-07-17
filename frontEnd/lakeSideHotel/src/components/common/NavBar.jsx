import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  return (
    <nav className="navbar navbar-expand-lg body-tertiary px-5 shadow mt-5 sticky-top">
      <div className="continer-fluid">
        <NavLink to={"/"} className="hotel-color">
          LakeSide Hotel
        </NavLink>

        <button
          className="navbar-toggler"
          data-bs-toggler="collapse"
          data-bs-target="#navbarScroll"
          arial-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"/browse-all-rooms"}
              >
                Browse all rooms
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"/admin"}>
                Admin
              </NavLink>
            </li>
          </ul>

          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/find-bookings"}>
                Find my Bookings
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                href=""
                className={`nav-link dropdown-toggle ${
                  showAccount ? "show" : ""
                }`}
                role="button"
                data-bs-toggler="dropdown"
                arial-expanded="false"
                onClick={handleAccountClick}
              >
                Account
              </a>

              <ul
                className={`dropdown-menu ${showAccount ? "show" : ""}`}
                arial-labeledby="navbaDropdown"
              >
                <li>
                  <Link to={"/login"} className="dropdown-item">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to={"/profie"} className="dropdown-item">
                    Profie
                  </Link>
                </li>

                <li>
                  <Link to={"/logout"} className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
