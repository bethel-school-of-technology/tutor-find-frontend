import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        {this.props.children}
        <ul className="kyle">Welcome to the Community </ul>
        <p></p>
        <h2 className="joe">
          create&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;converse
        </h2>
        <p></p>
        <h3 className="chris">TUTORFIND</h3>
        <h3 className="text">
          A fanastic new platform for people in the communicty to connect with
          each other.
        </h3>
        <h3 className="text">
          {" "}
          This connection hub will allow tutors to freelance their skills and
          for students to find help in their studies quickly and safely.
        </h3>
        <h3 className="text">
          {" "}
          The goal is to bring people together in their communities with common
          interests, peace and the love for helping people. <p></p>
          {" "}
        </h3>
        <h3 className="text">
        {"  "}
        Connect with a tutor today and be on your way to sucess.
        
        </h3>
        <p></p>
        <h4> 
          <Link to="/Register">
            <button type="submit">Sign Up</button>
          </Link>
        </h4>
        
      </div>
      
     
    );
    
  }
}


   

