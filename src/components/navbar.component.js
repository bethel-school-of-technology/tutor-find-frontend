import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactSearchBox from 'react-search-box'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">
          {" "}
          Tutor Find
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                {" "}
                Subjects
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/sessions" className="nav-link">
                {" "}
                Tutor Sessions
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/sessions" className="nav-link">
                Search bar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
    }
  
   
  }

