import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        sticky="top"
        className="max-width bg-body-tertiary py-2"
      >
        <Container>
          <Navbar.Brand className="hotel-color" href="/">
            LakeSide Hotel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="px-4" href="/browse-all-rooms">
                Browse all rooms
              </Nav.Link>
              <Nav.Link className="px-4" href="/admin">
                Admin
              </Nav.Link>
              <Nav.Link className="px-4" href="/find-booking">
                Find my Bookings
              </Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/profie">Profie</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg body-tertiary shadow sticky-top max-width">
        <div className="continer-fluid ">
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
      </nav> */}
    </div>
  );
};

export default NavBar;
