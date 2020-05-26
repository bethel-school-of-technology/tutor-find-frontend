import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./tutor-find-frontend/navbar.component";
import SubjectList from "./tutor-find-frontend/subjects-list.component";
import EditSubject from "./tutor-find-frontend/edit-subjects.components";
import CreateSubject from "./tutor-find-frontend/create-subject.component";
import CreateUser from "./tutor-find-frontend/create-user.component";

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
