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
            {/* Not linked to anything yet , put them there to remember they needed added */}
            <button onclick="document.getElementById('id01').style.display='block'">Sign Up</button>
            <button onclick="document.getElementById('id01').style.display='block'">Sign In</button>
            <button onclick="document.getElementById('id01').style.display='block'">Log Out</button>
           
          </ul>
        </div>
      </nav>
    );
    }
  
   
  }

