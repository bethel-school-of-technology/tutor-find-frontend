import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Subject = (props) => (
  <tr>
    <td>{props.subject.username}</td>
    <td>{props.subject.email}</td>
    <td>{props.subject.subject}</td>
    <td>{props.subject.description}</td>
    <td>{props.subject.duration}</td>
    <td>
      <Link to={"/edit/" + props.subject._id}>Edit</Link>&nbsp;|&nbsp;
      <a
        href="#"
        onClick={() => {
          props.deleteSubjects(props.subject._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class SubjectsList extends Component {
  constructor(props) {
    super(props);

    this.deleteSubjects = this.deleteSubjects.bind(this);

    this.state = { subjects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7000/subjects/")
      .then((response) => {
        this.setState({ subjects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSubjects(id) {
    if (localStorage.tokens != null) {
      axios
        .delete("http://localhost:7000/subjects/" + id)
        .then((res) => console.log(res.data));

      this.setState({
        subjects: this.state.subjects.filter((el) => el._id !== id),
      });
    } else{
      alert('You must be a Tutor to delete!')
    }
  }

  subjectsList() {
    return this.state.subjects.map((currentSubject) => {
      return (
        <Subject
          subject={currentSubject}
          deleteSubjects={this.deleteSubjects}
          key={currentSubject._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="page">
        <h3 className="create-header">Tutor Services</h3>
        <br></br>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th> Subject</th>
              <th> Description </th>
              <th> Minutes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.subjectsList()}</tbody>
        </table>
      </div>
    );
  }
}
