import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      

      <div>
        <table className="page2">
        <div className="contact-border">
        {/* <img
          className="navimg"
          src="https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg"
          /> */}
          <th className="contact-info" style={{textDecoration: "underline"}}>Contact Us</th>
          <tr>Email: Tutorfind@Awesome.com</tr>
          <tr>Phone: (777) 777-7777</tr>
        <p></p>
         </div>
        </table>
      
        <img
        className="navimg2"
        src="https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg"
        />
        
        </div>
      
  
    );
    
  }
}