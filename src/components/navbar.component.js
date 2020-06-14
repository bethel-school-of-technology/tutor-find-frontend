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
            
    
          </ul>
          <div className="Logins">
            <Link to="/Login"><button type="submit">Login&nbsp;|&nbsp;Register</button></Link>
            <button onclick="document.getElementById('id01').style.display='block'">Log Out</button>
          </div>
        </div>
      </nav>
    );
    }
  
   
  }

