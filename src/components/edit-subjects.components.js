import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class EditSubject extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:7000/subjects/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          subject: response.data.subject,
          description: response.data.description,
          duration: response.data.duration
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    }, () => {
      console.log(this.state.username)}
      );
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    }, () => {
      console.log(this.state.email)}
      );
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    }, () => {
      console.log(this.state.subject)}
      );
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    }, () => {
      console.log(this.state.description)}
      );
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    }, () => {
      console.log(this.state.duration)}
      );
  }

  onSubmit(e) {
    e.preventDefault();

    const subject = {
      username: this.state.username,
      email:this.state.email,
      subject: this.state.subject,
      description: this.state.description,
      duration: this.state.duration
    };

    console.log(subject);

    axios
      .post("http://localhost:7000/subjects/update/" + this.props.match.params.id, subject)
      .then((res) => console.log(res.data));

    window.location = "/sessions";
  }

  render() {
    return (
      <div className="page">
        <h3>Edit Subject List</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            /> 
            </div>
            
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
          </div>

          <div className="form-group">
            <label>Description: </label>
            <textarea
              row={3}
              col={3}
              required
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
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
