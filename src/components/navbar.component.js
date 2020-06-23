import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { Redirect } from "react-router-dom";
import ReactSearchBox from "react-search-box";

function Navbar(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    if (localStorage.tokens != null) {
      setAuthTokens(null);
      localStorage.clear();
      return alert("You are now Logged Out!");
    }
  }

  function logins() {
    const x = localStorage.tokens;
    const b = (
      <th>
        <Link to="/login">
          <button type="submit">Login</button>
        </Link>
      </th>
    );
    const c = (
      <th>
        <Link to="/signup">
          <button type="submit">Signup</button>
        </Link>
      </th>
    );
    if (x != null) {
      return (
        <th>
          <button onClick={logOut}>Logout</button>
        </th>
      );
    } else {
      return [b, c];
    }
  }

  return (
    <div className="nav-sticky">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <img
            className="navimg"
            src="https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg"
          />
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
            </Link>
            </li>

            <li className="navbar-item">
              <Link to="/subjects-list" className="nav-link">
                Search
            </Link>
            </li>

            <li className="navbar-item">
              <Link to="/sessions" className="nav-link">
                {" "}
              Tutor Services
            </Link>
            </li>

            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Post
            </Link>
            </li>

            <li className="navbar-item">
              <Link to="/contact" className="nav-link">
                Contact
            </Link>
            </li>
          </ul>
          <div className="Logins">{logins()}</div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
