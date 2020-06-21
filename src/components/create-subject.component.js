import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateSubjects extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      subject: "",
      description: "",
      duration: 0
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const subject = {
      username: this.state.username,
      email: this.state.email,
      subject: this.state.subject,
      description: this.state.description,
      duration: this.state.duration
    };

    console.log(subject);

    axios
      .post("http://localhost:7000/subjects/add", subject)
      .then((res) => console.log(res.data));

    window.location = "/sessions";
  }

  render() {
    return (
      <div className="page">
        <div className="create-header">
          <h3>Post Your Tutor Service</h3>
          <div>
            Create a post with your service information to display to potential
            students.
          </div>
          <br></br>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group'">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <br></br>
          <div className="form-group'">
            <label>Contact: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Subject: </label>
            <select
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            >
              <option selected>Choose...</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="English">English</option>
            </select>
            {/* <input
              type="text"
              required
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            /> */}
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
    );
  }
}
