import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactSearchBox from 'react-search-box'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      
       
        <div className="collpase navbar-collapse">
        <img className="navimg" src="https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg" />
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/home" className="nav-link">
          Home
        </Link>
          </li>
            <li className="navbar-item">
            
              <Link to="/create" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/subjects-list" className="nav-link">
              
                Subjects
              </Link>
            </li>
           
            <li className="navbar-item">
              <Link to="/sessions" className="nav-link">
                {" "}
                Tutor Sessions
              </Link>
            </li>
            
            
           
          </ul>
        </div>
      </nav>
    );
    }
  
   
  }

