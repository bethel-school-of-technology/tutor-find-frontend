import React, { useState } from "react";
import { Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";
import { Redirect } from "react-router-dom";

function Admin(props) {
  const [isLoggedOut, setLoggedOut] = useState(false);
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(null);
    setLoggedOut(true);
  }

  if (isLoggedOut) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;