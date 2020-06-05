import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Testing 123

import Navbar from "./components/navbar.component";
import SubjectList from "./components/subjects-list.component";
import EditSubject from "./components/edit-subjects.components";
import CreateSubject from "./components/create-subject.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={SubjectList} />
        <Route path="/edit/:id" component={EditSubject} />
        <Route path="/create" component={CreateSubject} />
        <Route path="/user" exct component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
