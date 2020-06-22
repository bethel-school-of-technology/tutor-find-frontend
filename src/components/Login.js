import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();


  function postLogin() {
    axios.post("http://localhost:7000/users/login", {
      userName,
      password
    }).then(result => {
      if (result.data.length > 0) {
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
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Button onClick={postLogin}>Log In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;