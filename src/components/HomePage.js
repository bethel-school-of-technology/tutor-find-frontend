import React, { Component } from 'react';


export default class HomePage extends Component {
  render() {
    return (
    <div className="homepage">
        {this.props.children} 

           <lu>Welcome to the Community </lu>
          <p></p>
           <li>create</li>
           <li>connect</li>
           <li>converse</li>
<p></p>
          <h3>TUTORFIND</h3>
          <h3>A fanastic new plateform for people in the communicty to connect with each other.</h3>
          <h3> This connection hub will allow tutors to freelance their skills and for students to find help in their studies quickly and safely.</h3>
          <h3> The goal is to bring people together in their communities with common interests, peace and the love for helping people.  </h3>
        <p></p>
        </div>

      

    

    )
   
  }
}

{/* <div class="footer">
  <p>Footer</p>
</div> */}