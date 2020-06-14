import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
      <div className="container page create-header">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/">
              Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12" style={{ paddingRight: "4.25em" }}>
                <label htmlFor="name">Name:&nbsp;&nbsp;</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                
              </div>
              <div className="input-field col s12" style={{ paddingRight: "4em" }}>
                <label htmlFor="email">Email:&nbsp;&nbsp;</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                
              </div>
              <div className="input-field col s12" style={{ paddingRight: "5.9em" }}>
                <label htmlFor="password">Password:&nbsp;&nbsp;</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                
              </div>
              <div className="input-field col s12" style={{ paddingRight: "9.7em" }}>
                <label htmlFor="password2">Confirm Password:&nbsp;&nbsp;</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                
              </div>
              <div className="col s12" style={{ paddingRight: "1.3em" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      
    );
  }
}
export default Register;
