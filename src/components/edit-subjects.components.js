import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditSubject extends Component {
  constructor(props) {
    super(props);

    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      subject: "",
      description: "",
      duration: 0,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/subjects/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          subject: response.data.subject,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const subject = {
      subject: this.state.subject,
      description: this.state.description,
      duration: this.state.duration,
    };

    console.log(subject);

    axios
      .post(
        "http://localhost:4000/subjects/update/" + this.props.match.params.id,
        subject
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Subject List</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Subject: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
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
            <input
              type="submit"
              value="Edit Subject List"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
