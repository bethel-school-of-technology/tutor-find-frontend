import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        {this.props.children}
        <ul className="kyle">::::::Welcome to the Community:::::: </ul>
        <p></p>
        <h2 className="joe">
          create&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;converse
        </h2>
        <p></p>
        <h3 className="chris">TUTORFIND</h3>
        <h3 className="text">
          This site is a fanastic new platform for people in thier communities to connect with
          one another. 
        </h3>
        <h3 className="text">
          {" "}
          This connection hub will allow tutors to freelance their skills and
          for students to find help in their studies quickly, easily, and safely.
        </h3>
        <h3 className="text">
          {" "}
          The goal is to bring people in together in their communities with common
          interests, peace and the love for helping people. <p></p>{" "}
        </h3>
        <h3 className="text">
          {"  "}
          If you are a student of any kind, sign up and connect with a tutor today or if you are a tutor login and start connecting with students. Its a great way to practice your tutoring skills.
        </h3>
          
        <h3 className="text2">
          {"  "}
          Sign up or Log in today.
          </h3>
        <p></p>
        <footer className="h-footer">
          <div> &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          Thank you for using Tutorfind
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/contact">
              <button type="submit">Contact</button>
            </Link>
          &nbsp;&nbsp;
          <Link to="/signup">
              <button type="submit">Sign Up</button>
            </Link>
          </div>
        </footer>
      </div>
    );
  }
}
