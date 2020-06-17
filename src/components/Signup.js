
import React, { useState, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";
/*
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);

    this.state = {
      username: "",
      password: ""
    }
 
  }

  setUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  setPassword(e) {
    this.setState({
      subject: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [setIsError] = useState(false);
    const { setAuthTokens } = useAuth();

    console.log(user);

    axios
      .post("http://localhost:7000/users/add", user)
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });

      if (isLoggedIn) {
        return <Redirect to="/" />;
      }
    }


  render() {
    return (
      <div className="page">
      <div className="create-header">
        <h3>Post Your Tutor Service</h3>
        <div>Create a post with your service information to display to potential students.</div>
        <br></br>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group'">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label>Subject: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <textarea
              rows={3}
              cols={5}
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Subject Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
      


      <Card>
      <Logo src={"https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg"} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
    );
  }
}

*/
  function Signup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignup() {

    axios.post("http://localhost:7000/users/add/", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Logo src={"https://i.ibb.co/YZDRqDw/tutorfindlogo.jpg"} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;
