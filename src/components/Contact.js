import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="page">
        <h3>Contact Information</h3>
        <ul>
        <li>Email: Tutorfind@Awesome.com</li>
        <li>Phone: 777-777-7777</li>
        </ul>
      </div>
      
     
    );
    
  }
}