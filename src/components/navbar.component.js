import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { Redirect } from "react-router-dom";
import ReactSearchBox from 'react-search-box'

function Navbar(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(null);
    return <Redirect to="/home" />;
  }


    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      
       
        <div className="collpase navbar-collapse">
        <img className="navimg" src="https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg" />
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
          <div className="Logins">
            <th><Link to="/login"><button type="submit">Login</button></Link></th>
            <th><Link to="/signup"><button type="submit">Signup</button></Link></th>
            <th><button onClick={logOut}>Logout</button></th>
          </div>
        </div>
      </nav>
    );
    }
    export default Navbar;