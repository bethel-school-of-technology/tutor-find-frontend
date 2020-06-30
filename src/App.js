import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import SubjectList from "./components/subjects-list.component";
import EditSubject from "./components/edit-subjects.components";
import CreateSubject from "./components/create-subject.component";
import HomePage from "./components/HomePage";
import SessionsList from "./components/sessions-list.component";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = React.useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/subjects-list" component={SubjectList} />
        <PrivateRoute path="/edit/:id" component={EditSubject} />
        <PrivateRoute path="/create" component={CreateSubject} />
        <Route path="/sessions" exact component={SessionsList} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>

    </AuthContext.Provider>
  );
}

export default App;
