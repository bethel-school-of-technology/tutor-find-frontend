import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sessions = (props) => (
  <tr>
    <td>{props.sessions.username}</td>
    <td>{props.sessions.minutes}</td>
    <td>{props.sessions.duration}</td>
    <td>{props.sessions.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.sessions._id}>edit</Link> |{" "}
      <button
        onClick={() => {
          props.deleteSessions(props.sessions._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class SessionsList extends Component {
  constructor(props) {
    super(props);

    this.deleteSessions = this.deleteSessions.bind(this);

    this.state = { sessions: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/sessions/")
      .then((response) => {
        this.setState({ sessions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSessions(id) {
    axios
      .delete("http://localhost:4000/sessions/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      sessions: this.state.sessions.filter((el) => el._id !== id),
    });
  }

  sessionsList() {
    return this.state.sessions.map((currentSessions) => {
      return (
        <Sessions
          Sessions={currentSessions}
          deleteSessions={this.deleteSessions}
          key={currentSessions._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Sessions List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th> Username </th>
              <th> Description </th>
              <th> Minutes</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.sessionsList()}</tbody>
        </table>
      </div>
    );
  }
}
