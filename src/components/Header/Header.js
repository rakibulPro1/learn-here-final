import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar bg=" px-5" variant="light navbar">
        <Navbar href="#home" className="logo">
          LEARN HERE
        </Navbar>
        <Nav className="ms-auto links">
          <NavLink to="/home" className="link-item" activeClassName="selected">
            Home
          </NavLink>
          <NavLink to="/about" className="link-item" activeClassName="selected">
            About
          </NavLink>
          <NavLink
            to="/courses"
            className="link-item"
            activeClassName="selected"
          >
            Courses
          </NavLink>
          <NavLink
            to="/contact"
            className="link-item"
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
